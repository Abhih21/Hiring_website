import React from "react";
import ReactApexChart from "react-apexcharts";

const Chart = ({ series, labels }) => {
  const options = {
    chart: {
      type: "pie",
      height: 350,
    },
    labels: labels,
    tooltip: {
      y: {
        formatter: function (val) {
          return `${val} applications`;
        },
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "right",
    },
  };

  return (
    <ReactApexChart options={options} series={series} type="pie" height={350} />
  );
};

export default Chart;
