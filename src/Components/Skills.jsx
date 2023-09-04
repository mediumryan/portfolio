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
    padding: 24px;
`;

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
            duration: 2,
            delay: 2,
        },
    },
};

export default function Skills() {
    return (
        <SkillsWrapper
            variants={skill_wrapper_variants}
            initial="initial"
            animate="animate"
        >
            <Title style={{ textAlign: 'center' }}>Skills</Title>
            <Chart
                type="bar"
                height={350}
                series={[
                    {
                        name: 'Skill Level',
                        data: [85, 85, 90, 95], // 각 스킬에 대한 레벨 데이터를 배열로 설정
                    },
                ]}
                options={{
                    plotOptions: {
                        bar: {
                            borderRadius: 10,
                            horizontal: false,
                        },
                    },
                    dataLabels: {
                        enabled: true,
                        style: {
                            fontSize: '20px',
                        },
                    },
                    xaxis: {
                        labels: {
                            style: {
                                fontSize: '20px',
                            },
                        },
                        categories: ['React', 'JavaScript', 'CSS', 'HTML'],
                    },
                    yaxis: {
                        labels: {
                            style: {
                                fontSize: '20px',
                            },
                        },
                    },
                    colors: ['#0077c2'],
                    toolbar: {
                        show: false,
                    },
                }}
            />
        </SkillsWrapper>
    );
}
