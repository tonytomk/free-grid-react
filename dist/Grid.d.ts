import { GridProps } from './types';
export declare function Grid<T extends {
    id?: string | number;
} | any>({ data, columns, showHeader, rowNumbers, rowNumberHeader, selectionMode, stripedRows, stripedRowOddColor, stripedRowEvenColor, theme, gridColor, gridTextColor, renderChildView, selectable, selectedIds, onSelectionChange, pagination, className, id, allowSorting, onSort, allowReordering, allowResizing, allowFiltering, filterOptions, onFilterChange, isEditable, onCellEdit, allowAddRow, addRowOnLastRowEdit, onAddRow, }: GridProps<T>): import("react/jsx-runtime").JSX.Element;
