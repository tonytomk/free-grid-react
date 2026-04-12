import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useFiltering } from '../../src/hooks/useFiltering';
import { Column } from '../../src/types';

describe('useFiltering hook', () => {
  const data = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 },
  ];

  const columns: Column<typeof data[0]>[] = [
    { key: 'id', header: 'ID', type: 'number' },
    { key: 'name', header: 'Name', type: 'string' },
    { key: 'age', header: 'Age', type: 'number' },
  ];

  it('initially returns unfiltered data', () => {
    const { result } = renderHook(() => useFiltering(data, columns));
    expect(result.current.filteredData).toEqual(data);
    expect(result.current.filter).toBeNull();
  });

  it('filters string correctly (contains)', () => {
    const { result } = renderHook(() => useFiltering(data, columns));

    act(() => {
      result.current.applyFilter({
        columnKey: 'name',
        operator: 'contains',
        value: 'li',
      });
    });

    expect(result.current.filteredData).toEqual([
      { id: 1, name: 'Alice', age: 30 },
      { id: 3, name: 'Charlie', age: 35 },
    ]);
  });

  it('filters numbers correctly (>)', () => {
    const { result } = renderHook(() => useFiltering(data, columns));

    act(() => {
      result.current.applyFilter({
        columnKey: 'age',
        operator: '>',
        value: '25',
      });
    });

    expect(result.current.filteredData).toEqual([
      { id: 1, name: 'Alice', age: 30 },
      { id: 3, name: 'Charlie', age: 35 },
    ]);
  });

  it('clears filter when applied safely', () => {
    const { result } = renderHook(() => useFiltering(data, columns));

    act(() => {
      result.current.applyFilter({
        columnKey: 'name',
        operator: 'contains',
        value: 'x', // no match
      });
    });

    expect(result.current.filteredData).toHaveLength(0);

    act(() => {
      result.current.clearFilter();
    });

    expect(result.current.filteredData).toHaveLength(3);
    expect(result.current.filter).toBeNull();
  });

  it('calls onFilterChange callback if provided', () => {
    const onFilterChange = vi.fn();
    const { result } = renderHook(() => useFiltering(data, columns, onFilterChange));

    const filterObj = {
      columnKey: 'name',
      operator: 'equals' as const,
      value: 'Bob'
    };

    act(() => {
      result.current.applyFilter(filterObj);
    });

    expect(onFilterChange).toHaveBeenCalledWith(filterObj);

    act(() => {
      result.current.clearFilter();
    });

    expect(onFilterChange).toHaveBeenCalledWith(null);
  });

  it('auto-detects column types if type is not strictly provided', () => {
    const dynamicColumns: Column<any>[] = [
      { key: 'unknownString', header: 'Unknown' },
      { key: 'unknownNumber', header: 'Unknown' }
    ];
    const dynamicData = [
      { unknownString: null, unknownNumber: undefined }, // Skip nulls
      { unknownString: 'Test', unknownNumber: 42 }
    ];

    const { result } = renderHook(() => useFiltering(dynamicData, dynamicColumns));
    
    expect(result.current.getColumnType('unknownString')).toBe('string');
    expect(result.current.getColumnType('unknownNumber')).toBe('number');
  });
});
