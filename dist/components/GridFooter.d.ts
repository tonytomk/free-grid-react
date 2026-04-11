interface PaginationConfig {
    total: number;
    page: number;
    pageSize: number;
    onPageChange?: (page: number) => void;
}
interface GridFooterProps {
    pagination: PaginationConfig;
}
export declare function GridFooter({ pagination }: GridFooterProps): import("react/jsx-runtime").JSX.Element;
export {};
