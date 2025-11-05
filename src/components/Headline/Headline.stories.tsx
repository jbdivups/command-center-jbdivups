import type { Meta, StoryObj } from '@storybook/react-vite';

import { Headline } from './Headline';

const meta = {
  component: Headline,
} satisfies Meta<typeof Headline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Welcome to Our Application',
    description: 'This is a brief description of the application features.',
  },
};
