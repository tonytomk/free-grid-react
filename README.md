# free-grid-react

A lightweight, high-performance, and fully configurable React grid component built with CSS Grid and TypeScript.

Release: 0.4.1 — 2026-08-08

- **Added:** Multi-filter panel support, including add/remove filter rows and shared `and` / `or` logic.
- **Added:** Placeholder last-row add mode via `addRowOnLastRowEdit`, with partial row payloads from `onAddRow`.

## Demo

- Demo app: https://tonytomk.github.io/free-grid-react-demo/
- Demo app codebase: https://github.com/tonytomk/free-grid-react-app


## Features

- 🚀 **Performant**: Built with native CSS Grid for smooth rendering.
- 🛠️ **Configurable Headers**: Bold labels with vertical dividers and togglable visibility.
- 🔘 **Selection**: Built-in checkbox selection with "Select All" support.
- 📁 **Child Views**: Easily expand rows to show detailed child components.
- 📶 **Sorting**: Built-in support for ascending and descending sort on any column.
- 🔍 **Filtering**: Column filtering with dynamic string/number operators, plus multi-filter `and` / `or` criteria.
- 🧺 **Column Management**: Hide/Show individual columns via header menu.
- ✍️ **Inline Editing**: Tap editable cells to edit values directly in the grid.
- ⌨️ **Tab Navigation During Edit**: Press `Tab` to move to the next editable cell in the row, or the next row when at the end of a row.
- 🔢 **Configurable Row Numbering**: Optionally show an incrementing row-number column.
- ➕ **Configurable Row Addition**: Optionally add a new row by clicking the last row, or enable `addRowOnLastRowEdit` to create a new row by editing the first data column of the placeholder last row and tabbing out.
- ⚙️ **Manage Columns**: Search and toggle multiple columns visibility through a right-aligned popover.
- 📄 **Pagination**: Integrated right-aligned pagination footer.
- ⌨️ **TypeScript**: First-class support for types and interfaces.

## Installation

```bash
npm install free-grid-react
```

## Quick Start

```tsx
import { Grid } from 'free-grid-react';
import 'free-grid-react/dist/free-grid.css';

const columns = [
  { key: 'name', header: 'Name', flex: 1 },
  { key: 'email', header: 'Email', flex: 1 },
];

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

function App() {
  const [rows, setRows] = useState(data);

  const handleCellEdit = (row, columnKey, value) => {
    setRows((prev) =>
      prev.map((item) =>
        item.id === row.id ? { ...item, [columnKey]: value } : item
      )
    );
  };

  const handleAddRow = (newRow) => {
    setRows((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: newRow?.name ?? '',
        email: newRow?.email ?? '',
      },
    ]);
  };

  return (
    <Grid
      data={rows}
      columns={columns}
      selectable={true}
      theme="dark"
      isEditable={true}
      rowNumbers={true}
      onCellEdit={handleCellEdit}
      allowAddRow={true}
      addRowOnLastRowEdit={true}
      onAddRow={handleAddRow}
      pagination={{ total: rows.length, page: 1, pageSize: 10 }}
    />
  );
}
```

## Props

### Grid Props

| Prop | Type | Description |
| --- | --- | --- |
| `data` | `any[]` | Array of data objects to display. |
| `columns` | `Column[]` | Configuration for columns. |
| `showHeader` | `boolean` | Whether to show the grid header (default: `true`). |
| `rowNumbers` | `boolean` | Show an incrementing row-number column on the left. Defaults to `false`. |
| `rowNumberHeader` | `ReactNode` | Custom header label for the row-number column. Defaults to `#`. |
| `selectionMode` | `single \| multiple` | Row selection behavior. Defaults to `multiple`. |
| `stripedRows` | `boolean` | Optional alternating row colors. Defaults to `false`. |
| `stripedRowOddColor` | `string` | Custom color for odd striped rows. |
| `stripedRowEvenColor` | `string` | Custom color for even striped rows. |
| `theme` | `light \| dark \| blue` | Built-in surface theme preset. Defaults to `light`. |
| `gridColor` | `string` | Main grid surface color. Defaults to white when omitted. |
| `gridTextColor` | `string` | Optional text color for custom grid surfaces. |
| `allowSorting` | `boolean` | `true` | Enable/disable sorting for the entire grid |
| `allowReordering` | `boolean` | `true` | Enable/disable column drag-and-drop reordering |
| `allowResizing` | `boolean` | `true` | Enable/disable interactive column resizing |
| `allowFiltering` | `boolean` | Enable/disable column filtering in the header menu |
| `filterOptions` | `GridFilterOptions` | Multi-filter panel behavior (see Filtering) |
| `onFilterChange` | `(filter: GridFilter \| null) => void` | Callback when filters are applied or cleared |
| `onSort` | `function` | Callback when sorting changes |
| `isEditable` | `boolean` | Enable inline editing for all editable columns |
| `onCellEdit` | `(row, columnKey, value) => void` | Callback when an editable cell is committed; update consumer data state here |
| `allowAddRow` | `boolean` | Enable row-add support. When `addRowOnLastRowEdit` is false, clicking the last row triggers `onAddRow`. |
| `addRowOnLastRowEdit` | `boolean` | When true, show a persistent empty last row and create a new row by editing the first data column and tabbing out. |
| `onAddRow` | `(row?: Partial<T>) => void` | Callback invoked when a new row is created. If `addRowOnLastRowEdit` is true, the payload contains the partial new row values. |
| `selectable` | `boolean` | Enable row selection checkboxes. |
| `selectedIds` | `(string\|number)[]` | Managed array of selected row IDs. |
| `onSelectionChange` | `(ids: any[]) => void` | Callback for selection changes. |
| `renderChildView` | `(row: any) => ReactNode` | Render function for expanded row content. |
| `pagination` | `PaginationProps` | Pagination configuration. |

### Filtering

Enable filtering with `allowFiltering`. The filter panel lets users add or remove criteria rows, then choose a single shared logic mode:

- The first filter row has no logic selector.
- The second filter row controls whether all criteria use `and` or `or`.
- Additional filter rows show the selected logic as disabled, so the full filter set stays consistent.
- Empty criteria are ignored; clearing all criteria sends `null` to `onFilterChange`.

Configure multi-filter behavior with `filterOptions`:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `allowMultiFilter` | `boolean` | `true` | When `false`, only one criterion row is shown (no Add/Remove all, no AND/OR). |
| `defaultLogic` | `'and' \| 'or'` | `'and'` | Initial logic when multiple criteria are active. |
| `maxFilters` | `number` | — | Optional cap on filter rows when multi-filter is enabled. |

```ts
<Grid
  allowFiltering
  filterOptions={{ allowMultiFilter: true, defaultLogic: 'and', maxFilters: 5 }}
  onFilterChange={(filter) => console.log(filter)}
/>
```

```ts
type ActiveFilter = {
  columnKey: string;
  operator: FilterOperator;
  value: string;
};

type GridFilter =
  | ActiveFilter
  | {
      logic: 'and' | 'or';
      filters: ActiveFilter[];
    };
```

### Column Properties

| Property | Type | Description |
| --- | --- | --- |
| `key` | `string` | Unique key matching the data property. |
| `header` | `string` | Header display text. |
| `width` | `number \| string` | Fixed width (e.g., `100` or `'100px'`). |
| `flex` | `number` | Flex grow value (uses `fr` units). |
| `sortable` | `boolean` | `true` | Whether this specific column can be sorted |
| `hideable` | `boolean` | `true` | Whether this column can be hidden via the menu |
| `defaultHidden` | `boolean` | `false` | Whether the column is hidden by default |
| `draggable` | `boolean` | Whether this specific column can be dragged (default: `true`) |
| `resizable` | `boolean` | Whether this specific column can be resized (default: `true`) |
| `minWidth` | `number` | Minimum width in pixels when resizing (default: `50`) |
| `type` | `'string' \| 'number'` | Data type used to determine filter operators (auto-detected if omitted) |
| `filterable` | `boolean` | Whether this specific column should appear in the filter panel (default: `true`) |
| `isEditable` | `boolean` | Enable inline editing for this column |
| `editor` | `(value, row, onChange, onCommit, onCancel) => ReactNode` | Custom inline edit renderer for the cell |
| `render` | `(val, row) => ReactNode` | Custom cell renderer. |

### Column Management

The grid provides built-in tools for managing columns:
- **Visibility**: Toggle columns via the "Manage columns" dialog.
- **Reordering**: Drag and drop header cells to change their order, or use "Move left/right" in the column menu.
- **Resizing**: Hover between header cells and drag the handle to adjust column widths.
- **Filtering**: Add multiple filter rows from the filter panel. The second row controls whether all active filters use `and` or `or`; later rows display the same logic as disabled controls for consistency.
- **Persistence**: The grid maintains internal state for column order and widths (you can lift this state if needed by passing controlled props in future updates).
- **Search & Reset**: Search for columns, toggle visibility globally, or reset to defaults.

## Testing

The package includes a comprehensive unit testing suite built with [Vitest](https://vitest.dev/) and React Testing Library.

To run the tests in interactive watch mode:
```bash
npm run test
```

To run the tests once (useful for CI/CD environments):
```bash
npm run test:run
```

## License

MIT © [Tony Tom K](https://github.com/tonytomk)
