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
                        fontSize: window.innerWidth < 767 ? '14px' : '20px',
                    },
                },
                xaxis: {
                    labels: {
                        style: {
                            fontSize: window.innerWidth < 767 ? '10px' : '16px',
                        },
                    },
                    categories: ['React', 'JavaScript', 'CSS', 'HTML'],
                },
                yaxis: {
                    labels: {
                        style: {
                            fontSize: window.innerWidth < 767 ? '10px' : '16px',
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
