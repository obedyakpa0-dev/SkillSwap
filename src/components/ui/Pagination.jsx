import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  className = '',
}) {
  if (!Number.isFinite(totalPages) || totalPages <= 1) return null;

  const pages = [];
  const maxVisible = 5;
  let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let end = Math.min(totalPages, start + maxVisible - 1);
  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <nav
      className={`flex items-center justify-center gap-1.5 ${className}`}
      aria-label="Pagination"
    >
      <button
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Previous page"
        className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
      >
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
      </button>

      {start > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            aria-label="Page 1"
            className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100"
          >
            1
          </button>
          {start > 2 && (
            <span className="px-1 text-neutral-400" aria-hidden="true">
              ...
            </span>
          )}
        </>
      )}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? 'page' : undefined}
          aria-label={`Page ${page}`}
          className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-medium transition-colors ${
            page === currentPage
              ? 'bg-primary-600 text-white shadow-sm'
              : 'text-neutral-600 hover:bg-neutral-100'
          }`}
        >
          {page}
        </button>
      ))}

      {end < totalPages && (
        <>
          {end < totalPages - 1 && (
            <span className="px-1 text-neutral-400" aria-hidden="true">
              ...
            </span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            aria-label={`Page ${totalPages}`}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Next page"
        className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
      >
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </nav>
  );
}
