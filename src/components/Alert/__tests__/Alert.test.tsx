import React from 'react';
import { screen } from '@testing-library/react';
import { Alert } from '../Alert';
import { render } from '../../../test-utils';

describe('Alert Component', () => {
  it('renders title and description when provided', () => {
    render(
      <Alert title="Test Title" description="Test Description" status="info" />,
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });
});
