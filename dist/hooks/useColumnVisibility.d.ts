import { Column } from '../types';
export declare function useColumnVisibility<T>(columns: Column<T>[], selectable?: boolean): {
    visibleColumnKeys: Set<string>;
    setVisibleColumnKeys: import('react').Dispatch<import('react').SetStateAction<Set<string>>>;
};
