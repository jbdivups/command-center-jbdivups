import React from 'react';
import { Button as ChakraButton, type ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {
  label?: string;
  variant?: 'solid' | 'outline' | 'ghost' | 'plain';
  disabled?: boolean;
  loading?: boolean;
  colorPalette?: 'red' | 'blue' | 'green' | 'yellow' | 'gray';
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  w?: string | number;
  onClick?: () => void;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { label, colorPalette, variant, disabled, loading, icon, size, w, onClick } = props;
  return (
    <ChakraButton ref={ref} disabled={disabled} colorPalette={colorPalette} variant={variant} loading={loading}
                  size={size}
                  w={w} onClick={onClick}>
      {icon} {label}
    </ChakraButton>
  );
});
