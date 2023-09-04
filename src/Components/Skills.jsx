import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { Title } from './Intro';
import Chart from 'react-apexcharts';
// styled-components
const SkillsWrapper = styled(motion.div)`
    grid-area: 1 / 2 / 2 / 4;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const SkillsChart = styled(Chart)``;

// variants
const skill_wrapper_variants = {
    initial: {
        x: -50,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 3,
            delay: 2,
        },
    },
};
// chart options
const chartOptions = {
    chart: {
        id: 'basic-bar',
    },
    xaxis: {
        categories: 'xCategories',
        labels: {
            style: {
                fontSize: '12px',
            },
        },
    },
    yaxis: {
        labels: {
            style: {
                fontSize: '12px',
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    colors: ['#FF5733', '#2196F3', '#FFC107', '#4CAF50'], // Added colors for open, close, low, high
    fill: {
        colors: ['#FF5733', '#2196F3', '#FFC107', '#4CAF50'], // Added colors for open, close, low, high
    },
    legend: {
        fontSize: '14px', // Styling for legend
        markers: {
            width: 12,
            height: 12,
        },
    },
};

const chartSeries = [
    {
        name: 'Open',
        data: 1,
    },
    {
        name: 'Close',
        data: 200,
    },
    {
        name: 'Low',
        data: 500,
    },
    {
        name: 'High',
        data: 40,
    },
];

export default function Skills() {
    return (
        <SkillsWrapper
            variants={skill_wrapper_variants}
            initial="initial"
            animate="animate"
        >
            <Title>Skills</Title>
            <SkillsChart
                options={chartOptions}
                series={chartSeries}
                type="bar"
                height={350}
            />
        </SkillsWrapper>
    );
}
