import { default as React } from 'react';
import { Column } from '../types';
export declare function useColumnOrder<T>(columns: Column<T>[]): {
    orderedColumns: Column<T>[];
    draggedColKey: string | null;
    handleDragStart: (e: React.DragEvent, key: string) => void;
    handleDragOver: (e: React.DragEvent) => void;
    handleDrop: (e: React.DragEvent, targetKey: string) => void;
    moveColumn: (key: string, direction: "left" | "right") => void;
};
