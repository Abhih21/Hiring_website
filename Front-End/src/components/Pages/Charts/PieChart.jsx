import React from "react";
import Chart from "react-apexcharts";

function PieChart({ series, labels, width, height }) {
  const options = {
    chart: {
      height: height,
      width: width,
      type: "pie",
    },
    labels: labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div id="chart">
      <Chart options={options} series={series} type="pie" width={width} />
    </div>
  );
}

export default PieChart;
