import React, { useState, useEffect, useMemo } from 'react';
import { Column } from '../types';

export function useColumnOrder<T>(columns: Column<T>[]) {
  const [columnKeys, setColumnKeys] = useState<string[]>(() =>
    columns.map((col) => col.key as string)
  );
  const [draggedColKey, setDraggedColKey] = useState<string | null>(null);

  useEffect(() => {
    setColumnKeys(columns.map((col) => col.key as string));
  }, [columns]);

  const orderedColumns = useMemo(
    () =>
      columnKeys
        .map((key) => columns.find((col) => col.key === key))
        .filter((col): col is Column<T> => !!col),
    [columnKeys, columns]
  );

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

  return { orderedColumns, draggedColKey, handleDragStart, handleDragOver, handleDrop, moveColumn };
}
