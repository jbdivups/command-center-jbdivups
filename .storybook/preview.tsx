import type { Preview } from '@storybook/react-vite';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from '../src/theme';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
    actions: { disable: true },
    controls: { disable: true },
  },
  decorators: [
    (Story) => <ChakraProvider value={system}>{Story()}</ChakraProvider>,
  ],
};

export default preview;
