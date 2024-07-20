
import Chart from 'react-apexcharts';

const SemiDonutChart = () => {
  const options = {
    chart: {
      type: 'donut',
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10
      }
    },
    grid: {
      padding: {
        bottom: -80
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  const series = [44, 55, 41, 17, 15];

  return (
    <div id="chart" className=''>
      <Chart options={options} series={series} type="donut" height={350} />
    </div>
  );
};

export default SemiDonutChart;
