import { default as React } from 'react';
import { Column } from '../types';
interface ColumnMenuProps<T> {
    anchorEl: {
        element: HTMLElement;
        column: Column<T> | null;
        isSelection?: boolean;
    };
    containerRef: React.RefObject<HTMLDivElement | null>;
    filteredColumns: Column<T>[];
    popoverRef: React.RefObject<HTMLDivElement | null>;
    handleSort: (key: string) => void;
    moveColumn: (key: string, direction: 'left' | 'right') => void;
    setVisibleColumnKeys: React.Dispatch<React.SetStateAction<Set<string>>>;
    setShowManageDialog: React.Dispatch<React.SetStateAction<boolean>>;
    handleCloseMenu: () => void;
}
export declare function ColumnMenu<T>({ anchorEl, containerRef, filteredColumns, popoverRef, handleSort, moveColumn, setVisibleColumnKeys, setShowManageDialog, handleCloseMenu, }: ColumnMenuProps<T>): import("react/jsx-runtime").JSX.Element | null;
export {};
