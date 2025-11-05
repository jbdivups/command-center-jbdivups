import React from 'react';
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';

interface LinkProps extends ChakraLinkProps {
  title: string,
  href: string,
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
    const { title, href } = props;
    return (
      <ChakraLink ref={ref} variant={'plain'} color={'brand.emphasized'} fontWeight={'medium'}
                  href={href}>{title}</ChakraLink>
    );
  }
);
