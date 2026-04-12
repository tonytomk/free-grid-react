# free-grid-react

A lightweight, high-performance, and fully configurable React grid component built with CSS Grid and TypeScript.

## Demo

- Demo app: https://tonytomk.github.io/free-grid-react-demo/
- Demo app codebase: https://github.com/tonytomk/free-grid-react-app


## Features

- 🚀 **Performant**: Built with native CSS Grid for smooth rendering.
- 🛠️ **Configurable Headers**: Bold labels with vertical dividers and togglable visibility.
- 🔘 **Selection**: Built-in checkbox selection with "Select All" support.
- 📁 **Child Views**: Easily expand rows to show detailed child components.
- 📶 **Sorting**: Built-in support for ascending and descending sort on any column.
- 🔍 **Filtering**: Column-specific filtering with dynamic string/number operator dropdowns.
- 🧺 **Column Management**: Hide/Show individual columns via header menu.
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
  return (
    <Grid
      data={data}
      columns={columns}
      selectable={true}
      theme="dark"
      pagination={{ total: 2, page: 1, pageSize: 10 }}
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
| `onFilterChange` | `(filter: ActiveFilter \| null) => void` | Callback when a filter is applied or cleared |
| `onSort` | `function` | Callback when sorting changes |
| `selectable` | `boolean` | Enable row selection checkboxes. |
| `selectedIds` | `(string\|number)[]` | Managed array of selected row IDs. |
| `onSelectionChange` | `(ids: any[]) => void` | Callback for selection changes. |
| `renderChildView` | `(row: any) => ReactNode` | Render function for expanded row content. |
| `pagination` | `PaginationProps` | Pagination configuration. |

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
| `render` | `(val, row) => ReactNode` | Custom cell renderer. |

### Column Management

The grid provides built-in tools for managing columns:
- **Visibility**: Toggle columns via the "Manage columns" dialog.
- **Reordering**: Drag and drop header cells to change their order, or use "Move left/right" in the column menu.
- **Resizing**: Hover between header cells and drag the handle to adjust column widths.
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
