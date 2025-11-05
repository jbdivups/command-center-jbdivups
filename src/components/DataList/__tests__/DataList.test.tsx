import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../../test-utils';
import { DataList } from '../DataList';

describe('DataList Component', () => {
  const items = [
    { label: 'Name', value: 'John Doe' },
    { label: 'Email', value: 'john@example.com' },
  ];

  it('renders the root with default props', () => {
    render(<DataList items={items} />);
    const root = screen.getByTestId('datalist-root');
    expect(root).toBeInTheDocument();
    expect(root).toHaveAttribute('orientation', 'vertical'); // Chakra sets this internally
  });

  it('renders all items with correct labels and values', () => {
    render(<DataList items={items} />);
    items.forEach((item, index) => {
      const dataItem = screen.getByTestId(`datalist-item-${index}`);
      expect(dataItem).toBeInTheDocument();
      expect(screen.getByText(item.label)).toBeInTheDocument();
      expect(screen.getByText(item.value)).toBeInTheDocument();
    });
  });

  it('applies custom orientation and size', () => {
    render(<DataList items={items} orientation="horizontal" size="sm" />);
    const root = screen.getByTestId('datalist-root');
    expect(root).toHaveAttribute('orientation', 'horizontal');
    // Size is applied via Chakra props, so you can check className or style if needed
  });
});
