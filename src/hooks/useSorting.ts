import { useState, useMemo } from 'react';

interface SortConfig {
  key: string | null;
  direction: 'asc' | 'desc' | null;
}

export function useSorting<T>(
  data: T[],
  onSort?: (key: string, direction: 'asc' | 'desc' | null) => void
) {
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: null });

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' | null = 'asc';
    if (sortConfig.key === key) {
      if (sortConfig.direction === 'asc') direction = 'desc';
      else if (sortConfig.direction === 'desc') direction = null;
    }
    setSortConfig({ key, direction });
    if (onSort) onSort(key, direction);
  };

  const sortedData = useMemo(() => {
    if (onSort || !sortConfig.key || !sortConfig.direction) return data;
    return [...data].sort((a, b) => {
      const aValue = (a as any)[sortConfig.key!];
      const bValue = (b as any)[sortConfig.key!];
      if (aValue === bValue) return 0;
      if (aValue === null || aValue === undefined) return 1;
      if (bValue === null || bValue === undefined) return -1;
      const comparison = aValue < bValue ? -1 : 1;
      return sortConfig.direction === 'asc' ? comparison : -comparison;
    });
  }, [data, sortConfig, onSort]);

  return { sortConfig, handleSort, sortedData };
}
