import { GridProps } from './types';
export declare function Grid<T extends {
    id?: string | number;
} | any>({ data, columns, showHeader, selectionMode, stripedRows, stripedRowOddColor, stripedRowEvenColor, theme, gridColor, gridTextColor, renderChildView, selectable, selectedIds, onSelectionChange, pagination, className, id, allowSorting, onSort, allowReordering, allowResizing, allowFiltering, onFilterChange, }: GridProps<T>): import("react/jsx-runtime").JSX.Element;
