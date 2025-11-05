import * as React from 'react';
import { DataList as ChakraDataList } from '@chakra-ui/react';

interface DataListProps extends ChakraDataList.RootProps {
  items: Array<{ label: React.ReactNode; value: React.ReactNode }>;
  orientation?: 'vertical' | 'horizontal';
  size?: 'sm' | 'md' | 'lg';
}

export const DataList: React.FC<DataListProps> = ({
  items,
  orientation = 'vertical',
  size = 'lg',
}) => (
  <DataListRoot
    orientation={orientation}
    size={size}
    data-testid="datalist-root" // ✅ Added for testing
  >
    {items.map(({ label, value }, index) => (
      <DataListItem
        key={index}
        label={label}
        value={value}
        data-testid={`datalist-item-${index}`} // ✅ Added for testing
      />
    ))}
  </DataListRoot>
);

export const DataListRoot = ChakraDataList.Root;

interface DataListItemProps extends ChakraDataList.ItemProps {
  label?: React.ReactNode;
  value?: React.ReactNode;
  children?: React.ReactNode;
}

export const DataListItem = React.forwardRef<HTMLDivElement, DataListItemProps>(
  ({ label, value, children, ...rest }, ref) => (
    <ChakraDataList.Item ref={ref} {...rest}>
      {label && (
        <ChakraDataList.ItemLabel fontWeight="medium" color="gray.500">
          {label}
        </ChakraDataList.ItemLabel>
      )}
      {value && (
        <ChakraDataList.ItemValue fontWeight="medium" color="black">
          {value}
        </ChakraDataList.ItemValue>
      )}
      {children}
    </ChakraDataList.Item>
  ),
);

DataListItem.displayName = 'DataListItem';
DataListRoot.displayName = 'DataListRoot';
