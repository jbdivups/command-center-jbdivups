import { randomInt } from '../../helpers';
import { UseChartProps } from '@chakra-ui/charts';
import React from 'react';
import type { PieLabelRenderProps } from 'recharts';

type DetailedPlanEnrollmentTrendsRow = {
  type: string;
  '2024': number;
  '2025': number;
};

export const detailedPlanEnrollmentTrends: UseChartProps<DetailedPlanEnrollmentTrendsRow> = {
  data: [
    { type: 'Medical PPO', '2024': randomInt(10, 3000), '2025': randomInt(10, 3000) },
    { type: 'Medical HDHP', '2024': randomInt(10, 3000), '2025': randomInt(10, 3000) },
    { type: 'Medical HMO', '2024': randomInt(10, 3000), '2025': randomInt(10, 3000) },
    { type: 'Dental High', '2024': randomInt(10, 3000), '2025': randomInt(10, 3000) },
    { type: 'Dental Low', '2024': randomInt(10, 3000), '2025': randomInt(10, 3000) },
    { type: 'Vision High', '2024': randomInt(10, 3000), '2025': randomInt(10, 3000) },
    { type: 'Vision Low', '2024': randomInt(10, 3000), '2025': randomInt(10, 3000) }
  ],
  series: [
    { name: '2024', color: '#0096a0' },
    { name: '2025', color: '#00d17c' }
  ]
};

export const medicalPlanDistribution = {
  data: [{
    name: 'Standard PPO',
    value: 15.0,
    change: '-17.0',
    color: '#4da6a6'  // teal
  },
    {
      name: 'Premium PPO',
      value: 16.5,
      change: '+20.3',
      color: '#9b59b6'  // purple
    },
    {
      name: 'Waived',
      value: 17.0,
      change: '-5.9',
      color: '#7f8c8d'  // gray
    },
    {
      name: 'Kaiser HMO',
      value: 11.0,
      change: '+28.4',
      color: '#8e44ad'  // dark purple
    },
    {
      name: 'HMO',
      value: 16.0,
      change: '-15.8',
      color: '#e74c3c'  // red
    },
    {
      name: 'HDHP Basic',
      value: 12.0,
      change: '+14.6',
      color: '#f39c12'  // orange
    },
    {
      name: 'HDHP Premium',
      value: 13.0,
      change: '+7.1',
      color: '#27ae60'  // green
    }
  ]
};

interface RenderCustomizedLabelProps extends PieLabelRenderProps {
  percent: number;
}

const RADIAN = Math.PI / 180;

export const renderCustomizedLabel = ({
                                        cx,
                                        cy,
                                        midAngle,
                                        innerRadius,
                                        outerRadius,
                                        index
                                      }: RenderCustomizedLabelProps) => {


  const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
  const ncx = Number(cx);
  const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const ncy = Number(cy);
  const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);
  return (
    <text
      x={x}
      y={y}
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      <tspan x={x} dy={'-0.8em'}>{medicalPlanDistribution.data[index].name}</tspan>
      <tspan x={x} dy={'1.2em'}>{(medicalPlanDistribution.data[index].value).toFixed(1)}%
        ({medicalPlanDistribution.data[index].change}%)
      </tspan>
    </text>
  );
};


export const statisticsData = [
  {
    label: 'Total Employees',
    value: randomInt(10, 10000),
    change: randomInt(-100, 100) / 100
  },
  {
    label: 'Total Dependents',
    value: randomInt(10, 10000),
    change: randomInt(-100, 100) / 100
  },
  {
    label: 'Medical Enrollment',
    value: randomInt(1, 100) / 100,
    change: randomInt(-100, 100) / 1000,
    isPercent: true
  }
];