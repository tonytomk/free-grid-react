import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useSorting } from '../../src/hooks/useSorting';

describe('useSorting hook', () => {
  const data = [
    { id: 1, name: 'Charlie', score: 90 },
    { id: 2, name: 'Alice', score: 80 },
    { id: 3, name: 'Bob', score: null }, 
    { id: 4, name: 'David', score: 85 },
  ];



  it('initially returns unsorted data', () => {
    const { result } = renderHook(() => useSorting(data));
    expect(result.current.sortedData).toEqual(data);
    expect(result.current.sortConfig).toEqual({ key: null, direction: null });
  });

  it('sorts strings ascending and descending', () => {
    const { result } = renderHook(() => useSorting(data));

    // First click: ASC
    act(() => {
      result.current.handleSort('name');
    });
    expect(result.current.sortConfig).toEqual({ key: 'name', direction: 'asc' });
    expect(result.current.sortedData.map(r => r.name)).toEqual(['Alice', 'Bob', 'Charlie', 'David']);

    // Second click: DESC
    act(() => {
      result.current.handleSort('name');
    });
    expect(result.current.sortConfig).toEqual({ key: 'name', direction: 'desc' });
    expect(result.current.sortedData.map(r => r.name)).toEqual(['David', 'Charlie', 'Bob', 'Alice']);

    // Third click: CLEAR
    act(() => {
      result.current.handleSort('name');
    });
    expect(result.current.sortConfig).toEqual({ key: 'name', direction: null });
  });

  it('sorts numeric values handling nulls gracefully', () => {
    const { result } = renderHook(() => useSorting(data));

    act(() => {
      result.current.handleSort('score');
    });
    // ASC: Alice(80), David(85), Charlie(90), Bob(null)
    // Nulls are sent to the rear by our useSorting logic!
    const nullScorer = result.current.sortedData[3];
    expect(nullScorer.name).toBe('Bob'); 
    
    const highestValidAsc = result.current.sortedData[2];
    expect(highestValidAsc.name).toBe('Charlie');

    act(() => {
      result.current.handleSort('score');
    });
    // DESC: Charlie(90), David(85), Alice(80), Bob(null)
    const topScorerDesc = result.current.sortedData[0];
    expect(topScorerDesc.name).toBe('Charlie'); // score 90
    
    const nullScorerDesc = result.current.sortedData[3];
    expect(nullScorerDesc.name).toBe('Bob'); // still at the rear!
  });

  it('triggers onSort globally', () => {
    const onSortMock = vi.fn();
    const { result } = renderHook(() => useSorting(data, onSortMock));

    act(() => {
      result.current.handleSort('name');
    });
    // Because onSort is defined, it bypasses internal sorting.
    expect(onSortMock).toHaveBeenCalledWith('name', 'asc');
    expect(result.current.sortedData).toEqual(data); // Returns original data
  });
});
