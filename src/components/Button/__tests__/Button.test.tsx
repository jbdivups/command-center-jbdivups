import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { Button } from '../Button';
import { render } from '../../../test-utils';

describe('Button Component', () => {
  it('renders label and icon', () => {
    render(
      <Button label="Click Me" icon={<span data-testid="icon">*</span>} />,
    );
    expect(screen.getByText('Click Me')).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('calls onClick when enabled', () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} disabled />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
