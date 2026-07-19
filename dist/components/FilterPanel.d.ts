import { Column, GridFilter } from '../types';
interface FilterPanelProps<T> {
    columns: Column<T>[];
    initialColumnKey: string;
    existingFilter: GridFilter | null;
    getColumnType: (key: string) => 'string' | 'number';
    /** Called with filters to apply, or null to clear. */
    onCommit: (filter: GridFilter | null) => void;
    onClose: () => void;
}
export declare function FilterPanel<T>({ columns, initialColumnKey, existingFilter, getColumnType, onCommit, onClose, }: FilterPanelProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
