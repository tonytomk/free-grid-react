# free-grid-react

A lightweight, high-performance, and fully configurable React grid component built with CSS Grid and TypeScript.


## Features

- 🚀 **Performant**: Built with native CSS Grid for smooth rendering.
- 🎨 **MUI-Inspired**: Clean, professional aesthetic out of the box.
- 🛠️ **Configurable Headers**: Bold labels with vertical dividers and togglable visibility.
- 🔘 **Selection**: Built-in checkbox selection with "Select All" support.
- 📁 **Child Views**: Easily expand rows to show detailed child components.
- 📶 **Sorting**: Built-in support for ascending and descending sort on any column.
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
| `allowSorting` | `boolean` | Global toggle for sorting (default: `true`). |
| `onSort` | `(key, dir) => void` | Callback for external/server-side sorting. |
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
| `sortable` | `boolean` | Enable sorting for this column (default: `true`). |
| `hideable` | `boolean` | Allow user to hide this column (default: `true`). |
| `defaultHidden` | `boolean` | Column is hidden by default. |
| `render` | `(val, row) => ReactNode` | Custom cell renderer. |

## Column Management

The grid includes a built-in column management system:
- **Individual Hiding**: Click the three-dot menu on any header to hide that column.
- **Global Management**: Access "Manage Columns" from any header menu to open a compact popover.
- **Search & Reset**: Search for columns, toggle visibility globally, or reset to defaults.

## License

MIT © [Tony Tom K](https://github.com/tonytomk)
