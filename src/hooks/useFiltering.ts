import { useState, useMemo } from 'react';
import { Column, ActiveFilter } from '../types';

export function useFiltering<T>(
  data: T[],
  columns: Column<T>[],
  onFilterChange?: (filter: ActiveFilter | null) => void
) {
  const [filter, setFilter] = useState<ActiveFilter | null>(null);
  const [filterPanelColumnKey, setFilterPanelColumnKey] = useState<string | null>(null);

  const openFilterPanel = (columnKey: string) => {
    setFilterPanelColumnKey(columnKey);
  };

  const closeFilterPanel = () => {
    setFilterPanelColumnKey(null);
  };

  const applyFilter = (newFilter: ActiveFilter) => {
    setFilter(newFilter);
    if (onFilterChange) onFilterChange(newFilter);
  };

  const clearFilter = () => {
    setFilter(null);
    if (onFilterChange) onFilterChange(null);
  };

  /** Infer column type from Column.type override, then first non-null data value. */
  const getColumnType = (key: string): 'string' | 'number' => {
    const col = columns.find((c) => c.key === key);
    if (col?.type) return col.type;
    for (const item of data) {
      const val = (item as any)[key];
      if (val !== null && val !== undefined) {
        return typeof val === 'number' ? 'number' : 'string';
      }
    }
    return 'string';
  };

  const filteredData = useMemo(() => {
    if (!filter || !filter.value.trim()) return data;

    return data.filter((item) => {
      const rawValue = (item as any)[filter.columnKey];
      const filterVal = filter.value.trim();
      const col = columns.find((c) => c.key === filter.columnKey);
      const isNumber = col?.type === 'number' || typeof rawValue === 'number';

      if (isNumber) {
        const numVal = Number(rawValue);
        const numFilter = Number(filterVal);
        if (isNaN(numVal) || isNaN(numFilter)) return true;
        switch (filter.operator) {
          case '=':  return numVal === numFilter;
          case '!=': return numVal !== numFilter;
          case '>':  return numVal >  numFilter;
          case '<':  return numVal <  numFilter;
          case '>=': return numVal >= numFilter;
          case '<=': return numVal <= numFilter;
          default:   return true;
        }
      } else {
        const strVal    = String(rawValue ?? '').toLowerCase();
        const strFilter = filterVal.toLowerCase();
        switch (filter.operator) {
          case 'contains':      return strVal.includes(strFilter);
          case 'doesNotContain': return !strVal.includes(strFilter);
          case 'equals':        return strVal === strFilter;
          case 'notEqual':      return strVal !== strFilter;
          case 'startsWith':    return strVal.startsWith(strFilter);
          case 'endsWith':      return strVal.endsWith(strFilter);
          default:              return true;
        }
      }
    });
  }, [data, filter, columns]);

  return {
    filter,
    filteredData,
    filterPanelColumnKey,
    openFilterPanel,
    closeFilterPanel,
    applyFilter,
    clearFilter,
    getColumnType,
  };
}
