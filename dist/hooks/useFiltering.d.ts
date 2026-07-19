import { Column, GridFilter } from '../types';
export declare function useFiltering<T>(data: T[], columns: Column<T>[], onFilterChange?: (filter: GridFilter | null) => void): {
    filter: GridFilter | null;
    filteredData: T[];
    filterPanelColumnKey: string | null;
    openFilterPanel: (columnKey: string) => void;
    closeFilterPanel: () => void;
    applyFilter: (newFilter: GridFilter) => void;
    clearFilter: () => void;
    getColumnType: (key: string) => "string" | "number";
};
