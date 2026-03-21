export interface Column<T> {
    key: keyof T | string;
    header: React.ReactNode;
    width?: string | number;
    flex?: number;
    render?: (value: any, item: T) => React.ReactNode;
}
export interface GridProps<T> {
    data: T[];
    columns: Column<T>[];
    showHeader?: boolean;
    rowHeight?: string | number;
    renderChildView?: (item: T) => React.ReactNode;
    selectable?: boolean;
    selectedIds?: (string | number)[];
    onSelectionChange?: (ids: (string | number)[]) => void;
    pagination?: {
        total: number;
        page: number;
        pageSize: number;
    };
    className?: string;
    id?: string;
}
