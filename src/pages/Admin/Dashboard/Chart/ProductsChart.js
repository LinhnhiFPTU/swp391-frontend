import React from 'react'
import Chart from 'react-apexcharts'

var options = {
  labels: ['Bird', 'Bird Cage', 'Bird Food', 'Bird Accessories'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom',
        horizontalAlign: "center",
      }
    }
  }]
  };

function ProductsChart() {
  return (
    <div>
        <Chart 
        type='pie'
        series={[281,166,181,251]}
        options={options} />
    </div>
  )
}

export default ProductsChart
