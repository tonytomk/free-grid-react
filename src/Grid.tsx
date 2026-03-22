import React, { useState, useMemo } from 'react';
import './Grid.css';
import { GridProps } from './types';

export function Grid<T extends { id?: string | number } | any>({
  data,
  columns,
  showHeader = true,
  renderChildView,
  selectable,
  selectedIds = [],
  onSelectionChange,
  pagination,
  className = '',
  id,
  allowSorting,
  onSort,
}: GridProps<T>) {
  const [expandedRows, setExpandedRows] = useState<Set<string | number>>(new Set());
  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: 'asc' | 'desc' | null;
  }>({
    key: null,
    direction: null,
  });

  const toggleRow = (rowIndex: number, item: T) => {
    const rowId = (item as any).id !== undefined ? (item as any).id : rowIndex;
    const newExpandedRows = new Set(expandedRows);
    if (newExpandedRows.has(rowId)) {
      newExpandedRows.delete(rowId);
    } else {
      newExpandedRows.add(rowId);
    }
    setExpandedRows(newExpandedRows);
  };

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' | null = 'asc';
    if (sortConfig.key === key) {
      if (sortConfig.direction === 'asc') direction = 'desc';
      else if (sortConfig.direction === 'desc') direction = null;
    }

    setSortConfig({ key, direction });
    if (onSort) {
      onSort(key, direction);
    }
  };

  const sortedData = useMemo(() => {
    if (onSort || !sortConfig.key || !sortConfig.direction) {
      return data;
    }

    return [...data].sort((a, b) => {
      const aValue = (a as any)[sortConfig.key!];
      const bValue = (b as any)[sortConfig.key!];

      if (aValue === bValue) return 0;
      if (aValue === null || aValue === undefined) return 1;
      if (bValue === null || bValue === undefined) return -1;

      const comparison = aValue < bValue ? -1 : 1;
      return sortConfig.direction === 'asc' ? comparison : -comparison;
    });
  }, [data, sortConfig, onSort]);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onSelectionChange) return;
    if (e.target.checked) {
      onSelectionChange(data.map((item, i) => (item as any).id !== undefined ? (item as any).id : i));
    } else {
      onSelectionChange([]);
    }
  };

  const handleSelectRow = (e: React.ChangeEvent<HTMLInputElement>, rowId: string | number) => {
    e.stopPropagation();
    if (!onSelectionChange) return;
    const newSelected = new Set(selectedIds);
    if (e.target.checked) {
      newSelected.add(rowId);
    } else {
      newSelected.delete(rowId);
    }
    onSelectionChange(Array.from(newSelected));
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `${selectable ? '50px ' : ''}${columns
      .map((col) => {
        if (col.width) return typeof col.width === 'number' ? `${col.width}px` : col.width;
        if (col.flex) return `${col.flex}fr`;
        return '1fr';
      })
      .join(' ')}`,
  };

  return (
    <div className={`free-grid-container ${className}`} id={id}>
      {showHeader && (
        <div className="free-grid-header" style={gridStyle}>
          {selectable && (
            <div className="free-grid-header-cell free-grid-checkbox-cell">
              <input
                type="checkbox"
                className="free-grid-checkbox"
                onChange={handleSelectAll}
                checked={data.length > 0 && selectedIds.length === data.length}
              />
            </div>
          )}
          {columns.map((col, i) => {
            const isSortable = allowSorting !== false && col.sortable !== false;
            const isSorted = sortConfig.key === col.key;

            return (
              <div
                key={`header-${i}`}
                className={`free-grid-header-cell ${isSortable ? 'sortable' : ''}`}
                onClick={() => isSortable && handleSort(col.key as string)}
              >
                {col.header}
                {isSortable && (
                  <span className={`free-grid-sort-icon ${isSorted ? 'active' : ''}`}>
                    {isSorted && sortConfig.direction === 'asc' ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 14l5-5 5 5z" />
                      </svg>
                    ) : isSorted && sortConfig.direction === 'desc' ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 10l5 5 5-5z" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="placeholder">
                        <path d="M7 14l5-5 5 5z M7 10l5 5 5-5z" />
                      </svg>
                    )}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
      <div className="free-grid-body">
        {sortedData.map((item, rowIndex) => {
          const rowId = (item as any).id !== undefined ? (item as any).id : rowIndex;
          const isExpanded = expandedRows.has(rowId);
          const isSelected = selectedIds.includes(rowId);

          return (
            <React.Fragment key={`row-${rowId}`}>
              <div
                className={`free-grid-row ${renderChildView ? 'expandable' : ''} ${
                  isExpanded ? 'expanded' : ''
                } ${isSelected ? 'selected' : ''}`}
                style={gridStyle}
                onClick={() => renderChildView && toggleRow(rowIndex, item)}
              >
                {selectable && (
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
                {columns.map((col, colIndex) => {
                  const value = (item as any)[col.key];
                  return (
                    <div key={`cell-${rowIndex}-${colIndex}`} className="free-grid-cell">
                      {col.render ? col.render(value, item) : value}
                    </div>
                  );
                })}
              </div>
              {isExpanded && renderChildView && (
                <div className="free-grid-child-view">
                  {renderChildView(item)}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
      {pagination && (
        <div className="free-grid-footer">
          <div className="free-grid-pagination">
            <span>
              {Math.min((pagination.page - 1) * pagination.pageSize + 1, pagination.total)}-
              {Math.min(pagination.page * pagination.pageSize, pagination.total)} of {pagination.total}
            </span>
            <div className="free-grid-pagination-actions">
              <button className="free-grid-icon-button" disabled={pagination.page <= 1}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <button
                className="free-grid-icon-button"
                disabled={pagination.page * pagination.pageSize >= pagination.total}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
