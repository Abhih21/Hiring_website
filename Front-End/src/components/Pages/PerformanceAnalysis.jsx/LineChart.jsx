import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = ({ series, categories }) => {
  const options = {
    chart: {
      type: "line",
      height: 350,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: categories,
    },
    yaxis: {
      title: {
        text: "Days",
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `${val} days`;
        },
      },
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={350}
    />
  );
};

export default LineChart;
