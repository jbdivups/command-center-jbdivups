// src/theme.ts
import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  globalCss: {
    html: {
      colorPalette: 'brand'
    },
    css: {

      scrollBehavior: 'smooth',
      outline: 'none !important'
    },
    // Force all input and textarea to have light gray background
    'input, textarea': {
      backgroundColor: '#f8fafc !important', // Light gray
      _focus: {
        backgroundColor: '#f8fafc !important'
      },
      _hover: {
        backgroundColor: '#f8fafc !important'
      },
      '&[type="search"]': {
        backgroundColor: '#f8fafc !important'
      }
    },
    // Also target Chakra's internal input components
    '[data-chakra-input], [data-chakra-textarea]': {
      backgroundColor: '#f8fafc !important'
    }
  },
  theme: {
    tokens: {
      colors: {
        brand: {
          100: { value: '#fff' },
          200: { value: 'rgba(238,238,238,0.5)' },
          300: { value: '#2563eb' },
          500: { value: '#113c45' },
          700: { value: '#333' },
          800: { value: '#0f1729' },
          900: { value: '#f2fbf5' }
        }
      }
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: '{colors.brand.500}' },
          contrast: { value: '{colors.brand.100}' },
          fg: { value: '{colors.brand.700}' },
          muted: { value: '{colors.brand.100}' },
          subtle: { value: '{colors.brand.200}' },
          emphasized: { value: '{colors.brand.300}' },
          focusRing: { value: '{colors.brand.500}' },
          bgSide: { value: '{colors.brand.800}' },
          bgMain: { value: '{colors.brand.900}' }
        }
      }
    }
  }
});

export const system = createSystem(defaultConfig, config);
