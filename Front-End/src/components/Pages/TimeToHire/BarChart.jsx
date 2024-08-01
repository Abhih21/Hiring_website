import React from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = ({ series, categories }) => {
  const options = {
    chart: {
      type: "bar",
      height: 450,
      width: 960,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 2,
      },
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
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    colors: ["#1E90FF", "#32CD32", "#FFA500"], // Colors for each series
  };

  return (
    <ReactApexChart options={options} series={series} type="bar" height={450} />
  );
};

export default BarChart;
