# free-grid-react

A lightweight, high-performance, and fully configurable React grid component built with CSS Grid and TypeScript.

![FreeGrid Demo](/C:/Users/tonyt/.gemini/antigravity/brain/73afc559-fc2b-422d-bfbd-f3cc1beb1b11/final_grid_verification_1774116262897.png)

## Features

- 🚀 **Performant**: Built with native CSS Grid for smooth rendering.
- 🎨 **MUI-Inspired**: Clean, professional aesthetic out of the box.
- 🛠️ **Configurable Headers**: Bold labels with vertical dividers and togglable visibility.
- 🔘 **Selection**: Built-in checkbox selection with "Select All" support.
- 📁 **Child Views**: Easily expand rows to show detailed child components.
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

| Prop | Type | Description |
| --- | --- | --- |
| `data` | `any[]` | Array of data objects to display. |
| `columns` | `Column[]` | Configuration for columns (`key`, `header`, `flex`, `render`). |
| `showHeader` | `boolean` | Whether to show the grid header (default: `true`). |
| `selectable` | `boolean` | Enable row selection checkboxes. |
| `selectedIds` | `(string\|number)[]` | Controlled array of selected row IDs. |
| `onSelectionChange` | `(ids: any[]) => void` | Callback when selection changes. |
| `renderChildView` | `(row: any) => ReactNode` | Function to render the expanded row content. |
| `pagination` | `PaginationProps` | Configuration for the pagination footer. |

## License

MIT © [Tony Tom K](https://github.com/tonytomk)
