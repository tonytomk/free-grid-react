import { default as React } from 'react';
export declare function useColumnResize(): {
    columnWidths: Record<string, string | number>;
    handleResizeStart: (e: React.MouseEvent, key: string) => void;
};
