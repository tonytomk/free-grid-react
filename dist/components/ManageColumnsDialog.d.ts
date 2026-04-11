import { default as React } from 'react';
import { Column } from '../types';
interface ManageColumnsDialogProps<T> {
    manageRef: React.RefObject<HTMLDivElement | null>;
    columns: Column<T>[];
    selectable?: boolean;
    visibleColumnKeys: Set<string>;
    setVisibleColumnKeys: React.Dispatch<React.SetStateAction<Set<string>>>;
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}
export declare function ManageColumnsDialog<T>({ manageRef, columns, selectable, visibleColumnKeys, setVisibleColumnKeys, searchTerm, setSearchTerm, }: ManageColumnsDialogProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
