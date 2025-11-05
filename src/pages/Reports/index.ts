import { randomInt } from '../../helpers';
import { LuCalendar, LuChartNoAxesColumnIncreasing, LuDollarSign, LuFileText, LuShield, LuUsers } from 'react-icons/lu';
import { DateTime } from 'luxon';


export const standardReportsData = [
  {
    name: 'Benefits Enrollment Report',
    description: 'Overview of employee benefit plan enrollments, changes, and trends',
    lastGeneratedDate: DateTime.local(randomInt(2023, 2025), randomInt(1, 12), randomInt(1, 29)).toLocaleString(DateTime.DATE_FULL),
    format: 'PDF, Excel, CSV',
    frequency: 'Monthly',
    icon: LuFileText,
    colorPalette: 'blue'
  },
  {
    name: 'Plan Utilization Report',
    description: 'Analysis of how employees are utilizing different benefit plans',
    lastGeneratedDate: DateTime.local(randomInt(2023, 2025), randomInt(1, 12), randomInt(1, 29)).toLocaleString(DateTime.DATE_FULL),
    format: 'PDF, Excel, CSV',
    frequency: 'Quarterly',
    icon: LuChartNoAxesColumnIncreasing,
    colorPalette: 'blue'
  },
  {
    name: 'Employee Census Report',
    description: 'Comprehensive listing of all employees and their demographic information',
    lastGeneratedDate: DateTime.local(randomInt(2023, 2025), randomInt(1, 12), randomInt(1, 29)).toLocaleString(DateTime.DATE_FULL),
    format: 'PDF, Excel, CSV',
    frequency: 'Monthly',
    icon: LuUsers,
    colorPalette: 'green'
  },
  {
    name: 'Benefits Cost Analysis',
    description: 'Breakdown of benefit costs per employee and department',
    lastGeneratedDate: DateTime.local(randomInt(2023, 2025), randomInt(1, 12), randomInt(1, 29)).toLocaleString(DateTime.DATE_FULL),
    format: 'PDF, Excel, CSV',
    frequency: 'Monthly',
    icon: LuDollarSign,
    colorPalette: 'yellow'
  },
  {
    name: 'Compliance Audit Report',
    description: 'Documentation for compliance with benefits regulations like ACA',
    lastGeneratedDate: DateTime.local(randomInt(2023, 2025), randomInt(1, 12), randomInt(1, 29)).toLocaleString(DateTime.DATE_FULL),
    format: 'PDF, Excel, CSV',
    frequency: 'Quarterly',
    icon: LuShield,
    colorPalette: 'red'
  },
  {
    name: 'Benefits Calendar',
    description: 'Timeline of important benefits dates and deadlines',
    lastGeneratedDate: DateTime.local(randomInt(2023, 2025), randomInt(1, 12), randomInt(1, 29)).toLocaleString(DateTime.DATE_FULL),
    format: 'PDF, Excel, CSV',
    frequency: 'Quarterly',
    icon: LuCalendar,
    colorPalette: 'blue'
  }
];


export const yourReportsData = {
  headers: [
    'Report Name',
    'Created',
    'Created By',
    'Last Viewed',
    'Actions'
  ],
  rows: [{
    name: 'Q1 Benefits Enrollment Summary',
    createdAt: DateTime.local(randomInt(2023, 2025), randomInt(1, 12), randomInt(1, 29)).toISODate(),
    createdBy: 'You',
    lastViewedAt: DateTime.local(randomInt(2023, 2025), randomInt(1, 12), randomInt(1, 29)).toISODate()
  },
    {
      name: 'Dental Plan Enrollment by Department',
      createdAt: DateTime.local(randomInt(2023, 2025), randomInt(1, 12), randomInt(1, 29)).toISODate(),
      createdBy: 'You',
      lastViewedAt: DateTime.local(randomInt(2023, 2025), randomInt(1, 12), randomInt(1, 29)).toISODate()
    }
  ]
};

