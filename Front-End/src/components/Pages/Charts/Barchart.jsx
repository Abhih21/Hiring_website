import Chart from "react-apexcharts";

function Barchart({
  className,
  seriesData,
  width,
  height,
  tiletext,
  categories = [],
  colors,
}) {
  return (
    <div className={className}>
      <Chart
        type="bar"
        width={width}
        height={height}
        series={seriesData}
        options={{
          title: {
            text: tiletext,
            style: { fontSize: 30 },
          },
          colors: colors,
          plotOptions: {
            bar: {
              columnWidth: "45%",
              distributed: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false,
          },
          theme: { mode: "light" },
          xaxis: {
            categories: categories,
            title: {
              text: "Category",
              style: { colors: "black", fontSize: 25, marginLeft: "20px" },
            },
          },
          yaxis: {
            labels: {
              style: { colors: "black", fontSize: 12, marginLeft: "20px" },
            },
          },
        }}
      />
    </div>
  );
}

export default Barchart;
