import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';

interface PanelProps extends BoxProps {
  children: React.ReactNode;
  w?: number;
  mb?: number;
}

export const Panel = React.forwardRef<HTMLAnchorElement, PanelProps>(
  (props, ref) => {
    const { children, w, mb } = props;
    return (
      <Box ref={ref} w={w} borderWidth={1} bg="white" py={4} px={4} mb={mb}>
        {children}
      </Box>
    );
  },
);
