import { Tabs } from './Tabs';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    variant: {
      control: { type: 'radio' },
    },
    items: {
      control: 'object',
      description: 'Array of label/value pairs to render in the DataList.',
    },
    isLinks: {
      control: { type: 'boolean' },
      description: 'If true, renders tabs as links.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    isLinks: false,
    variant: 'enclosed',
    defaultValue: 'tab1',
    items: [
      { name: 'tab1', label: 'Tab 1', content: 'Content for Tab 1' },
      { name: 'tab2', label: 'Tab 2', content: 'Content for Tab 2' },
      { name: 'tab3', label: 'Tab 3', content: 'Content for Tab 3' },
      { name: 'tab4', label: 'Tab 4', content: 'Content for Tab 4' },
    ],
  },
};
