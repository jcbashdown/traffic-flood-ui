'use client'
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface RainfallData {
  timestamp: string;
  precipMM: number;
}

interface RainTimeseriesProps {
  data: RainfallData[];
}

const RainTimeseries: React.FC<RainTimeseriesProps> = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.timestamp),
    datasets: [
      {
        label: 'Rainfall (mm)',
        data: data.map((item) => item.precipMM),
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
        text: 'Rainfall Timeseries',
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default RainTimeseries;
