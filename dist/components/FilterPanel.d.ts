import { Column, ActiveFilter } from '../types';
interface FilterPanelProps<T> {
    columns: Column<T>[];
    initialColumnKey: string;
    existingFilter: ActiveFilter | null;
    getColumnType: (key: string) => 'string' | 'number';
    /** Called with a filter to apply, or null to clear. */
    onCommit: (filter: ActiveFilter | null) => void;
    onClose: () => void;
}
export declare function FilterPanel<T>({ columns, initialColumnKey, existingFilter, getColumnType, onCommit, onClose, }: FilterPanelProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
