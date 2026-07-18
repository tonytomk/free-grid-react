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
  showRowNumbers?: boolean;
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
  addRowOnLastRowEdit?: boolean;
  onAddRow?: (row?: Partial<T>) => void;
}

export function GridBody<T>({
  sortedData,
  filteredColumns,
  gridStyle,
  selectable,
  showRowNumbers = false,
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
  addRowOnLastRowEdit = false,
  onAddRow,
}: GridBodyProps<T>) {
  const [editingCell, setEditingCell] = useState<EditingCell | null>(null);
  const [editingValue, setEditingValue] = useState<string>('');
  const [newRowValues, setNewRowValues] = useState<Partial<T>>({});

  const rowsToRender = allowAddRow && addRowOnLastRowEdit ? [...sortedData, ({} as T)] : sortedData;
  const getRowId = (item: T, rowIndex: number) =>
    (item as any).id !== undefined ? (item as any).id : rowIndex;

  const getNextEditableCell = (currentRowIndex: number, currentColIndex: number) => {
    for (let nextRow = currentRowIndex; nextRow < rowsToRender.length; nextRow += 1) {
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
    rowIndex: number,
    colIndex: number,
    nextCell?: { rowIndex: number; colIndex: number }
  ) => {
    const isPlaceholderRow = allowAddRow && addRowOnLastRowEdit && rowIndex === sortedData.length;
    const value = editingValue;

    if (isPlaceholderRow && onAddRow && colIndex === 0 && value.trim() !== '') {
      const newRow = {
        ...newRowValues,
        [column.key as string]: value,
      } as Partial<T>;
      onAddRow(newRow);
      setNewRowValues({});
      setEditingCell(null);
      return;
    }

    if (!editingCell || !onCellEdit) {
      setEditingCell(null);
      return;
    }

    onCellEdit(item, column.key, value);

    if (nextCell) {
      const nextItem = rowsToRender[nextCell.rowIndex];
      const nextColumn = filteredColumns[nextCell.colIndex];
      const nextValue = (nextItem as any)[nextColumn.key] ?? '';
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

  const handleRowClick = (rowIndex: number, item: T, isPlaceholderRow: boolean) => {
    if (allowAddRow && !addRowOnLastRowEdit && rowIndex === sortedData.length - 1) {
      onAddRow?.();
      return;
    }

    if (renderChildView && !isPlaceholderRow) {
      toggleRow(rowIndex, item);
    }
  };

  const handleCellClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    column: Column<T>,
    value: any,
    rowId: string | number,
    rowIndex: number,
    colIndex: number
  ) => {
    const isPlaceholderRow = allowAddRow && addRowOnLastRowEdit && rowIndex === sortedData.length;
    const isFirstDataColumn = colIndex === 0;
    const editableBase = onCellEdit ? column.isEditable ?? isEditable : false;
    const canEditPlaceholder = isPlaceholderRow && isFirstDataColumn && allowAddRow && addRowOnLastRowEdit;
    const editable = editableBase || canEditPlaceholder;

    if (!editable) return;
    if (!onCellEdit && !canEditPlaceholder) return;

    event.stopPropagation();
    setEditingCell({ rowId, columnKey: column.key as string });
    setEditingValue(value !== undefined && value !== null ? String(value) : '');
  };

  return (
    <div className="free-grid-body">
      {rowsToRender.map((item, rowIndex) => {
        const isPlaceholderRow = allowAddRow && addRowOnLastRowEdit && rowIndex === sortedData.length;
        const rowId = isPlaceholderRow
          ? `new-row-${rowIndex}`
          : (item as any).id !== undefined
          ? (item as any).id
          : rowIndex;
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
              onClick={() => handleRowClick(rowIndex, item, isPlaceholderRow)}
            >
              {showRowNumbers && (
                <div className="free-grid-cell free-grid-row-number-cell">
                  {!isPlaceholderRow ? rowIndex + 1 : ''}
                </div>
              )}
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
                const isPlaceholderRow = allowAddRow && addRowOnLastRowEdit && rowIndex === sortedData.length;
                const isFirstDataColumn = colIndex === 0;
                const editableBase = onCellEdit ? col.isEditable ?? isEditable : false;
                const editable = editableBase || (isPlaceholderRow && isFirstDataColumn && allowAddRow && addRowOnLastRowEdit);
                const isCellEditing =
                  editingCell?.rowId === rowId && editingCell?.columnKey === (col.key as string);

                return (
                  <div
                    key={`cell-${rowIndex}-${colIndex}`}
                    className={`free-grid-cell ${editable ? 'editable' : ''}`}
                    onClick={(e) => handleCellClick(e, col, value, rowId, rowIndex, colIndex)}
                  >
                    {isCellEditing ? (
                      col.editor ? (
                        col.editor(value, item, setEditingValue, () => commitEdit(item, col, rowIndex, colIndex), cancelEdit)
                      ) : (
                        <input
                          className="free-grid-cell-input"
                          autoFocus
                          value={editingValue}
                          onChange={(e) => {
                            const nextValue = e.target.value;
                            setEditingValue(nextValue);
                            if (isPlaceholderRow) {
                              setNewRowValues((prev) => ({
                                ...prev,
                                [col.key as string]: nextValue as any,
                              }));
                            }
                          }}
                          onBlur={() => {
                            if (
                              editingCell?.rowId !== rowId ||
                              editingCell?.columnKey !== (col.key as string)
                            ) {
                              return;
                            }
                            commitEdit(item, col, rowIndex, colIndex);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Tab') {
                              e.preventDefault();
                              const nextCell = getNextEditableCell(rowIndex, colIndex);
                              if (nextCell) {
                                commitEdit(item, col, rowIndex, colIndex, nextCell);
                              } else {
                                commitEdit(item, col, rowIndex, colIndex);
                              }
                            }
                            if (e.key === 'Enter') {
                              commitEdit(item, col, rowIndex, colIndex);
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

