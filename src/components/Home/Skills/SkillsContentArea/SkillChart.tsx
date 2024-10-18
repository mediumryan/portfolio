'use client';

import Chart from 'react-apexcharts';
import { useMediaQuery } from 'react-responsive';

export default function SkillChart() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const chartOption = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: isMobile ? '14px' : '20px',
      },
    },
    xaxis: {
      labels: {
        style: {
          fontSize: isMobile ? '10px' : '16px',
          fontWeight: '700',
          colors: '#999',
        },
      },
      categories: ['JS', 'TS', 'React.js', 'Next.js', 'SQL'],
    },
    yaxis: {
      labels: {
        style: {
          fontSize: isMobile ? '10px' : '16px',
          fontWeight: '700',
          colors: '#999',
        },
      },
    },
    colors: ['#60A5FA'],
    tooltip: {
      enabled: false,
    },
  };
  return (
    <Chart
      type="bar"
      height={isMobile ? 550 : 450}
      series={[
        {
          name: 'Skill Level',
          data: [85, 70, 85, 80, 30],
        },
      ]}
      options={chartOption}
    />
  );
}
