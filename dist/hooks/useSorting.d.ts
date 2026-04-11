interface SortConfig {
    key: string | null;
    direction: 'asc' | 'desc' | null;
}
export declare function useSorting<T>(data: T[], onSort?: (key: string, direction: 'asc' | 'desc' | null) => void): {
    sortConfig: SortConfig;
    handleSort: (key: string) => void;
    sortedData: T[];
};
export {};
