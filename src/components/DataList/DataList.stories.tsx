import type { Meta, StoryObj } from '@storybook/react';
import { DataList } from './DataList';

const meta: Meta<typeof DataList> = {
  title: 'Components/DataList',
  component: DataList,
  argTypes: {
    size: {
      control: { type: 'radio' },
    },
    orientation: {
      control: { type: 'radio' },
      description: 'Controls the layout orientation of the DataList items.',
    },
    items: {
      control: 'object',
      description: 'Array of label/value pairs to render in the DataList.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DataList>;

export const Default: Story = {
  args: {
    size: 'lg',
    orientation: 'vertical',
    items: [
      { label: 'Name', value: 'John Doe' },
      { label: 'Email', value: 'john@example.com' },
      { label: 'Role', value: 'Administrator' },
    ],
  },
};
