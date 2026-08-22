'use client';

import Chart from 'react-apexcharts';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

export default function SkillChart() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    setMounted(true);
  }, []);

  const chartOption = {
    chart: {
      toolbar: {
        show: false,
      },
      parentHeightOffset: 0,
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        horizontal: isMobile,
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: isMobile ? '12px' : '16px',
        fontWeight: 'bold',
      },
    },
    xaxis: {
      labels: {
        style: {
          fontSize: isMobile ? '10px' : '14px',
          fontWeight: '600',
          colors: '#64748B',
        },
      },
      categories: ['JS', 'TS', 'React.js', 'Next.js', 'SQL', 'PHP'],
    },
    yaxis: {
      labels: {
        style: {
          fontSize: isMobile ? '12px' : '14px',
          fontWeight: '600',
          colors: '#64748B',
        },
      },
    },
    colors: ['#3B82F6'], // tailwind blue-500
    tooltip: {
      enabled: false,
    },
    grid: {
      borderColor: '#F1F5F9',
      strokeDashArray: 4,
    }
  };

  if (!mounted) {
    return <div className="w-full h-[450px] bg-gray-50/50 animate-pulse rounded-2xl flex items-center justify-center">Loading chart...</div>;
  }

  return (
    <div className="w-full bg-white p-2 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-center items-center">
      <div className="w-full max-w-4xl">
        <Chart
          type="bar"
          height={isMobile ? 400 : 450}
          width="100%"
          series={[
            {
              name: 'Skill Level',
              data: [90, 90, 85, 80, 30, 15],
            },
          ]}
          options={chartOption}
        />
      </div>
    </div>
  );
}
