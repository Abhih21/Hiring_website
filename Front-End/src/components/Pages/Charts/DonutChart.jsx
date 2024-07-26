import React from "react";
import ApexCharts from "react-apexcharts";

const DonutChart = ({ series, labels, chartWidth }) => {
  const options = {
    chart: {
      type: "donut",
    },
    dataLabels: {
      enabled: true, // Enable data labels
      //   formatter: (val, opts) => {
      //     // Format label as percentage
      //     return `${val} (${opts.w.globals.labels[opts.seriesIndex]})`;
      //   },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "16px",
              fontFamily: "Helvetica, Arial",
              color: "#333",
              offsetY: 10,
            },
            value: {
              show: true,
              fontSize: "14px",
              fontFamily: "Helvetica, Arial",
              color: "#333",
              offsetY: -20,
            },
            total: {
              show: true,
              label: "Total",
              color: "#333",
              fontSize: "20px",
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "right",
      offsetY: 0,
      height: 230,
    },
    labels: labels || [],
  };

  return (
    <ApexCharts
      options={options}
      series={series}
      type="donut"
      width={chartWidth || 380}
    />
  );
};

export default DonutChart;
