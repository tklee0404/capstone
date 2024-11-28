import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';

const SingleAreaChart = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
        type: "bar",
        height: 400,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      series: [
        {
          name: "Investment",
          data: [25000, 39000, 65000, 45000, 79000, 80000, 69000, 63000, 60000, 66000, 90000, 78000]
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30px"
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      colors: ["oklch(var(--p))", "oklch(var(--b1))"],
      xaxis: {
        categories: [
          "Cook",
          "Erin",
          "Jack",
          "Will",
          "Gayle",
          "Megan",
          "John",
          "Luke",
          "Ellis",
          "Mason",
          "Elvis",
          "Liam"
        ],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: "oklch(var(--bc) / 0.9)",
            fontSize: "12px",
            fontWeight: 400
          }
        }
      },
      yaxis: {
        labels: {
          align: "left",
          minWidth: 0,
          maxWidth: 140,
          style: {
            colors: "oklch(var(--bc) / 0.9)",
            fontSize: "12px",
            fontWeight: 400
          },
          formatter: value => (value >= 1000 ? `${value / 1000}k` : value)
        }
      },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 0.9
          }
        }
      },
      tooltip: {
        y: {
          formatter: value => `$${value >= 1000 ? `${value / 1000}k` : value}`
        },
        custom: function (props) {
          const { categories } = props.ctx.opts.xaxis
          const { dataPointIndex } = props
          const title = categories[dataPointIndex]
          const newTitle = `${title}`

          return buildTooltip(props, {
            title: newTitle,
            mode,
            hasTextLabel: true,
            wrapperExtClasses: "min-w-28",
            labelDivider: ":",
            labelExtClasses: "ms-2"
          })
        }
      },
      responsive: [
        {
          breakpoint: 568,
          options: {
            chart: {
              height: 300
            },
            plotOptions: {
              bar: {
                columnWidth: "10px"
              }
            },
            stroke: {
              width: 8
            },
            labels: {
              style: {
                colors: 'oklch(var(--bc) / 0.9)',
                fontSize: "10px"
              },
              formatter: title => title.slice(0, 3)
            },
            yaxis: {
              labels: {
                align: "left",
                minWidth: 0,
                maxWidth: 140,
                style: {
                  colors: 'oklch(var(--bc) / 0.9)',
                  fontSize: "10px"
                },
                formatter: value => (value >= 1000 ? `${value / 1000}k` : value)
            },
          },
        },
      },
    ],
  });

  useEffect(() => {
    // You can place additional initialization logic here if needed
  }, []);

  return (
    <div id="apex-column-bar-chart" class="w-full">
      <ApexCharts options={chartOptions} series={chartOptions.series} type="area" height={400} />
    </div>
  );
};

export default SingleAreaChart;
