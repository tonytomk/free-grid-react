

interface PaginationConfig {
  total: number;
  page: number;
  pageSize: number;
  onPageChange?: (page: number) => void;
}

interface GridFooterProps {
  pagination: PaginationConfig;
}

export function GridFooter({ pagination }: GridFooterProps) {
  const start = Math.min((pagination.page - 1) * pagination.pageSize + 1, pagination.total);
  const end = Math.min(pagination.page * pagination.pageSize, pagination.total);

  return (
    <div className="free-grid-footer">
      <div className="free-grid-pagination">
        <span>
          {start}-{end} of {pagination.total}
        </span>
        <div className="free-grid-pagination-actions">
          <button
            className="free-grid-icon-button"
            disabled={pagination.page <= 1}
            onClick={() => pagination.onPageChange?.(pagination.page - 1)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            className="free-grid-icon-button"
            disabled={pagination.page * pagination.pageSize >= pagination.total}
            onClick={() => pagination.onPageChange?.(pagination.page + 1)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
