import type { Meta, StoryObj } from '@storybook/react-vite';

import { Table, TableBody, TableCell, TableColumnHeader, TableHeader, TableRow } from './Table';
import { generateRows } from './helpers';
import { Badge } from '@chakra-ui/react';

const meta = {
  component: Table
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

const tableHeader = ['Name',
  'Email',
  'Department',
  'Position',
  'Verification Status',
  'Status'];

const rows = generateRows(10);

export const Default: Story = {
  args: {
    searchPlaceholder: 'Search participants by name, email, EEID, or SSN...'
  },
  render: (args) => (
    <Table searchPlaceholder={args.searchPlaceholder}>
      <TableHeader>
        <TableRow>
          {tableHeader.map((header) => (
            <TableColumnHeader key={header}>{header}</TableColumnHeader>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            <TableCell>{row[1]}</TableCell>
            <TableCell>{row[2]}</TableCell>
            <TableCell>{row[3]}</TableCell>
            <TableCell>{row[4]}</TableCell>
            <TableCell>
              <Badge>
                {row[5]}</Badge>
            </TableCell>
            <TableCell>
              <Badge>
                {row[6]}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )

};
