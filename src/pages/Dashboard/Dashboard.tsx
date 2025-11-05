import React from 'react';
import { Headline } from '../../components/Headline/Headline';
import { HeadlineWapper } from '../../components/Headline/HeadlineWrapper';
import { Panel } from '../../components/Panel/Panel';
import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import { Chart, useChart } from '@chakra-ui/charts';
import { detailedPlanEnrollmentTrends, medicalPlanDistribution, renderCustomizedLabel } from './index';
import { Statistics } from './components/Statistics';

function Dashboard() {
  const detailedPlanEnrollmentTrendsChart = useChart(detailedPlanEnrollmentTrends);
  const medicalPlanDistributionChart = useChart(medicalPlanDistribution);
  return (
    <>
      <HeadlineWapper>
        <Headline title={'Dashboard'} />
      </HeadlineWapper>
      <Statistics />
      <Grid templateColumns="repeat(2, 1fr)" gap="6">
        <Panel>
          <Box mb={4}>
            <Heading>Detailed Plan Enrollment Trends</Heading>
            <Text
              color={'gray.500'}>Year-over-year comparison of plan enrollment rates
            </Text>
          </Box>
          <Chart.Root maxH="sm" chart={detailedPlanEnrollmentTrendsChart}>
            <BarChart layout={'vertical'} data={detailedPlanEnrollmentTrendsChart.data}>
              <CartesianGrid stroke={detailedPlanEnrollmentTrendsChart.color('border.muted')} vertical={false} />
              <XAxis type="number" axisLine={true} tickLine={true} />
              <YAxis
                type="category"
                dataKey={detailedPlanEnrollmentTrendsChart.key('type')}
                orientation="left"
                stroke={detailedPlanEnrollmentTrendsChart.color('border')}

              />
              <Tooltip
                cursor={{ fill: detailedPlanEnrollmentTrendsChart.color('bg.muted') }}
                animationDuration={100}
                content={<Chart.Tooltip />}
              />
              <Legend
                layout="vertical"
                align="right"
                verticalAlign="top"
                wrapperStyle={{ paddingLeft: 30 }}
                content={<Chart.Legend orientation="vertical" />}
              />
              {detailedPlanEnrollmentTrendsChart.series.map((item) => (
                <Bar
                  isAnimationActive={true}
                  key={item.name}
                  dataKey={detailedPlanEnrollmentTrendsChart.key(item.name)}
                  fill={detailedPlanEnrollmentTrendsChart.color(item.color)}
                />
              ))}
            </BarChart>
          </Chart.Root>
        </Panel>
        <Panel>
          <Box mb={4}>
            <Heading>Medical Plan Distribution</Heading>
            <Text
              color={'gray.500'}>Current enrollment distribution with year-over-year changes
            </Text>
          </Box>

          <Chart.Root mx="auto" chart={medicalPlanDistributionChart}>
            <PieChart>
              <Tooltip
                cursor={true}
                animationDuration={0}
                content={<Chart.Tooltip hideLabel />}
              />
              <Pie
                isAnimationActive={true}
                data={medicalPlanDistributionChart.data}
                dataKey={medicalPlanDistributionChart.key('value')}
                labelLine={{ stroke: medicalPlanDistributionChart.color('border.emphasized') }}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error */
                label={renderCustomizedLabel}
              >
                {medicalPlanDistributionChart.data.map((item) => (
                  <Cell key={item.name} fill={medicalPlanDistributionChart.color(item.color)} />
                ))}
              </Pie>
            </PieChart>
          </Chart.Root>
        </Panel>
      </Grid>
    </>
  );
}

export default Dashboard;
