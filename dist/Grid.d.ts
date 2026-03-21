import { GridProps } from './types';
export declare function Grid<T extends {
    id?: string | number;
} | any>({ data, columns, showHeader, renderChildView, selectable, selectedIds, onSelectionChange, pagination, className, id, }: GridProps<T>): import("react/jsx-runtime").JSX.Element;
