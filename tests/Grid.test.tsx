import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Grid } from '../src/Grid';
import { Column } from '../src/types';

describe('Grid Component', () => {
  const data = [
    { id: 1, name: 'John Doe', role: 'Admin' },
    { id: 2, name: 'Jane Smith', role: 'User' },
  ];

  const columns: Column<typeof data[0]>[] = [
    { key: 'name', header: 'Name Cell' },
    { key: 'role', header: 'Role Cell' },
  ];

  it('renders headers correctly', () => {
    render(<Grid data={data} columns={columns} />);

    // Headers should be there
    expect(screen.getByText('Name Cell')).toBeInTheDocument();
    expect(screen.getByText('Role Cell')).toBeInTheDocument();
  });

  it('renders correctly when showHeader is false', () => {
    render(<Grid data={data} columns={columns} showHeader={false} />);

    // Headers should NOT be there
    expect(screen.queryByText('Name Cell')).not.toBeInTheDocument();
  });

  it('renders data rows correctly', () => {
    render(<Grid data={data} columns={columns} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });

  it('toggles column visibility when managing columns', () => {
    render(<Grid data={data} columns={columns} />);

    // Click the central global menu toggle on the right side if selectable
    // Or we can just click a specific column menu -> Manage columns
    const menuButtons = screen.getAllByRole('button');
    expect(menuButtons.length).toBeGreaterThan(0);

    // Open first column menu
    fireEvent.click(menuButtons[0]);

    // Click 'Manage columns' in the popover
    const manageButton = screen.getByText('Manage columns');
    fireEvent.click(manageButton);

    // The Manage Columns dialog appears
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('retains fixed height when data is filtered', () => {
    const originalGetBoundingClientRect = HTMLElement.prototype.getBoundingClientRect;
    HTMLElement.prototype.getBoundingClientRect = () => ({
      width: 500,
      height: 300,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      x: 0,
      y: 0,
      toJSON: () => {}
    });

    try {
      const { container } = render(<Grid data={data} columns={columns} allowFiltering={true} />);
      const scrollContainer = container.querySelector('.free-grid-scroll-container');
      
      expect(scrollContainer).toBeInTheDocument();
      // Initially, minHeight is not forced
      expect(scrollContainer).not.toHaveStyle('min-height: 300px');

      // Open the column menu
      const menuButtons = screen.getAllByRole('button');
      fireEvent.click(menuButtons[0]);

      // Click Filter
      const filterButton = screen.getByText(/Filter/i);
      fireEvent.click(filterButton);

      // Input a filter value and submit
      const input = screen.getByPlaceholderText(/Filter value/i);
      fireEvent.change(input, { target: { value: 'Jane' } });
      fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', keyCode: 13 });

      // After filtering is active, height from getBoundingClientRect is locked down
      expect(scrollContainer).toHaveStyle({ minHeight: '300px' });
    } finally {
      HTMLElement.prototype.getBoundingClientRect = originalGetBoundingClientRect;
    }
  });
});
