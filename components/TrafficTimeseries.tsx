'use client'
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface TrafficData {
  timestamp: string;
  percentage: number;
}

interface TrafficTimeseriesProps {
  data: TrafficData[];
}

const TrafficTimeseries: React.FC<TrafficTimeseriesProps> = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.timestamp),
    datasets: [
      {
        label: 'Traffic',
        data: data.map((item) => item.percentage),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Traffic Timeseries',
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default TrafficTimeseries;
