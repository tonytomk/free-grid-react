import { Column, ActiveFilter } from '../types';
export declare function useFiltering<T>(data: T[], columns: Column<T>[], onFilterChange?: (filter: ActiveFilter | null) => void): {
    filter: ActiveFilter | null;
    filteredData: T[];
    filterPanelColumnKey: string | null;
    openFilterPanel: (columnKey: string) => void;
    closeFilterPanel: () => void;
    applyFilter: (newFilter: ActiveFilter) => void;
    clearFilter: () => void;
    getColumnType: (key: string) => "string" | "number";
};
