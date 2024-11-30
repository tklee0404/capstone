import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';
import fetch_analysis from "../apiService/fetch_analysis";

export default function CardExample({ name }) {
  const token = localStorage.getItem("token");
  const [analysisData, setAnalysisData] = useState([]);

  // 获取数据并设置状态
  useEffect(() => {
    const getInfo = async () => {
      if (token) {
        const fetchedData = await fetch_analysis(token);
        setAnalysisData(fetchedData);
      }
    };
    getInfo();
  }, [token]);

  const [chartOptions, setChartOptions] = useState({
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: [], // 用于存放轮次或对手信息
    },
  });

  const [chartSeries, setChartSeries] = useState([
    { name: 'Shots Blocked', data: [] },
    { name: 'Shots in PA', data: [] },
    { name: 'Shots on Target', data: [] },
    { name: 'Shots out of PA', data: [] },
    { name: 'Shots out of Bounds', data: [] },
    { name: 'passes_backward', data: [] },
    { name: 'passes_critical', data: [] },
    { name: 'passes_crosses', data: [] },
    { name: 'passes_forward', data: [] },
    { name: 'passes_horizontal', data: [] },
    { name: 'passes_in_attack_area', data: [] },
    { name: 'passes_in_defense_area', data: [] },
    { name: 'passes_in_middle_area', data: [] },
    { name: 'passes_long_range', data: [] },
    { name: 'passes_middle_range', data: [] },
    { name: 'passes_short_range', data: [] },
    { name: 'tackles', data: [] },
  ]);

  // 当 analysisData 更新时，更新图表数据
  useEffect(() => {
    if (analysisData.length > 0) {
      const categories = analysisData.map(item => `Round ${item.round_num}`); // 或者使用 opponent 作为横轴
      const shotsBlockedData = analysisData.map(item => item.shots_blocked);
      const shotsInPAData = analysisData.map(item => item.shots_in_PA);
      const shotsOnTargetData = analysisData.map(item => item.shots_on_target);
      const shotsOutPAData = analysisData.map(item => item.shots_out_PA);
      const shotsOutOfBoundsData = analysisData.map(item => item.shots_out_of_bounds);
      const passesbackward = analysisData.map(item => item.passes_backward);
      const passesCriticalData = analysisData.map(item => item.passes_critical);
      const passesCrossesData = analysisData.map(item => item.passes_crosses);
      const passesForwardData = analysisData.map(item => item.passes_forward);
      const passesHorizontalData = analysisData.map(item => item.passes_horizontal);
      const passesInAttackAreaData = analysisData.map(item => item.passes_in_attack_area);
      const passesInDefenseAreaData = analysisData.map(item => item.passes_in_defense_area);
      const passesInMiddleAreaData = analysisData.map(item => item.passes_in_middle_area);
      const passesLongRangeData = analysisData.map(item => item.passes_long_range);
      const passesMiddleRangeData = analysisData.map(item => item.passes_middle_range);
      const passesShortRangeData = analysisData.map(item => item.passes_short_range);
      const tacklesData = analysisData.map(item => item.tackles);

      setChartOptions(prevOptions => ({
        ...prevOptions,
        xaxis: {
          categories,
        },
      }));

      // 动态选择与传入 name 对应的系列
      const selectedSeries = [
        { name: 'Shots Blocked', data: shotsBlockedData },
        { name: 'Shots in PA', data: shotsInPAData },
        { name: 'Shots on Target', data: shotsOnTargetData },
        { name: 'Shots out of PA', data: shotsOutPAData },
        { name: 'Shots out of Bounds', data: shotsOutOfBoundsData },
        { name: 'passes_backward', data: passesbackward },
        { name: 'passes_critical', data: passesCriticalData },
        { name: 'passes_crosses', data: passesCrossesData },
        { name: 'passes_forward', data: passesForwardData },
        { name: 'passes_horizontal', data: passesHorizontalData },
        { name: 'passes_in_attack_area', data: passesInAttackAreaData },
        { name: 'passes_in_defense_area', data: passesInDefenseAreaData },
        { name: 'passes_in_middle_area', data: passesInMiddleAreaData },
        { name: 'passes_long_range', data: passesLongRangeData },
        { name: 'passes_middle_range', data: passesMiddleRangeData },
        { name: 'passes_short_range', data: passesShortRangeData },
        { name: 'tackles', data: tacklesData }
      ].filter(series => series.name === name); // 只保留与传入 name 匹配的系列

      setChartSeries(selectedSeries);
    }
  }, [analysisData, name]); // 监听 analysisData 和 name 的变化并更新图表

  return (
    <div>
      <ApexCharts options={chartOptions} series={chartSeries} type="bar" height={350} />
    </div>
  );
}
