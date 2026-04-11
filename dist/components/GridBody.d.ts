import { default as React } from 'react';
import { Column } from '../types';
import { ActiveTheme } from '../utils/theme';
interface StripedColors {
    odd: string;
    even: string;
}
interface GridBodyProps<T> {
    sortedData: T[];
    filteredColumns: Column<T>[];
    gridStyle: React.CSSProperties;
    selectable?: boolean;
    visibleColumnKeys: Set<string>;
    selectedIds: (string | number)[];
    renderChildView?: (item: T) => React.ReactNode;
    stripedColors: StripedColors | null;
    activeTheme: ActiveTheme;
    handleSelectRow: (e: React.ChangeEvent<HTMLInputElement>, rowId: string | number) => void;
    expandedRows: Set<string | number>;
    toggleRow: (rowIndex: number, item: T) => void;
}
export declare function GridBody<T>({ sortedData, filteredColumns, gridStyle, selectable, visibleColumnKeys, selectedIds, renderChildView, stripedColors, activeTheme, handleSelectRow, expandedRows, toggleRow, }: GridBodyProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
