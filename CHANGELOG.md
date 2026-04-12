# Changelog

All notable changes to `free-grid-react` are documented here.  
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

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
