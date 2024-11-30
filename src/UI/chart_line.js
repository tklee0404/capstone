import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';
import fetch_analysis from "../apiService/fetch_analysis";

export default function CardExample() {
  const [chartOptions, setChartOptions] = useState(null); // 初始化为空

  const token = localStorage.getItem("token");
  const [analysisData, setAnalysisData] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      if (token) {
        const fetchedData = await fetch_analysis(token);
        setAnalysisData(fetchedData);
      }
    };
    getInfo();
  }, [token]);

  useEffect(() => {
    if (analysisData.length > 0) {
      // 提取 assists 和对应的 categories
      const assistsData = analysisData.map((item) => item.assists);
      const categories = analysisData.map((item) => `Round ${item.round_num}`); // 或者用 opponent

      // 更新图表配置
      setChartOptions({
        chart: {
          height: 400,
          type: 'area',
        },
        series: [
          {
            name: 'Assists', // 图表系列名称
            data: assistsData, // 助攻数据
          },
        ],
        xaxis: {
          categories, // 横轴分类
        },
      });
    }
  }, [analysisData]); // 当 analysisData 更新时重新计算图表
  if (!chartOptions) {
    return <div>Loading chart...</div>; // 避免未初始化时渲染
  }

  return (
    <ApexCharts
      options={chartOptions}
      series={chartOptions.series}
      type="area"
      height={400}
    />
    
  );
}
