import React from "react";
import ReactApexChart from "react-apexcharts";

const JobChart = ({ series, categories }) => {
  const options = {
    chart: {
      type: "line",
      height: 350,
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
    markers: {
      size: 5,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={400}
    />
  );
};

export default JobChart;
