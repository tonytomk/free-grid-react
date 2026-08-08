import { Column, GridFilter, GridFilterOptions } from '../types';
interface FilterPanelProps<T> {
    columns: Column<T>[];
    initialColumnKey: string;
    existingFilter: GridFilter | null;
    getColumnType: (key: string) => 'string' | 'number';
    filterOptions?: GridFilterOptions;
    /** Called with filters to apply, or null to clear. */
    onCommit: (filter: GridFilter | null) => void;
}
export declare function FilterPanel<T>({ columns, initialColumnKey, existingFilter, getColumnType, filterOptions, onCommit, }: FilterPanelProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
