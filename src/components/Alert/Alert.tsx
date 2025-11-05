import React from 'react';
import { Alert as ChakraAlert } from '@chakra-ui/react';

interface AlertProps extends ChakraAlert.RootProps {
  title?: string;
  status?: 'info' | 'warning' | 'error' | 'success';
  description?: string;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    const { title, status, description } = props;
    return (
      <ChakraAlert.Root ref={ref} status={status}>
        <ChakraAlert.Content>
          <ChakraAlert.Title>{title}</ChakraAlert.Title>
          {description?.length ? (
            <ChakraAlert.Description>{description}</ChakraAlert.Description>
          ) : null}
        </ChakraAlert.Content>
      </ChakraAlert.Root>
    );
  },
);
