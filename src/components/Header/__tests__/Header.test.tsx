import React from 'react';
import { screen } from '@testing-library/react';
import { Header } from '../Header';
import { render } from '../../../test-utils';

describe('Header Component', () => {
  it('renders the search input with placeholder', () => {
    render(<Header />);
    const searchInput = screen.getByPlaceholderText('Search employees...');
    expect(searchInput).toBeInTheDocument();
  });

  it('renders two icon buttons with correct aria-labels', () => {
    render(<Header />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
    buttons.forEach((btn) => {
      expect(btn).toHaveAttribute('aria-label', 'Call support');
    });
  });

  it('forwards ref to the Box element', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Header ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
