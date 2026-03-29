import React, { useState, useMemo, useRef, useEffect } from 'react';
import './Grid.css';
import { GridProps, Column } from './types';

export function Grid<T extends { id?: string | number } | any>({
  data,
  columns,
  showHeader = true,
  selectionMode = 'multiple',
  stripedRows = false,
  stripedRowOddColor,
  stripedRowEvenColor,
  theme = 'light',
  gridColor,
  gridTextColor,
  renderChildView,
  selectable,
  selectedIds = [],
  onSelectionChange,
  pagination,
  className = '',
  id,
  allowSorting = true,
  onSort,
  allowReordering = true,
  allowResizing = true,
}: GridProps<T>) {
  const [columnKeys, setColumnKeys] = useState<string[]>(() => columns.map(col => col.key as string));
  const [columnWidths, setColumnWidths] = useState<Record<string, number | string>>({});
  const [resizing, setResizing] = useState<{ key: string; startX: number; startWidth: number } | null>(null);
  const [draggedColKey, setDraggedColKey] = useState<string | null>(null);
  const [expandedRows, setExpandedRows] = useState<Set<string | number>>(new Set());
  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: 'asc' | 'desc' | null;
  }>({
    key: null,
    direction: null,
  });

  const [visibleColumnKeys, setVisibleColumnKeys] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    if (selectable) initial.add('__selection');
    columns.forEach((col) => {
      if (!col.defaultHidden) initial.add(col.key as string);
    });
    return initial;
  });

  const [anchorEl, setAnchorEl] = useState<{
    element: HTMLElement;
    column: Column<T> | null;
    isSelection?: boolean;
  } | null>(null);
  const [showManageDialog, setShowManageDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const popoverRef = useRef<HTMLDivElement>(null);
  const manageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setColumnKeys(columns.map(col => col.key as string));
  }, [columns]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!resizing) return;
      const deltaX = e.clientX - resizing.startX;
      const newWidth = Math.max(resizing.startWidth + deltaX, 50);
      setColumnWidths(prev => ({ ...prev, [resizing.key]: newWidth }));
    };

    const handleMouseUp = () => {
      setResizing(null);
    };

    if (resizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [resizing]);

  const orderedColumns = useMemo(() => {
    return columnKeys
      .map(key => columns.find(col => col.key === key))
      .filter((col): col is Column<T> => !!col);
  }, [columnKeys, columns]);

  const filteredColumns = useMemo(
    () => orderedColumns.filter((col) => visibleColumnKeys.has(col.key as string)),
    [orderedColumns, visibleColumnKeys]
  );

  const stripedColors = stripedRows
    ? {
        odd:
          stripedRowOddColor ??
          (theme === 'light' && !gridColor ? 'rgba(0, 0, 0, 0.00)' : 'rgba(255, 255, 255, 0.04)'),
        even:
          stripedRowEvenColor ??
          (theme === 'light' && !gridColor ? 'rgba(0, 0, 0, 0.03)' : 'rgba(255, 255, 255, 0.08)'),
      }
    : null;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        anchorEl &&
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        !anchorEl.element.contains(event.target as Node)
      ) {
        handleCloseMenu();
      }
      if (
        showManageDialog &&
        manageRef.current &&
        !manageRef.current.contains(event.target as Node)
      ) {
        const isMenuItem = (event.target as HTMLElement).closest('.free-grid-menu-item');
        if (!isMenuItem) {
          setShowManageDialog(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [anchorEl, showManageDialog]);

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
    if (selectionMode === 'single') return;
    if (e.target.checked) {
      onSelectionChange(data.map((item, i) => (item as any).id !== undefined ? (item as any).id : i));
    } else {
      onSelectionChange([]);
    }
  };

  const handleSelectRow = (e: React.ChangeEvent<HTMLInputElement>, rowId: string | number) => {
    e.stopPropagation();
    if (!onSelectionChange) return;
    if (selectionMode === 'single') {
      onSelectionChange(e.target.checked ? [rowId] : []);
      return;
    }

    const newSelected = new Set(selectedIds);
    if (e.target.checked) {
      newSelected.add(rowId);
    } else {
      newSelected.delete(rowId);
    }
    onSelectionChange(Array.from(newSelected));
  };

  const handleDragStart = (e: React.DragEvent, key: string) => {
    setDraggedColKey(key);
    e.dataTransfer.setData('text/plain', key);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetKey: string) => {
    e.preventDefault();
    if (!draggedColKey || draggedColKey === targetKey) return;

    const newKeys = [...columnKeys];
    const sourceIdx = newKeys.indexOf(draggedColKey);
    const targetIdx = newKeys.indexOf(targetKey);
    
    newKeys.splice(sourceIdx, 1);
    newKeys.splice(targetIdx, 0, draggedColKey);
    setColumnKeys(newKeys);
    setDraggedColKey(null);
  };

  const moveColumn = (key: string, direction: 'left' | 'right') => {
    const newKeys = [...columnKeys];
    const idx = newKeys.indexOf(key);
    if (idx === -1) return;

    if (direction === 'left' && idx > 0) {
      [newKeys[idx], newKeys[idx - 1]] = [newKeys[idx - 1], newKeys[idx]];
    } else if (direction === 'right' && idx < newKeys.length - 1) {
      [newKeys[idx], newKeys[idx + 1]] = [newKeys[idx + 1], newKeys[idx]];
    }
    setColumnKeys(newKeys);
  };

  const handleResizeStart = (e: React.MouseEvent, key: string) => {
    e.stopPropagation();
    e.preventDefault();
    const cell = (e.target as HTMLElement).closest('.free-grid-header-cell');
    if (cell) {
      setResizing({
        key,
        startX: e.clientX,
        startWidth: cell.getBoundingClientRect().width,
      });
    }
  };

  const handleOpenMenu = (e: React.MouseEvent, column: Column<T> | null, isSelection?: boolean) => {
    e.stopPropagation();
    setAnchorEl({ element: e.currentTarget as HTMLElement, column, isSelection });
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const themePresets = {
    light: {
      gridColor: '#ffffff',
      gridTextColor: 'rgba(0, 0, 0, 0.87)',
      gridMutedColor: 'rgba(0, 0, 0, 0.54)',
      gridBorderColor: '#e0e0e0',
      gridHoverColor: 'rgba(0, 0, 0, 0.04)',
      gridSelectedColor: 'rgba(25, 118, 210, 0.08)',
    },
    dark: {
      gridColor: '#0f172a',
      gridTextColor: '#ffffff',
      gridMutedColor: 'rgba(255, 255, 255, 0.72)',
      gridBorderColor: 'rgba(255, 255, 255, 0.18)',
      gridHoverColor: 'rgba(255, 255, 255, 0.08)',
      gridSelectedColor: 'rgba(255, 255, 255, 0.12)',
    },
    blue: {
      gridColor: '#1d4ed8',
      gridTextColor: '#ffffff',
      gridMutedColor: 'rgba(255, 255, 255, 0.72)',
      gridBorderColor: 'rgba(255, 255, 255, 0.18)',
      gridHoverColor: 'rgba(255, 255, 255, 0.08)',
      gridSelectedColor: 'rgba(255, 255, 255, 0.12)',
    },
  } satisfies Record<string, {
    gridColor: string;
    gridTextColor: string;
    gridMutedColor: string;
    gridBorderColor: string;
    gridHoverColor: string;
    gridSelectedColor: string;
  }>;

  const activeTheme = themePresets[theme] ?? themePresets.light;
  const useCustomSurfacePalette = theme === 'light' && !!gridColor;
  const resolvedGridColor = gridColor ?? activeTheme.gridColor;
  const resolvedGridTextColor =
    gridTextColor ?? (useCustomSurfacePalette ? '#ffffff' : activeTheme.gridTextColor);
  const resolvedGridMutedColor =
    gridTextColor ?? (useCustomSurfacePalette ? 'rgba(255, 255, 255, 0.72)' : activeTheme.gridMutedColor);
  const resolvedGridBorderColor = useCustomSurfacePalette
    ? 'rgba(255, 255, 255, 0.18)'
    : activeTheme.gridBorderColor;
  const resolvedGridHoverColor = useCustomSurfacePalette
    ? 'rgba(255, 255, 255, 0.08)'
    : activeTheme.gridHoverColor;
  const resolvedGridSelectedColor = useCustomSurfacePalette
    ? 'rgba(255, 255, 255, 0.12)'
    : activeTheme.gridSelectedColor;

  const themeSurfaceStyle = ({
    '--fg-grid-surface': resolvedGridColor,
    '--fg-grid-surface-text': resolvedGridTextColor,
    '--fg-grid-surface-muted': resolvedGridMutedColor,
    '--fg-grid-surface-border': resolvedGridBorderColor,
    '--fg-grid-surface-hover': resolvedGridHoverColor,
    '--fg-grid-surface-selected': resolvedGridSelectedColor,
  } as React.CSSProperties);

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `${
      selectable && visibleColumnKeys.has('__selection') ? '50px ' : ''
    }${filteredColumns
      .map((col) => {
        const manualWidth = columnWidths[col.key as string];
        if (manualWidth) return typeof manualWidth === 'number' ? `${manualWidth}px` : manualWidth;
        if (col.width) return typeof col.width === 'number' ? `${col.width}px` : col.width;
        if (col.flex) return `${col.flex}fr`;
        return '1fr';
      })
      .join(' ')}`,
  };

  return (
    <div
      className={`free-grid-container ${className}`}
      id={id}
      ref={containerRef}
      style={themeSurfaceStyle}
    >
      <div className="free-grid-scroll-container">
        <div className="free-grid-inner">
          {showHeader && (
        <div className="free-grid-header" style={gridStyle}>
          {selectable && selectionMode !== 'single' && visibleColumnKeys.has('__selection') && (
            <div className="free-grid-header-cell free-grid-checkbox-cell">
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
                <button
                  className="free-grid-menu-button"
                  onClick={(e) => handleOpenMenu(e, col)}
                >
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
      )}
      <div className="free-grid-body">
      {sortedData.map((item, rowIndex) => {
          const rowId = (item as any).id !== undefined ? (item as any).id : rowIndex;
          const isExpanded = expandedRows.has(rowId);
          const isSelected = selectedIds.includes(rowId);
          const rowStripeStyle = stripedColors && !isSelected
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
                <div className="free-grid-child-view">
                  {renderChildView(item)}
                </div>
              )}
            </React.Fragment>
          );
        })}
        </div>
      </div>
      </div>
      {pagination && (
        <div className="free-grid-footer">
          <div className="free-grid-pagination">
            <span>
              {Math.min((pagination.page - 1) * pagination.pageSize + 1, pagination.total)}-
              {Math.min(pagination.page * pagination.pageSize, pagination.total)} of {pagination.total}
            </span>
            <div className="free-grid-pagination-actions">
              <button 
                className="free-grid-icon-button" 
                disabled={pagination.page <= 1}
                onClick={() => pagination.onPageChange?.(pagination.page - 1)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <button
                className="free-grid-icon-button"
                disabled={pagination.page * pagination.pageSize >= pagination.total}
                onClick={() => pagination.onPageChange?.(pagination.page + 1)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {anchorEl && containerRef.current && (
        <div
          ref={popoverRef}
          className="free-grid-popover"
          style={{
            top:
              anchorEl.element.getBoundingClientRect().bottom -
              containerRef.current.getBoundingClientRect().top +
              4,
            ...(filteredColumns.length > 0 &&
            anchorEl.column?.key === filteredColumns[filteredColumns.length - 1].key
              ? {
                  right:
                    containerRef.current.getBoundingClientRect().right -
                    anchorEl.element.getBoundingClientRect().right,
                }
              : {
                  left:
                    anchorEl.element.getBoundingClientRect().left -
                    containerRef.current.getBoundingClientRect().left,
                }),
          }}
        >
          {anchorEl.isSelection ? (
            <div
              className="free-grid-menu-item"
              onClick={() => {
                setShowManageDialog(true);
                handleCloseMenu();
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" />
              </svg>
              Manage columns
            </div>
          ) : (
            <>
              <div
                className="free-grid-menu-item"
                onClick={() => {
                  handleSort(anchorEl.column!.key as string);
                  handleCloseMenu();
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
                </svg>
                Sort by ASC
              </div>
              <div
                className="free-grid-menu-item"
                onClick={() => {
                  handleSort(anchorEl.column!.key as string);
                  handleCloseMenu();
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                </svg>
                Sort by DESC
              </div>
              <div className="free-grid-menu-divider" />
              <div
                className="free-grid-menu-item"
                onClick={() => {
                  moveColumn(anchorEl.column!.key as string, 'left');
                  handleCloseMenu();
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                </svg>
                Move left
              </div>
              <div
                className="free-grid-menu-item"
                onClick={() => {
                  moveColumn(anchorEl.column!.key as string, 'right');
                  handleCloseMenu();
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
                Move right
              </div>
              <div className="free-grid-menu-divider" />
              <div
                className="free-grid-menu-item"
                onClick={() => {
                  const newVisible = new Set(visibleColumnKeys);
                  newVisible.delete(anchorEl.column!.key as string);
                  setVisibleColumnKeys(newVisible);
                  handleCloseMenu();
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.82l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.74-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2.27 4.27l2.28 2.28.46.46C3.1 8.35 1.61 10.06 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.54 3.27 2.27 4.27zM12 17c-2.76 0-5-2.24-5-5 0-.65.13-1.26.36-1.82l6.46 6.46c-.56.23-1.17.36-1.82.36z" />
                </svg>
                Hide column
              </div>
              <div
                className="free-grid-menu-item"
                onClick={() => {
                  setShowManageDialog(true);
                  handleCloseMenu();
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" />
                </svg>
                Manage columns
              </div>
            </>
          )}
        </div>
      )}

      {showManageDialog && (
        <div 
          ref={manageRef}
          className="free-grid-manage-popover" 
          onClick={(e) => e.stopPropagation()}
        >
          <div className="free-grid-dialog-header">
            <div className="free-grid-search-container">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.5 }}>
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="free-grid-search-input"
                autoFocus
              />
            </div>
          </div>
          <div className="free-grid-dialog-content">
            <div className="free-grid-dialog-actions">
              <label className="free-grid-dialog-row">
                <input
                  type="checkbox"
                  className="free-grid-checkbox"
                  checked={visibleColumnKeys.size === columns.length + (selectable ? 1 : 0)}
                  onChange={(e) => {
                    if (e.target.checked) {
                        const all = new Set(columns.map(c => c.key as string));
                        if (selectable) all.add('__selection');
                        setVisibleColumnKeys(all);
                      } else {
                        setVisibleColumnKeys(new Set());
                      }
                  }}
                />
                <span>Show/Hide All</span>
              </label>
              <button
                className="free-grid-text-button"
                onClick={() => {
                  const initial = new Set<string>();
                  if (selectable) initial.add('__selection');
                  columns.forEach(c => { if (!c.defaultHidden) initial.add(c.key as string); });
                  setVisibleColumnKeys(initial);
                }}
              >
                RESET
              </button>
            </div>

            <div className="free-grid-columns-list">
              {selectable && "checkbox selection".includes(searchTerm.toLowerCase()) && (
                <label className="free-grid-dialog-row">
                  <input
                    type="checkbox"
                    className="free-grid-checkbox"
                    checked={visibleColumnKeys.has('__selection')}
                    onChange={() => {
                      const next = new Set(visibleColumnKeys);
                      if (next.has('__selection')) next.delete('__selection');
                      else next.add('__selection');
                      setVisibleColumnKeys(next);
                    }}
                  />
                  <span>Checkbox selection</span>
                </label>
              )}
              {columns
                .filter((c) => (c.header as string).toLowerCase().includes(searchTerm.toLowerCase()))
                .map((col) => (
                  <label key={col.key as string} className="free-grid-dialog-row">
                    <input
                      type="checkbox"
                      className="free-grid-checkbox"
                      checked={visibleColumnKeys.has(col.key as string)}
                      onChange={() => {
                        const next = new Set(visibleColumnKeys);
                        if (next.has(col.key as string)) next.delete(col.key as string);
                        else next.add(col.key as string);
                        setVisibleColumnKeys(next);
                      }}
                    />
                    <span>{col.header as string}</span>
                  </label>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
