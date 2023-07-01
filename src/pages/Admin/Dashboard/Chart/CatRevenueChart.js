import React from "react";
import ReactApexChart from "react-apexcharts";

const series = [
  {
    name: "PRODUCT A",
    data: [44, 55, 41, 67, 22, 43, 65, 43, 13, 41, 51, 12, 15, 36],
  },
  {
    name: "PRODUCT B",
    data: [13, 23, 20, 8, 13, 27, 65, 43, 13, 41, 51, 12, 15, 36],
  },
  {
    name: "PRODUCT C",
    data: [11, 17, 15, 15, 21, 14, 65, 43, 13, 41, 51, 12, 15, 36],
  },
  {
    name: "PRODUCT D",
    data: [21, 7, 25, 13, 22, 8, 65, 43, 13, 41, 51, 12, 15, 36],
  },
];

const options = {
  chart: {
    type: "bar",
    width: "50%",
    height: 500,
    stacked: true,
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: "13px",
            fontWeight: 900,
          },
        },
      },
    },
  },
  xaxis: {
    type: "datetime",
    categories: [
      "01/01/2011 GMT",
      "01/02/2011 GMT",
      "01/03/2011 GMT",
      "01/04/2011 GMT",
      "01/05/2011 GMT",
      "01/06/2011 GMT",
      "01/07/2011 GMT",
      "01/08/2011 GMT",
      "01/09/2011 GMT",
      "01/10/2011 GMT",
      "01/11/2011 GMT",
      "01/12/2011 GMT",
      "01/13/2011 GMT",
      "01/14/2011 GMT",
    ],
  },
  legend: {
    position: "right",
    offsetY: 40,
  },
  fill: {
    opacity: 1,
  },
};
function CatRevenueChart() {
  return (
    <>
      <ReactApexChart
        type="bar"
        width={"100%"}
        height={"100%"}
        series={series}
        options={options}
      />
    </>
  );
}

export default CatRevenueChart;
