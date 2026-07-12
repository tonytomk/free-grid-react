import React, { useState } from 'react';
import { Column } from '../types';
import { ActiveTheme } from '../utils/theme';

interface StripedColors {
  odd: string;
  even: string;
}

interface EditingCell {
  rowId: string | number;
  columnKey: string;
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
  isEditable?: boolean;
  onCellEdit?: (row: T, columnKey: keyof T | string, value: any) => void;
  allowAddRow?: boolean;
  onAddRow?: () => void;
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
  isEditable = false,
  onCellEdit,
  allowAddRow = false,
  onAddRow,
}: GridBodyProps<T>) {
  const [editingCell, setEditingCell] = useState<EditingCell | null>(null);
  const [editingValue, setEditingValue] = useState<string>('');

  const getRowId = (item: T, rowIndex: number) =>
    (item as any).id !== undefined ? (item as any).id : rowIndex;

  const getNextEditableCell = (currentRowIndex: number, currentColIndex: number) => {
    for (let nextRow = currentRowIndex; nextRow < sortedData.length; nextRow += 1) {
      const startCol = nextRow === currentRowIndex ? currentColIndex + 1 : 0;
      for (let nextCol = startCol; nextCol < filteredColumns.length; nextCol += 1) {
        const nextColumn = filteredColumns[nextCol];
        const editable = nextColumn.isEditable ?? isEditable;
        if (onCellEdit && editable) {
          return { rowIndex: nextRow, colIndex: nextCol };
        }
      }
    }
    return null;
  };

  const commitEdit = (
    item: T,
    column: Column<T>,
    nextCell?: { rowIndex: number; colIndex: number }
  ) => {
    if (!editingCell || !onCellEdit) {
      setEditingCell(null);
      return;
    }

    const value = editingValue;
    onCellEdit(item, column.key, value);

    if (nextCell) {
      const nextItem = sortedData[nextCell.rowIndex];
      const nextColumn = filteredColumns[nextCell.colIndex];
      const nextValue = nextItem[nextColumn.key] ?? '';
      setEditingCell({
        rowId: getRowId(nextItem, nextCell.rowIndex),
        columnKey: nextColumn.key as string,
      });
      setEditingValue(
        nextValue !== undefined && nextValue !== null ? String(nextValue) : ''
      );
    } else {
      setEditingCell(null);
    }
  };

  const cancelEdit = () => {
    setEditingCell(null);
  };

  const handleRowClick = (rowIndex: number, item: T) => {
    if (allowAddRow && rowIndex === sortedData.length - 1) {
      onAddRow?.();
      return;
    }

    if (renderChildView) {
      toggleRow(rowIndex, item);
    }
  };

  const handleCellClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    column: Column<T>,
    value: any,
    rowId: string | number
  ) => {
    if (!onCellEdit) return;

    const editable = column.isEditable ?? isEditable;
    if (!editable) return;

    event.stopPropagation();
    setEditingCell({ rowId, columnKey: column.key as string });
    setEditingValue(value !== undefined && value !== null ? String(value) : '');
  };

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
              onClick={() => handleRowClick(rowIndex, item)}
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
                const editable = onCellEdit ? col.isEditable ?? isEditable : false;
                const isCellEditing =
                  editingCell?.rowId === rowId && editingCell?.columnKey === (col.key as string);

                return (
                  <div
                    key={`cell-${rowIndex}-${colIndex}`}
                    className={`free-grid-cell ${editable ? 'editable' : ''}`}
                    onClick={(e) => handleCellClick(e, col, value, rowId)}
                  >
                    {isCellEditing ? (
                      col.editor ? (
                        col.editor(value, item, setEditingValue, () => commitEdit(item, col), cancelEdit)
                      ) : (
                        <input
                          className="free-grid-cell-input"
                          autoFocus
                          value={editingValue}
                          onChange={(e) => setEditingValue(e.target.value)}
                          onBlur={() => {
                            if (
                              editingCell?.rowId !== rowId ||
                              editingCell?.columnKey !== (col.key as string)
                            ) {
                              return;
                            }
                            commitEdit(item, col);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Tab') {
                              e.preventDefault();
                              const nextCell = getNextEditableCell(rowIndex, colIndex);
                              if (nextCell) {
                                commitEdit(item, col, nextCell);
                              } else {
                                commitEdit(item, col);
                              }
                            }
                            if (e.key === 'Enter') {
                              commitEdit(item, col);
                            }
                            if (e.key === 'Escape') {
                              cancelEdit();
                            }
                          }}
                          onClick={(e) => e.stopPropagation()}
                        />
                      )
                    ) : col.render ? (
                      col.render(value, item)
                    ) : (
                      value
                    )}
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

