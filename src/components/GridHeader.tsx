import React from 'react';
import { Column } from '../types';

interface SortConfig {
  key: string | null;
  direction: 'asc' | 'desc' | null;
}

interface GridHeaderProps<T> {
  filteredColumns: Column<T>[];
  gridStyle: React.CSSProperties;
  selectable?: boolean;
  visibleColumnKeys: Set<string>;
  selectionMode?: 'single' | 'multiple';
  data: T[];
  selectedIds: (string | number)[];
  handleSelectAll: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sortConfig: SortConfig;
  handleSort: (key: string) => void;
  allowSorting: boolean;
  allowReordering: boolean;
  allowResizing: boolean;
  draggedColKey: string | null;
  handleDragStart: (e: React.DragEvent, key: string) => void;
  handleDragOver: (e: React.DragEvent) => void;
  handleDrop: (e: React.DragEvent, targetKey: string) => void;
  handleResizeStart: (e: React.MouseEvent, key: string) => void;
  handleOpenMenu: (e: React.MouseEvent, column: Column<T> | null, isSelection?: boolean) => void;
}

export function GridHeader<T>({
  filteredColumns,
  gridStyle,
  selectable,
  visibleColumnKeys,
  selectionMode,
  data,
  selectedIds,
  handleSelectAll,
  sortConfig,
  handleSort,
  allowSorting,
  allowReordering,
  allowResizing,
  draggedColKey,
  handleDragStart,
  handleDragOver,
  handleDrop,
  handleResizeStart,
  handleOpenMenu,
}: GridHeaderProps<T>) {
  return (
    <div className="free-grid-header" style={gridStyle}>
      {selectable && visibleColumnKeys.has('__selection') && (
        <div className="free-grid-header-cell free-grid-checkbox-cell">
          {selectionMode !== 'single' ? (
            <>
              <input
                type="checkbox"
                className="free-grid-checkbox"
                onChange={handleSelectAll}
                checked={data.length > 0 && selectedIds.length === data.length}
              />
              <button
                className="free-grid-menu-button"
                onClick={(e) => handleOpenMenu(e, null, true)}
                style={{ position: 'absolute', right: '2px' }}
              >
                ⋮
              </button>
            </>
          ) : (
            <span aria-hidden="true" style={{ width: '18px', height: '18px' }} />
          )}
        </div>
      )}
      {filteredColumns.map((col) => {
        const isSortable = allowSorting !== false && col.sortable !== false;
        const isSorted = sortConfig.key === col.key;
        const isDraggable = allowReordering !== false && col.draggable !== false;
        const isResizable = allowResizing !== false && col.resizable !== false;

        return (
          <div
            key={col.key as string}
            className={`free-grid-header-cell ${isSortable ? 'sortable' : ''} ${
              isSorted ? 'active' : ''
            } ${draggedColKey === col.key ? 'dragging' : ''}`}
            draggable={isDraggable}
            onDragStart={(e) => handleDragStart(e, col.key as string)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, col.key as string)}
          >
            <div
              className="free-grid-header-content"
              onClick={() => isSortable && handleSort(col.key as string)}
            >
              <span className="free-grid-header-text">
                {col.header}
                {isSorted && (
                  <span className={`free-grid-sort-icon ${sortConfig.direction}`}>
                    {sortConfig.direction === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </span>
            </div>
            <button className="free-grid-menu-button" onClick={(e) => handleOpenMenu(e, col)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </button>
            {isResizable && (
              <div
                className="free-grid-resizer"
                onMouseDown={(e) => handleResizeStart(e, col.key as string)}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
