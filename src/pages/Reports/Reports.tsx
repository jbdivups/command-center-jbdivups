import React, { useRef } from 'react';
import {
  Avatar,
  Box,
  Grid,
  Heading,
  HStack,
  Tag,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { Panel } from '../../components/Panel';
import { Headline } from '../../components/Headline/Headline';
import { LuShare2, LuWandSparkles } from 'react-icons/lu';
import { Button } from '../../components/Button';
import { HeadlineWapper } from '../../components/Headline/HeadlineWrapper';
import { standardReportsData, yourReportsData } from './index';
import {
  Table,
  TableBody,
  TableCell,
  TableColumnHeader,
  TableHeader,
  TableRow,
} from '../../components/Table';

const handleGenerateReport = (prompt: string) => {
  console.log('Generating report for prompt:', prompt);
};

function Reports() {
  const ref = useRef(null);

  return (
    <>
      <HeadlineWapper>
        <Headline
          title={'HR Reports'}
          description={
            'Access and generate reports to manage your HR operations efficiently'
          }
        />
      </HeadlineWapper>
      <Panel mb={8}>
        <HStack mb={4}>
          <Text color={'#16a34a'}>
            <LuWandSparkles />
          </Text>
          <div>
            <Heading>Generate a custom report using prompts</Heading>
            <Text color={'gray.500'}>
              Describe the report you need in natural language and our AI will
              generate it for you
            </Text>
          </div>
        </HStack>
        <Textarea ref={ref} mb={4} rows={10} />
        <Button
          onClick={() =>
            handleGenerateReport(
              ref.current ? (ref.current as HTMLTextAreaElement).value : '',
            )
          }
          icon={<LuWandSparkles />}
          label={'Generate Report'}
        />
      </Panel>
      <HeadlineWapper>
        <Headline
          title={'Standard Reports'}
          description={'Generate common HR reports with applied filters'}
        />
      </HeadlineWapper>
      <Grid mb={8} templateColumns="repeat(3, 1fr)" gap="6">
        {standardReportsData.map((item, index) => {
          const Icon = item.icon;
          const {
            name,
            description,
            lastGeneratedDate,
            frequency,
            colorPalette,
            format,
          } = item;
          return (
            <Panel key={index}>
              <VStack h={'100%'} justifyContent={'space-between'}>
                <Box w={'100%'}>
                  <HStack mb={2} justifyContent="space-between">
                    <Avatar.Root
                      shape={'rounded'}
                      size={'lg'}
                      colorPalette={colorPalette}
                    >
                      <Avatar.Fallback asChild>
                        <Icon size={'24px'} />
                      </Avatar.Fallback>
                    </Avatar.Root>
                    <Tag.Root size={'lg'}>
                      <Tag.Label fontSize={'xs'} color={'65758b'}>
                        {frequency}
                      </Tag.Label>
                    </Tag.Root>
                  </HStack>
                  <Heading size="2xl">{name}</Heading>
                  <Text mb={2} color={'#65758b'} fontSize={'sm'}>
                    {description}
                  </Text>
                </Box>
                <Box w={'100%'}>
                  <HStack justifyContent="space-between">
                    <Text color={'#65758b'} fontSize={'sm'}>
                      Last generated:
                    </Text>
                    <Text color={'#65758b'} fontSize={'sm'}>
                      {lastGeneratedDate}
                    </Text>
                  </HStack>
                  <HStack mb={4} justifyContent="space-between">
                    <Text color={'#65758b'} fontSize={'sm'}>
                      Format:
                    </Text>
                    <Text color={'#65758b'} fontSize={'sm'}>
                      {format}
                    </Text>
                  </HStack>
                  <Button w={'100%'} label={'Generate Report'} />
                </Box>
              </VStack>
            </Panel>
          );
        })}
      </Grid>
      <HeadlineWapper>
        <Headline
          title={'Your Reports'}
          description={
            'Access your previously saved reports and reports shared with you'
          }
        />
      </HeadlineWapper>
      <Table w={'full'}>
        <TableHeader>
          <TableRow>
            {yourReportsData.headers.map((header) => (
              <TableColumnHeader key={header}>{header}</TableColumnHeader>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {yourReportsData.rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.createdAt}</TableCell>
              <TableCell>{row.createdBy}</TableCell>
              <TableCell>{row.lastViewedAt}</TableCell>
              <TableCell>
                <HStack>
                  <Button
                    size={'sm'}
                    variant={'outline'}
                    label={'View'}
                    colorPalette={'gray'}
                  />
                  <Button
                    size={'sm'}
                    variant={'outline'}
                    icon={<LuShare2 />}
                    colorPalette={'gray'}
                  />
                </HStack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default Reports;
