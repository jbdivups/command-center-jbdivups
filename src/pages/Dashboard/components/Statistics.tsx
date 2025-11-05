import { Panel } from '../../../components/Panel/Panel';
import { Avatar, Badge, Box, FormatNumber, Grid, HStack, Stat, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { statisticsData } from '../index';
import { LuPalette, LuSettings } from 'react-icons/lu';
import { Button } from '../../../components/Button';

export const Statistics = React.forwardRef<HTMLDivElement>(
  function Statistics() {
    return (
      <Grid templateColumns="repeat(4, 1fr)" gap="6" mb={6}>
        {statisticsData.map((item, index) => (
          <Panel key={index}>
            <VStack alignItems={'left'} h={'100%'}>
              <Stat.Root size={'lg'}>
                <Stat.Label>{item.label}</Stat.Label>
                <Stat.ValueText>
                  <FormatNumber value={item.value} style={item.isPercent ? 'percent' : 'decimal'} />
                </Stat.ValueText>
              </Stat.Root>
              <HStack justifyContent={'space-between'}>
                <Box>
                  <Text fontSize={'sm'}>Previous Year</Text>
                  <Text fontWeight={'bold'}>
                    <FormatNumber value={item.value} style={item.isPercent ? 'percent' : 'decimal'} />
                  </Text>
                </Box>
                <Box>
                  <Text fontSize={'sm'}>Change</Text>
                  <Stat.Root size={'lg'}>
                    <Badge bg={'transparent'}>
                      {item.change > 0 && <Stat.UpIndicator />}
                      {item.change < 0 && <Stat.DownIndicator />}
                      <Text fontWeight={'bold'}>
                        <FormatNumber value={item.change} style={'percent'} />
                      </Text>
                    </Badge>
                  </Stat.Root>
                </Box>
              </HStack>
            </VStack>
          </Panel>
        ))}
        <Panel>
          <Box textAlign={'center'}>
            <Avatar.Root size={'xl'} colorPalette={'green'} mb={'6px'}>
              <Avatar.Fallback asChild>
                <LuSettings size={'24px'} />
              </Avatar.Fallback>
            </Avatar.Root>
            <Box mb={3}>
              <Text fontWeight={'bold'}>Customize Dashboard</Text>
              <Text fontSize={'xs'}>Personalize your view</Text>
            </Box>
            <Button size={'sm'} icon={<LuPalette />} label={'Customize'} />
          </Box>
        </Panel>
      </Grid>
    );
  }
);