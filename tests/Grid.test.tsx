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
});
