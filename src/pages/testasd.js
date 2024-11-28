import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';

const MyChart = () => {
  // 初始化图表的配置和数据
  const [chartOptions, setChartOptions] = useState({
    chart: {
      id: 'basic-bar', // 设置图表 ID
    },
    xaxis: {
      categories: ['A', 'B', 'C', 'D'],
    },
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: 'series-1',
      data: [10, 20, 30, 40],
    },
  ]);

  return (
    <div>
      <ApexCharts options={chartOptions} series={chartSeries} type="bar" height={350} />
    </div>
  );
};

export default MyChart;
