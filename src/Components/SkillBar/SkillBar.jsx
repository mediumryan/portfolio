import { SectionWrapper } from '../Greeting/Greeting';
import Chart from 'react-apexcharts';
import { SectionTitle } from '../Intro/Intro';

export default function SkillBar() {
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
                            fontSize: window.innerWidth < 768 ? '14px' : '20px',
                        },
                    },
                    xaxis: {
                        labels: {
                            style: {
                                fontSize:
                                    window.innerWidth < 768 ? '10px' : '16px',
                            },
                        },
                        categories: [
                            'React',
                            'JavaScript',
                            'TypeScript',
                            'CSS',
                            'HTML',
                        ],
                    },
                    yaxis: {
                        labels: {
                            style: {
                                fontSize:
                                    window.innerWidth < 768 ? '10px' : '16px',
                            },
                        },
                    },
                    colors: ['#0077c2'],
                    tooltip: {
                        enabled: false,
                    },
                }}
            />
        </SectionWrapper>
    );
}
