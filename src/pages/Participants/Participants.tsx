import { Badge } from '@chakra-ui/react';
import { LuPlus } from 'react-icons/lu';
import React from 'react';
import { Table, TableBody, TableCell, TableColumnHeader, TableHeader, TableRow } from '../../components/Table';
import { Headline } from '../../components/Headline/Headline';
import { Button } from '../../components/Button';
import { Link } from '../../components/Link';
import { HeadlineWapper } from '../../components/Headline/HeadlineWrapper';
import { participantsData } from './index';

function Participants() {
  return (
    <>
      <HeadlineWapper>
        <Headline title={'Participants'}
                  description={'Manage your participants and their benefits.'} />
        <Button icon={<LuPlus />} label={'Add Participant'} />
      </HeadlineWapper>
      <Table w={'full'} isSearchable={true} isPaginated={true}
             searchPlaceholder={'Search participants by name, email, EEID, or SSN...'}>
        <TableHeader>
          <TableRow>
            {participantsData.headers.map((header) => (
              <TableColumnHeader key={header}>{header}</TableColumnHeader>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {participantsData.rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell>
                <Link href={'#'} title={row[1]} />
              </TableCell>
              <TableCell>{row[2]}</TableCell>
              <TableCell>{row[3]}</TableCell>
              <TableCell>{row[4]}</TableCell>
              <TableCell>
                <Badge variant={'solid'}>
                  {row[5]}</Badge>
              </TableCell>
              <TableCell>
                <Badge variant={'solid'}>
                  {row[6]}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default Participants;
