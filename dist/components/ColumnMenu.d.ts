import { default as React } from 'react';
import { Column, ActiveFilter } from '../types';
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
    allowFiltering: boolean;
    openFilterPanel: (columnKey: string) => void;
    activeFilter: ActiveFilter | null;
}
export declare function ColumnMenu<T>({ anchorEl, containerRef, filteredColumns, popoverRef, handleSort, moveColumn, setVisibleColumnKeys, setShowManageDialog, handleCloseMenu, allowFiltering, openFilterPanel, activeFilter, }: ColumnMenuProps<T>): import("react/jsx-runtime").JSX.Element | null;
export {};
