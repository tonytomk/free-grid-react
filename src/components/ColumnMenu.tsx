import React from 'react';
import { Column } from '../types';

interface ColumnMenuProps<T> {
  anchorEl: { element: HTMLElement; column: Column<T> | null; isSelection?: boolean };
  containerRef: React.RefObject<HTMLDivElement | null>;
  filteredColumns: Column<T>[];
  popoverRef: React.RefObject<HTMLDivElement | null>;
  handleSort: (key: string) => void;
  moveColumn: (key: string, direction: 'left' | 'right') => void;
  setVisibleColumnKeys: React.Dispatch<React.SetStateAction<Set<string>>>;
  setShowManageDialog: React.Dispatch<React.SetStateAction<boolean>>;
  handleCloseMenu: () => void;
}

export function ColumnMenu<T>({
  anchorEl,
  containerRef,
  filteredColumns,
  popoverRef,
  handleSort,
  moveColumn,
  setVisibleColumnKeys,
  setShowManageDialog,
  handleCloseMenu,
}: ColumnMenuProps<T>) {
  if (!containerRef.current) return null;

  const containerRect = containerRef.current.getBoundingClientRect();
  const anchorRect = anchorEl.element.getBoundingClientRect();
  const isLastColumn =
    filteredColumns.length > 0 &&
    anchorEl.column?.key === filteredColumns[filteredColumns.length - 1].key;

  const popoverStyle: React.CSSProperties = {
    top: anchorRect.bottom - containerRect.top + 4,
    ...(isLastColumn
      ? { right: containerRect.right - anchorRect.right }
      : { left: anchorRect.left - containerRect.left }),
  };

  return (
    <div ref={popoverRef} className="free-grid-popover" style={popoverStyle}>
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
            onClick={() => { handleSort(anchorEl.column!.key as string); handleCloseMenu(); }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
            </svg>
            Sort by ASC
          </div>
          <div
            className="free-grid-menu-item"
            onClick={() => { handleSort(anchorEl.column!.key as string); handleCloseMenu(); }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
            </svg>
            Sort by DESC
          </div>
          <div className="free-grid-menu-divider" />
          <div
            className="free-grid-menu-item"
            onClick={() => { moveColumn(anchorEl.column!.key as string, 'left'); handleCloseMenu(); }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
            </svg>
            Move left
          </div>
          <div
            className="free-grid-menu-item"
            onClick={() => { moveColumn(anchorEl.column!.key as string, 'right'); handleCloseMenu(); }}
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
              setVisibleColumnKeys((prev) => {
                const next = new Set(prev);
                next.delete(anchorEl.column!.key as string);
                return next;
              });
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
            onClick={() => { setShowManageDialog(true); handleCloseMenu(); }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" />
            </svg>
            Manage columns
          </div>
        </>
      )}
    </div>
  );
}
