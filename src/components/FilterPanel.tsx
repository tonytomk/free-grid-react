import { useState } from 'react';
import {
  Column,
  ActiveFilter,
  FilterOperator,
  StringFilterOperator,
  NumberFilterOperator,
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
  existingFilter: ActiveFilter | null;
  getColumnType: (key: string) => 'string' | 'number';
  /** Called with a filter to apply, or null to clear. */
  onCommit: (filter: ActiveFilter | null) => void;
  onClose: () => void;
}

export function FilterPanel<T>({
  columns,
  initialColumnKey,
  existingFilter,
  getColumnType,
  onCommit,
  onClose,
}: FilterPanelProps<T>) {
  const filterableColumns = columns.filter((col) => col.filterable !== false);

  const [columnKey, setColumnKey] = useState<string>(initialColumnKey);

  const colType   = getColumnType(columnKey);
  const operators = colType === 'number' ? NUMBER_OPERATORS : STRING_OPERATORS;

  const [operator, setOperator] = useState<FilterOperator>(
    existingFilter?.operator ?? operators[0].value
  );
  const [value, setValue] = useState<string>(existingFilter?.value ?? '');

  // Commit helper — empty value clears the filter.
  const commit = (key: string, op: FilterOperator, val: string) => {
    if (val.trim()) {
      onCommit({ columnKey: key, operator: op, value: val.trim() });
    } else {
      onCommit(null);
    }
  };

  // Column change: reset operator + value, clear filter.
  const handleColumnChange = (newKey: string) => {
    setColumnKey(newKey);
    const newType = getColumnType(newKey);
    const newOps  = newType === 'number' ? NUMBER_OPERATORS : STRING_OPERATORS;
    const newOp   = newOps[0].value;
    setOperator(newOp);
    setValue('');
    onCommit(null); // clear previous filter when column changes
  };

  // Operator change: re-apply immediately if value is filled.
  const handleOperatorChange = (newOp: FilterOperator) => {
    setOperator(newOp);
    commit(columnKey, newOp, value);
  };

  // Value field: commit on Enter or blur.
  const handleValueKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') commit(columnKey, operator, value);
  };

  const handleValueBlur = () => {
    commit(columnKey, operator, value);
  };

  return (
    <div className="free-grid-filter-panel" onClick={(e) => e.stopPropagation()}>
      {/* Close — closes panel only, does NOT clear the active filter */}
      <button className="free-grid-filter-close" onClick={onClose} title="Close">
        ×
      </button>

      {/* Column */}
      <div className="free-grid-filter-field">
        <span className="free-grid-filter-label">Column</span>
        <select
          className="free-grid-filter-select"
          value={columnKey}
          onChange={(e) => handleColumnChange(e.target.value)}
        >
          {filterableColumns.map((col) => (
            <option key={col.key as string} value={col.key as string}>
              {col.header as string}
            </option>
          ))}
        </select>
      </div>

      {/* Operator */}
      <div className="free-grid-filter-field">
        <span className="free-grid-filter-label">Operator</span>
        <select
          className="free-grid-filter-select"
          value={operator}
          onChange={(e) => handleOperatorChange(e.target.value as FilterOperator)}
        >
          {operators.map((op) => (
            <option key={op.value} value={op.value}>
              {op.label}
            </option>
          ))}
        </select>
      </div>

      {/* Value — auto-commits on Enter or blur */}
      <div className="free-grid-filter-field free-grid-filter-value-field">
        <span className="free-grid-filter-label">Value</span>
        <input
          type={colType === 'number' ? 'number' : 'text'}
          className="free-grid-filter-input"
          placeholder="Filter value…"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleValueKeyDown}
          onBlur={handleValueBlur}
          autoFocus
        />
      </div>
    </div>
  );
}
