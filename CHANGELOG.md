# Changelog

All notable changes to `free-grid-react` are documented here.  
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

## [0.4.1] — 2026-08-08

### Added
- **Multi-filter panel:** users can add and remove multiple filter criteria from the filter panel.
- **Shared filter logic:** the second filter row selects `and` or `or` logic for the whole filter set; later rows display the selected logic as disabled.
- **Grouped filter API:** `onFilterChange` can now receive a `GridFilter` group containing `logic` and `filters`, while single-filter usage remains supported.

---

## [0.3.9] — 2026-07-18

### Added
- **Placeholder last-row add mode:** `addRowOnLastRowEdit` enables a persistent empty row at the end of the grid. Editing the first visible data column and tabbing out creates a new row via `onAddRow`.
- **`onAddRow` payload:** when `addRowOnLastRowEdit` is enabled, `onAddRow` receives a partial row object with the entered values.

## [0.3.8] — 2026-07-12

### Added
- **Configurable row numbering:** enable the `rowNumbers` prop to display an incrementing row-number column on the left side of the grid.
- **Custom row-number header:** use `rowNumberHeader` to customize the label shown in the row-number column header.

### Fixed
- **Inline editing tab navigation:** pressing `Tab` now commits the current cell and moves focus to the next editable cell, wrapping to the next row when needed.

## [0.3.5] — 2026-07-12

### Added
- **Configurable row numbering:** enable the `rowNumbers` prop to display an incrementing row-number column on the left side of the grid.
- **Custom row-number header:** use `rowNumberHeader` to customize the label shown in the row-number column header.

### Fixed
- **Inline editing tab navigation:** pressing `Tab` now commits the current cell and moves focus to the next editable cell, wrapping to the next row when needed. Rebuilt distribution to include this fix.

## [0.3.4] — 2026-07-12

### Fixed
- **Inline editing tab navigation:** pressing `Tab` now commits the current cell and moves focus to the next editable cell, wrapping to the next row when needed. Rebuilt distribution to include this fix.

## [0.3.2] — 2026-07-11

### Added
- **Inline cell editing:** click editable cells to edit values directly in the grid.
- **Configurable row addition:** enable `allowAddRow` and use `onAddRow` to add new rows when the last row is clicked.
- **Editable column API:** `isEditable`, `onCellEdit`, and custom `editor` renderers for column-level editing control.

---

## [0.3.0] — 2026-04-12

### Added
- **Column Filtering:** Robust client-side filtering via dropdown with string/number operators.
- **Unit Testing:** Integrated Vitest & React Testing Library with 100% core hook/component coverage.

---

## [0.2.9] — 2026-04-11

### Changed
- **Internal refactoring** — the monolithic `Grid.tsx` (718 lines) has been split into focused, maintainable modules with no changes to the public API:
  - `utils/theme.ts` — theme presets and color resolution logic
  - `hooks/useColumnOrder` — column ordering, drag-and-drop reordering, move left/right
  - `hooks/useColumnResize` — column resize state and global mouse event handling
  - `hooks/useColumnVisibility` — visible column set management
  - `hooks/useSorting` — sort config, handler, and sorted data derivation
  - `hooks/useSelection` — select-all and per-row selection handlers
  - `hooks/useRowExpansion` — row expand/collapse state
  - `components/GridHeader` — header row rendering
  - `components/GridBody` — data rows rendering (striping, selection, child views)
  - `components/GridFooter` — pagination footer
  - `components/ColumnMenu` — column context-menu popover
  - `components/ManageColumnsDialog` — manage/hide columns dialog

---

## [0.2.8] — 2026-03-23

### Fixed
- Single selection mode: header checkbox alignment issue

---

## [0.2.7] — 2026-03-23

### Added
- Column sorting via header click and context menu
- Column drag-and-drop reordering
- Interactive column resizing
- Per-column `sortable`, `draggable`, `resizable` flags
- Grid-level `allowSorting`, `allowReordering`, `allowResizing` props
- `onSort` callback for server-side sorting support

---

## [0.2.6] — 2026-03-22

### Added
- Column hide/show via header context menu
- "Manage columns" dialog with search and reset
- `defaultHidden` column property

---

## [0.2.5] — 2026-03-22

### Added
- Grid-level `allowSorting`, `allowReordering`, `allowResizing` feature flags

---

## [0.2.4] — 2026-03-21

### Added
- `gridColor` and `gridTextColor` props for custom surface palette
- `blue` theme preset

---

## [0.2.3] — 2026-03-21

### Fixed
- Horizontal scrolling for wide grids
- Column resize stability improvements

---

## [0.2.2] — 2026-03-21

### Added
- Striped row support (`stripedRows`, `stripedRowOddColor`, `stripedRowEvenColor`)

---

## [0.2.1] — 2026-03-21

### Added
- Pagination footer with page navigation
- `pagination` prop (`total`, `page`, `pageSize`, `onPageChange`)

---

## [0.2.0] — 2026-03-21

### Added
- `dark` and `light` theme presets via `theme` prop
- CSS custom property theming system

---

## [0.1.0] — 2026-03-21

### Added
- Initial release
- CSS Grid-based layout
- Typed columns with `key`, `header`, `width`, `flex`, `render`
- Row selection with checkbox support (`selectable`, `selectedIds`, `onSelectionChange`)
- `single` and `multiple` selection modes
- Expandable rows with `renderChildView`
- `showHeader` toggle
