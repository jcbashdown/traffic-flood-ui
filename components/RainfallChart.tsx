'use client'
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

interface RainfallData {
  timestamp: string;
  precipMM: number;
}

interface RainfallChartProps {
  data: RainfallData[];
}

const RainfallChart: React.FC<RainfallChartProps> = ({ data }) => {
  const chartOptions: ApexOptions = {
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      title: {
        text: 'Rainfall (mm)',
      },
    },
    chart: {
      id: 'rainfall-chart',
      toolbar: {
        autoSelected: 'pan',
        show: false,
      },
      height: '80%',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
  };

  const rangeSliderOptions: ApexOptions = {
    chart: {
      id: 'range-slider',
      brush: {
        target: 'rainfall-chart',
        enabled: true,
      },
      selection: {
        enabled: true,
        xaxis: {
          min: new Date(data[0].timestamp).getTime(),
          max: new Date(data[data.length - 1].timestamp).getTime(),
        },
      },
      height: '20%',
    },
    xaxis: {
      type: 'datetime',
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      tickAmount: 2,
    },
  };

  const series = [
    {
      name: 'Rainfall',
      data: data.map(({ timestamp, precipMM }) => [new Date(timestamp).getTime(), precipMM]),
    },
  ];

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactApexChart options={chartOptions} series={series} type="area" height="100%" />
      <ReactApexChart options={rangeSliderOptions} series={series} type="area" height="100%" />
    </div>
  );
};

export default RainfallChart;
