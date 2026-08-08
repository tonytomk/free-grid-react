export type StringFilterOperator = 'contains' | 'doesNotContain' | 'equals' | 'notEqual' | 'startsWith' | 'endsWith';
export type NumberFilterOperator = '=' | '!=' | '>' | '<' | '>=' | '<=';
export type FilterOperator = StringFilterOperator | NumberFilterOperator;
export interface ActiveFilter {
    columnKey: string;
    operator: FilterOperator;
    value: string;
}
export type FilterLogicOperator = 'and' | 'or';
export interface ActiveFilterGroup {
    logic: FilterLogicOperator;
    filters: ActiveFilter[];
}
export type GridFilter = ActiveFilter | ActiveFilterGroup;
/** Options for the column filter / multi-filter panel. */
export interface GridFilterOptions {
    /** Allow multiple filter rows and AND/OR logic. Default `false`. */
    allowMultiFilter?: boolean;
    /** Default logic when more than one criterion is active. Default `'and'`. */
    defaultLogic?: FilterLogicOperator;
    /** Maximum number of filter rows when multi-filter is enabled. */
    maxFilters?: number;
}
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
    type?: 'string' | 'number';
    filterable?: boolean;
    isEditable?: boolean;
    editor?: (value: any, row: T, onChange: (value: any) => void, onCommit: () => void, onCancel: () => void) => React.ReactNode;
}
export type GridTheme = 'light' | 'dark' | 'blue';
export interface GridProps<T> {
    data: T[];
    columns: Column<T>[];
    showHeader?: boolean;
    rowHeight?: string | number;
    rowNumbers?: boolean;
    rowNumberHeader?: React.ReactNode;
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
    allowFiltering?: boolean;
    /** Filter panel behavior (single vs multi-filter, default logic, row limit). */
    filterOptions?: GridFilterOptions;
    onFilterChange?: (filter: GridFilter | null) => void;
    isEditable?: boolean;
    onCellEdit?: (row: T, columnKey: keyof T | string, value: any) => void;
    allowAddRow?: boolean;
    addRowOnLastRowEdit?: boolean;
    onAddRow?: (row?: Partial<T>) => void;
}
