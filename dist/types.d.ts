export interface Column<T> {
    key: keyof T | string;
    header: React.ReactNode;
    width?: string | number;
    flex?: number;
    render?: (value: any, row: T) => React.ReactNode;
    sortable?: boolean;
    hideable?: boolean;
    defaultHidden?: boolean;
    draggable?: boolean;
    resizable?: boolean;
    minWidth?: number;
}
export type GridTheme = 'light' | 'dark' | 'blue';
export interface GridProps<T> {
    data: T[];
    columns: Column<T>[];
    showHeader?: boolean;
    rowHeight?: string | number;
    selectionMode?: 'single' | 'multiple';
    stripedRows?: boolean;
    stripedRowOddColor?: string;
    stripedRowEvenColor?: string;
    theme?: GridTheme;
    gridColor?: string;
    gridTextColor?: string;
    renderChildView?: (item: T) => React.ReactNode;
    selectable?: boolean;
    selectedIds?: (string | number)[];
    onSelectionChange?: (ids: (string | number)[]) => void;
    pagination?: {
        total: number;
        page: number;
        pageSize: number;
        onPageChange?: (page: number) => void;
    };
    className?: string;
    id?: string;
    allowSorting?: boolean;
    onSort?: (key: string, direction: 'asc' | 'desc' | null) => void;
    allowReordering?: boolean;
    allowResizing?: boolean;
}
