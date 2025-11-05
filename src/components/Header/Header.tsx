import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
} from '@chakra-ui/react';
import React from 'react';
import { LuBell, LuSearch, LuUser } from 'react-icons/lu';

export const Header = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Box
      ref={ref}
      px={6}
      py={2}
      borderWidth={'1px'}
      borderColor={'gray.200'}
      {...props}
    >
      <Flex gap={4} alignItems={'center'} justifyContent={'space-between'}>
        <Image
          height={50}
          src={
            'https://aptiaone-hr-suite.lovable.app/lovable-uploads/d2df23f8-45f8-4b39-abe9-1234174ea668.png'
          }
        />
        <InputGroup startElement={<LuSearch />} maxW={500}>
          <Input placeholder={'Search employees...'} />
        </InputGroup>
        <HStack>
          <IconButton aria-label="Call support" variant={'ghost'}>
            <LuBell />
          </IconButton>
          <IconButton aria-label="Call support" variant={'ghost'}>
            <LuUser />
          </IconButton>
        </HStack>
      </Flex>
    </Box>
  );
});
