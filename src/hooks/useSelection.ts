import React from 'react';

interface UseSelectionOptions<T> {
  data: T[];
  selectionMode?: 'single' | 'multiple';
  selectedIds?: (string | number)[];
  onSelectionChange?: (ids: (string | number)[]) => void;
}

export function useSelection<T>({
  data,
  selectionMode,
  selectedIds = [],
  onSelectionChange,
}: UseSelectionOptions<T>) {
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onSelectionChange) return;
    if (selectionMode === 'single') return;
    if (e.target.checked) {
      onSelectionChange(
        data.map((item, i) => ((item as any).id !== undefined ? (item as any).id : i))
      );
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
    if (e.target.checked) newSelected.add(rowId);
    else newSelected.delete(rowId);
    onSelectionChange(Array.from(newSelected));
  };

  return { handleSelectAll, handleSelectRow };
}
