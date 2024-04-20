import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  yAxis: [
    {
      label: 'Time saved (minutes)',
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};
const dataset = [
  {
    time: 30,
    month: 'Jan',
  },
  {
    time: 40,
    month: 'Fev',
  },
  {
    time: 60,
    month: 'Mar',
  },
  {
    time: 80,
    month: 'Apr',
  },
  {
    time: 90,
    month: 'May',
  },
  {
    time: 100,
    month: 'June',
  },
  {
    time: 120,
    month: 'July',
  },
  {
    time: 130,
    month: 'Aug',
  },
  {
    time: 140,
    month: 'Sept',
  },
  {
    time: 123,
    month: 'Oct',
  },
  {
    time: 110,
    month: 'Nov',
  },
  {
    time: 100,
    month: 'Dec',
  },
];

const valueFormatter = (value: number | null) => `${value}mm`;

export default function BarsDataset() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'time', label: 'time', valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}