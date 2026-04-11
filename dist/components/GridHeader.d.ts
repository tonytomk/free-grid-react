import { default as React } from 'react';
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
export declare function GridHeader<T>({ filteredColumns, gridStyle, selectable, visibleColumnKeys, selectionMode, data, selectedIds, handleSelectAll, sortConfig, handleSort, allowSorting, allowReordering, allowResizing, draggedColKey, handleDragStart, handleDragOver, handleDrop, handleResizeStart, handleOpenMenu, }: GridHeaderProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
