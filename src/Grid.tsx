import React, { useState, useMemo, useRef, useEffect } from 'react';
import './Grid.css';
import { GridProps, Column } from './types';

import { resolveTheme } from './utils/theme';
import { useColumnOrder } from './hooks/useColumnOrder';
import { useColumnResize } from './hooks/useColumnResize';
import { useColumnVisibility } from './hooks/useColumnVisibility';
import { useSorting } from './hooks/useSorting';
import { useSelection } from './hooks/useSelection';
import { useRowExpansion } from './hooks/useRowExpansion';

import { GridHeader } from './components/GridHeader';
import { GridBody } from './components/GridBody';
import { GridFooter } from './components/GridFooter';
import { ColumnMenu } from './components/ColumnMenu';
import { ManageColumnsDialog } from './components/ManageColumnsDialog';

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
  // ── Hooks ─────────────────────────────────────────────────────────────────
  const { orderedColumns, draggedColKey, handleDragStart, handleDragOver, handleDrop, moveColumn } =
    useColumnOrder(columns);

  const { columnWidths, handleResizeStart } = useColumnResize();

  const { visibleColumnKeys, setVisibleColumnKeys } = useColumnVisibility(columns, selectable);

  const { sortConfig, handleSort, sortedData } = useSorting(data, onSort);

  const { handleSelectAll, handleSelectRow } = useSelection({
    data,
    selectionMode,
    selectedIds,
    onSelectionChange,
  });

  const { expandedRows, toggleRow } = useRowExpansion<T>();

  // ── Menu / Dialog state ───────────────────────────────────────────────────
  const [anchorEl, setAnchorEl] = useState<{
    element: HTMLElement;
    column: Column<T> | null;
    isSelection?: boolean;
  } | null>(null);
  const [showManageDialog, setShowManageDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // ── Refs ──────────────────────────────────────────────────────────────────
  const popoverRef = useRef<HTMLDivElement>(null);
  const manageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // ── Click-outside handler ─────────────────────────────────────────────────
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
        if (!isMenuItem) setShowManageDialog(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [anchorEl, showManageDialog]);

  const handleOpenMenu = (e: React.MouseEvent, column: Column<T> | null, isSelection?: boolean) => {
    e.stopPropagation();
    setAnchorEl({ element: e.currentTarget as HTMLElement, column, isSelection });
  };

  const handleCloseMenu = () => setAnchorEl(null);

  // ── Derived values ────────────────────────────────────────────────────────
  const filteredColumns = useMemo(
    () => orderedColumns.filter((col) => visibleColumnKeys.has(col.key as string)),
    [orderedColumns, visibleColumnKeys]
  );

  const { themeSurfaceStyle, activeTheme } = resolveTheme(theme, gridColor, gridTextColor);

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

  const gridStyle: React.CSSProperties = {
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

  // ── Render ────────────────────────────────────────────────────────────────
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
            <GridHeader
              filteredColumns={filteredColumns}
              gridStyle={gridStyle}
              selectable={selectable}
              visibleColumnKeys={visibleColumnKeys}
              selectionMode={selectionMode}
              data={data}
              selectedIds={selectedIds}
              handleSelectAll={handleSelectAll}
              sortConfig={sortConfig}
              handleSort={handleSort}
              allowSorting={allowSorting}
              allowReordering={allowReordering}
              allowResizing={allowResizing}
              draggedColKey={draggedColKey}
              handleDragStart={handleDragStart}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
              handleResizeStart={handleResizeStart}
              handleOpenMenu={handleOpenMenu}
            />
          )}
          <GridBody
            sortedData={sortedData}
            filteredColumns={filteredColumns}
            gridStyle={gridStyle}
            selectable={selectable}
            visibleColumnKeys={visibleColumnKeys}
            selectedIds={selectedIds}
            renderChildView={renderChildView}
            stripedColors={stripedColors}
            activeTheme={activeTheme}
            handleSelectRow={handleSelectRow}
            expandedRows={expandedRows}
            toggleRow={toggleRow}
          />
        </div>
      </div>

      {pagination && <GridFooter pagination={pagination} />}

      {anchorEl && (
        <ColumnMenu
          anchorEl={anchorEl}
          containerRef={containerRef}
          filteredColumns={filteredColumns}
          popoverRef={popoverRef}
          handleSort={handleSort}
          moveColumn={moveColumn}
          setVisibleColumnKeys={setVisibleColumnKeys}
          setShowManageDialog={setShowManageDialog}
          handleCloseMenu={handleCloseMenu}
        />
      )}

      {showManageDialog && (
        <ManageColumnsDialog
          manageRef={manageRef}
          columns={columns}
          selectable={selectable}
          visibleColumnKeys={visibleColumnKeys}
          setVisibleColumnKeys={setVisibleColumnKeys}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      )}
    </div>
  );
}
