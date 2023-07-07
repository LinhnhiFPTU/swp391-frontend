import ReactApexChart from 'react-apexcharts';

const options = {
  chart: {
    id: 'basic-area'
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  fill: {
    colors: ['#CC0000']
  },
  stroke: {
    curve: 'smooth',
    colors: ['#FF0000'] 
  },
  dataLabels: {
    enabled: false 
  }
};

const series = [{
  name: 'series-1',
  data: [30, 40, 35, 50, 70, 91, 125]
}];
function RevenueChart() {
  return (
    <div>
      <ReactApexChart options={options} series={series} type="area" height={400} />
    </div>
  );
}

export default RevenueChart;
