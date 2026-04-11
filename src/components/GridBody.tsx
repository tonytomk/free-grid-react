import React from 'react';
import { Column } from '../types';
import { ActiveTheme } from '../utils/theme';

interface StripedColors {
  odd: string;
  even: string;
}

interface GridBodyProps<T> {
  sortedData: T[];
  filteredColumns: Column<T>[];
  gridStyle: React.CSSProperties;
  selectable?: boolean;
  visibleColumnKeys: Set<string>;
  selectedIds: (string | number)[];
  renderChildView?: (item: T) => React.ReactNode;
  stripedColors: StripedColors | null;
  activeTheme: ActiveTheme;
  handleSelectRow: (e: React.ChangeEvent<HTMLInputElement>, rowId: string | number) => void;
  expandedRows: Set<string | number>;
  toggleRow: (rowIndex: number, item: T) => void;
}

export function GridBody<T>({
  sortedData,
  filteredColumns,
  gridStyle,
  selectable,
  visibleColumnKeys,
  selectedIds,
  renderChildView,
  stripedColors,
  activeTheme,
  handleSelectRow,
  expandedRows,
  toggleRow,
}: GridBodyProps<T>) {
  return (
    <div className="free-grid-body">
      {sortedData.map((item, rowIndex) => {
        const rowId = (item as any).id !== undefined ? (item as any).id : rowIndex;
        const isExpanded = expandedRows.has(rowId);
        const isSelected = selectedIds.includes(rowId);
        const rowStripeStyle =
          stripedColors && !isSelected
            ? ({
                '--fg-row-background':
                  rowIndex % 2 === 0 ? stripedColors.odd : stripedColors.even,
                '--fg-row-hover-background': activeTheme.gridHoverColor,
              } as React.CSSProperties)
            : undefined;

        return (
          <React.Fragment key={`row-${rowId}`}>
            <div
              className={`free-grid-row ${renderChildView ? 'expandable' : ''} ${
                isExpanded ? 'expanded' : ''
              } ${isSelected ? 'selected' : ''}`}
              style={{ ...gridStyle, ...rowStripeStyle }}
              onClick={() => renderChildView && toggleRow(rowIndex, item)}
            >
              {selectable && visibleColumnKeys.has('__selection') && (
                <div className="free-grid-cell free-grid-checkbox-cell">
                  <input
                    type="checkbox"
                    className="free-grid-checkbox"
                    checked={isSelected}
                    onChange={(e) => handleSelectRow(e, rowId)}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}
              {filteredColumns.map((col, colIndex) => {
                const value = (item as any)[col.key];
                return (
                  <div key={`cell-${rowIndex}-${colIndex}`} className="free-grid-cell">
                    {col.render ? col.render(value, item) : value}
                  </div>
                );
              })}
            </div>
            {isExpanded && renderChildView && (
              <div className="free-grid-child-view">{renderChildView(item)}</div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
