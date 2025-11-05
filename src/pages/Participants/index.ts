import { generateRows } from '../../components/Table/helpers';

export const participantsData = {
  headers: [
    'Name',
    'Email',
    'Department',
    'Position',
    'Verification Status',
    'Status'
  ],
  rows: generateRows(10)
};