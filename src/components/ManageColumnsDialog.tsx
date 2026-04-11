import React from 'react';
import { Column } from '../types';

interface ManageColumnsDialogProps<T> {
  manageRef: React.RefObject<HTMLDivElement | null>;
  columns: Column<T>[];
  selectable?: boolean;
  visibleColumnKeys: Set<string>;
  setVisibleColumnKeys: React.Dispatch<React.SetStateAction<Set<string>>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export function ManageColumnsDialog<T>({
  manageRef,
  columns,
  selectable,
  visibleColumnKeys,
  setVisibleColumnKeys,
  searchTerm,
  setSearchTerm,
}: ManageColumnsDialogProps<T>) {
  return (
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
                  const all = new Set(columns.map((c) => c.key as string));
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
              columns.forEach((c) => { if (!c.defaultHidden) initial.add(c.key as string); });
              setVisibleColumnKeys(initial);
            }}
          >
            RESET
          </button>
        </div>

        <div className="free-grid-columns-list">
          {selectable && 'checkbox selection'.includes(searchTerm.toLowerCase()) && (
            <label className="free-grid-dialog-row">
              <input
                type="checkbox"
                className="free-grid-checkbox"
                checked={visibleColumnKeys.has('__selection')}
                onChange={() => {
                  setVisibleColumnKeys((prev) => {
                    const next = new Set(prev);
                    if (next.has('__selection')) next.delete('__selection');
                    else next.add('__selection');
                    return next;
                  });
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
                    setVisibleColumnKeys((prev) => {
                      const next = new Set(prev);
                      if (next.has(col.key as string)) next.delete(col.key as string);
                      else next.add(col.key as string);
                      return next;
                    });
                  }}
                />
                <span>{col.header as string}</span>
              </label>
            ))}
        </div>
      </div>
    </div>
  );
}
