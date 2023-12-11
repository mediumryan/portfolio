import { SectionWrapper } from '../Greeting/Greeting';
import Chart from 'react-apexcharts';
import { SectionTitle } from '../Intro/Intro';
import { useEffect, useState } from 'react';

export default function SkillBar() {
    // setting media query about column
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const chartOption = {
        chart: {
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                horizontal: !isSmallScreen,
            },
        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: isSmallScreen ? '14px' : '20px',
            },
        },
        xaxis: {
            labels: {
                style: {
                    fontSize: isSmallScreen ? '10px' : '16px',
                    fontWeight: '700',
                    colors: '#999',
                },
            },
            categories: ['React', 'JS', 'TS', 'CSS', 'HTML'],
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: isSmallScreen ? '10px' : '16px',
                    fontWeight: '700',
                    colors: '#999',
                },
            },
        },
        colors: ['#3493ca'],
        tooltip: {
            enabled: false,
        },
    };

    return (
        <SectionWrapper id="skills" style={{ margin: '3rem 0 ' }}>
            <SectionTitle>Skills</SectionTitle>
            <Chart
                style={{ width: '100%' }}
                type="bar"
                height={350}
                series={[
                    {
                        name: 'Skill Level',
                        data: [85, 85, 30, 90, 95],
                    },
                ]}
                options={chartOption}
            />
        </SectionWrapper>
    );
}
