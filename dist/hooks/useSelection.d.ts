import { default as React } from 'react';
interface UseSelectionOptions<T> {
    data: T[];
    selectionMode?: 'single' | 'multiple';
    selectedIds?: (string | number)[];
    onSelectionChange?: (ids: (string | number)[]) => void;
}
export declare function useSelection<T>({ data, selectionMode, selectedIds, onSelectionChange, }: UseSelectionOptions<T>): {
    handleSelectAll: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSelectRow: (e: React.ChangeEvent<HTMLInputElement>, rowId: string | number) => void;
};
export {};
