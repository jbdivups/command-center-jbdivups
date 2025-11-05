import React from 'react';
import {
  Box,
  ButtonGroup,
  HStack,
  IconButton,
  Input,
  InputGroup,
  Pagination,
  Separator,
  Table as ChakraTable,
  Text
} from '@chakra-ui/react';
import { LuSearch } from 'react-icons/lu';
import { Button } from '../Button';

interface TableProps extends ChakraTable.RootProps {
  children?: React.ReactNode;
  searchPlaceholder?: string;
  isSearchable?: boolean;
  isPaginated?: boolean;
}

export const Table = React.forwardRef<HTMLDivElement, TableProps>((props, ref) => {
    const { children, isSearchable = false, isPaginated = false, searchPlaceholder = 'Search...' } = props;
    return (
      <Box ref={ref} bg={'white'} borderWidth="1px">
        {isSearchable && (
          <Box p={3} display={'flex'} gap={2}>
            <InputGroup startElement={<LuSearch />}>
              <Input placeholder={searchPlaceholder} />
            </InputGroup>
            <Button variant={'outline'} label={'Filter'} colorPalette={'gray'} />
            <Button variant={'outline'} label={'Export'} colorPalette={'gray'} />
          </Box>
        )}
        <Separator />
        <ChakraTable.Root variant={'line'} size={'lg'} interactive>
          {children}
        </ChakraTable.Root>
        {isPaginated && (
          <Box py={2} px={4}>
            <HStack justifyContent={'space-between'}>
              <Text color={'#444444'} textStyle={'sm'} fontWeight={'medium'}> Showing 8 of 413 rows</Text>
              <Pagination.Root count={20} pageSize={2} defaultPage={1} key={'md'}>
                <ButtonGroup variant="ghost" size={'md'}>
                  <Pagination.PrevTrigger />
                  <Pagination.Items
                    render={(page) => (
                      <IconButton variant={{ base: 'ghost', _selected: 'outline' }}>
                        {page.value}
                      </IconButton>
                    )}
                  />
                  <Pagination.NextTrigger />
                </ButtonGroup>
              </Pagination.Root>
            </HStack>
          </Box>
        )}

      </Box>);
  }
);

export const TableHeader = ChakraTable.Header;
export const TableBody = ChakraTable.Body;
export const TableRow = ChakraTable.Row;
export const TableColumnHeader = ChakraTable.ColumnHeader;
export const TableCell = ChakraTable.Cell;
