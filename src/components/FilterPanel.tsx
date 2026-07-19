import { KeyboardEvent, useMemo, useState } from 'react';
import {
  Column,
  ActiveFilter,
  FilterLogicOperator,
  FilterOperator,
  GridFilter,
  NumberFilterOperator,
  StringFilterOperator,
} from '../types';

const STRING_OPERATORS: { value: StringFilterOperator; label: string }[] = [
  { value: 'contains',       label: 'Contains' },
  { value: 'doesNotContain', label: 'Does not contain' },
  { value: 'equals',         label: 'Equals' },
  { value: 'notEqual',       label: 'Not equal' },
  { value: 'startsWith',     label: 'Starts with' },
  { value: 'endsWith',       label: 'Ends with' },
];

const NUMBER_OPERATORS: { value: NumberFilterOperator; label: string }[] = [
  { value: '=',  label: '= Equal' },
  { value: '!=', label: '≠ Not equal' },
  { value: '>',  label: '> Greater than' },
  { value: '<',  label: '< Less than' },
  { value: '>=', label: '≥ Greater or equal' },
  { value: '<=', label: '≤ Less or equal' },
];

interface FilterPanelProps<T> {
  columns: Column<T>[];
  initialColumnKey: string;
  existingFilter: GridFilter | null;
  getColumnType: (key: string) => 'string' | 'number';
  /** Called with filters to apply, or null to clear. */
  onCommit: (filter: GridFilter | null) => void;
  onClose: () => void;
}

const createFilter = (
  columnKey: string,
  getColumnType: (key: string) => 'string' | 'number'
): ActiveFilter => ({
  columnKey,
  operator: getDefaultOperator(columnKey, getColumnType),
  value: '',
});

const getDefaultOperator = (
  columnKey: string,
  getColumnType: (key: string) => 'string' | 'number'
): FilterOperator => {
  return getColumnType(columnKey) === 'number'
    ? NUMBER_OPERATORS[0].value
    : STRING_OPERATORS[0].value;
};

export function FilterPanel<T>({
  columns,
  initialColumnKey,
  existingFilter,
  getColumnType,
  onCommit,
  onClose,
}: FilterPanelProps<T>) {
  const filterableColumns = columns.filter((col) => col.filterable !== false);

  const initialRules = useMemo(() => {
    if (!existingFilter) return [createFilter(initialColumnKey, getColumnType)];
    if ('filters' in existingFilter) {
      return existingFilter.filters.length
        ? existingFilter.filters
        : [createFilter(initialColumnKey, getColumnType)];
    }
    return [existingFilter];
  }, [existingFilter, getColumnType, initialColumnKey]);

  const [logic, setLogic] = useState<FilterLogicOperator>(
    existingFilter && 'filters' in existingFilter ? existingFilter.logic : 'and'
  );
  const [filters, setFilters] = useState<ActiveFilter[]>(initialRules);

  const getOperators = (columnKey: string) => {
    return getColumnType(columnKey) === 'number' ? NUMBER_OPERATORS : STRING_OPERATORS;
  };

  const commit = (nextFilters: ActiveFilter[] = filters, nextLogic: FilterLogicOperator = logic) => {
    const activeFilters = nextFilters
      .map((itemFilter) => ({ ...itemFilter, value: itemFilter.value.trim() }))
      .filter((itemFilter) => itemFilter.value);

    if (activeFilters.length === 0) {
      onCommit(null);
      return;
    }

    if (activeFilters.length === 1) {
      onCommit(activeFilters[0]);
      return;
    }

    onCommit({ logic: nextLogic, filters: activeFilters });
  };

  const updateFilter = (index: number, updates: Partial<ActiveFilter>, shouldCommit = true) => {
    const nextFilters = filters.map((itemFilter, itemIndex) =>
      itemIndex === index ? { ...itemFilter, ...updates } : itemFilter
    );
    setFilters(nextFilters);
    if (shouldCommit) commit(nextFilters);
  };

  const handleColumnChange = (index: number, columnKey: string) => {
    updateFilter(index, {
      columnKey,
      operator: getDefaultOperator(columnKey, getColumnType),
      value: '',
    });
  };

  const handleValueKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') commit();
  };

  const addFilter = () => {
    const nextFilters = [...filters, createFilter(initialColumnKey, getColumnType)];
    setFilters(nextFilters);
  };

  const removeFilter = (index: number) => {
    const nextFilters = filters.filter((_, itemIndex) => itemIndex !== index);
    setFilters(nextFilters.length ? nextFilters : [createFilter(initialColumnKey, getColumnType)]);
    commit(nextFilters);
  };

  const removeAllFilters = () => {
    const nextFilters = [createFilter(initialColumnKey, getColumnType)];
    setFilters(nextFilters);
    onCommit(null);
  };

  const handleLogicChange = (nextLogic: FilterLogicOperator) => {
    setLogic(nextLogic);
    commit(filters, nextLogic);
  };

  return (
    <div className="free-grid-filter-panel" onClick={(e) => e.stopPropagation()}>
      <div className="free-grid-filter-rules">
        {filters.map((itemFilter, index) => {
          const colType = getColumnType(itemFilter.columnKey);
          const operators = getOperators(itemFilter.columnKey);

          return (
            <div className="free-grid-filter-row" key={index}>
              <button
                className="free-grid-filter-remove"
                onClick={() => removeFilter(index)}
                title="Remove filter"
              >
                ×
              </button>

              {index === 0 ? (
                <span className="free-grid-filter-logic-spacer" />
              ) : (
                <div className="free-grid-filter-field free-grid-filter-logic-field">
                  <select
                    aria-label="Filter logic"
                    className="free-grid-filter-select"
                    value={logic}
                    disabled={index > 1}
                    onChange={(e) => handleLogicChange(e.target.value as FilterLogicOperator)}
                  >
                    <option value="and">And</option>
                    <option value="or">Or</option>
                  </select>
                </div>
              )}

              <div className="free-grid-filter-field">
                <span className="free-grid-filter-label">Column</span>
                <select
                  className="free-grid-filter-select"
                  value={itemFilter.columnKey}
                  onChange={(e) => handleColumnChange(index, e.target.value)}
                >
                  {filterableColumns.map((col) => (
                    <option key={col.key as string} value={col.key as string}>
                      {col.header as string}
                    </option>
                  ))}
                </select>
              </div>

              <div className="free-grid-filter-field">
                <span className="free-grid-filter-label">Operator</span>
                <select
                  className="free-grid-filter-select"
                  value={itemFilter.operator}
                  onChange={(e) => updateFilter(index, { operator: e.target.value as FilterOperator })}
                >
                  {operators.map((op) => (
                    <option key={op.value} value={op.value}>
                      {op.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="free-grid-filter-field free-grid-filter-value-field">
                <span className="free-grid-filter-label">Value</span>
                <input
                  type={colType === 'number' ? 'number' : 'text'}
                  className="free-grid-filter-input"
                  placeholder="Filter value"
                  value={itemFilter.value}
                  onChange={(e) => updateFilter(index, { value: e.target.value }, false)}
                  onKeyDown={handleValueKeyDown}
                  onBlur={() => commit()}
                  autoFocus={index === 0}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="free-grid-filter-actions">
        <button className="free-grid-filter-action" onClick={addFilter}>
          <span aria-hidden="true">＋</span>
          Add filter
        </button>
        <button className="free-grid-filter-action" onClick={removeAllFilters}>
          <span aria-hidden="true">▣</span>
          Remove all
        </button>
      </div>

      <button className="free-grid-filter-close" onClick={onClose} title="Close">
        ×
      </button>
    </div>
  );
}
