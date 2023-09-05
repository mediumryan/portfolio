import Chart from 'react-apexcharts';

export default function SkillsChart() {
    return (
        <Chart
            style={{ width: '100%' }}
            type="bar"
            height={350}
            series={[
                {
                    name: 'Skill Level',
                    data: [85, 85, 90, 95],
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
                            fontSize: '16px',
                        },
                    },
                    categories: ['React', 'JavaScript', 'CSS', 'HTML'],
                },
                yaxis: {
                    labels: {
                        style: {
                            fontSize: '16px',
                        },
                    },
                },
                colors: ['#0077c2'],
                tooltip: {
                    enabled: false,
                },
            }}
        />
    );
}
