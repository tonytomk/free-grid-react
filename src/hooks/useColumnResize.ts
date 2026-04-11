import React, { useState, useEffect } from 'react';

export function useColumnResize() {
  const [columnWidths, setColumnWidths] = useState<Record<string, number | string>>({});
  const [resizing, setResizing] = useState<{
    key: string;
    startX: number;
    startWidth: number;
  } | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!resizing) return;
      const deltaX = e.clientX - resizing.startX;
      const newWidth = Math.max(resizing.startWidth + deltaX, 50);
      setColumnWidths((prev) => ({ ...prev, [resizing.key]: newWidth }));
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

  return { columnWidths, handleResizeStart };
}
