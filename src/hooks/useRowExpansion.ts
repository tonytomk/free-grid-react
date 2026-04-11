import { useState } from 'react';

export function useRowExpansion<T>() {
  const [expandedRows, setExpandedRows] = useState<Set<string | number>>(new Set());

  const toggleRow = (rowIndex: number, item: T) => {
    const rowId = (item as any).id !== undefined ? (item as any).id : rowIndex;
    const newExpandedRows = new Set(expandedRows);
    if (newExpandedRows.has(rowId)) newExpandedRows.delete(rowId);
    else newExpandedRows.add(rowId);
    setExpandedRows(newExpandedRows);
  };

  return { expandedRows, toggleRow };
}
