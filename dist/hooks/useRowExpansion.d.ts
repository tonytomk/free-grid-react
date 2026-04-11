export declare function useRowExpansion<T>(): {
    expandedRows: Set<string | number>;
    toggleRow: (rowIndex: number, item: T) => void;
};
