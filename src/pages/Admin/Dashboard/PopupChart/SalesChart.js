
import React from "react";
import Chart from "react-apexcharts";

function SalesChart() {
    const series = [
        {
            name: "Line 1",
            data: [30, 40, 35, 60, 70, 91],
        },
        {
            name: "Line 2",
            data: [23, 12, 54, 61, 32, 56,],
        },
    ];

    const options = {
        chart: {
            id: "basic-line",
        },
        stroke: {
            curve: 'smooth',
        },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
    };
    return (
        <Chart options={options} series={series} type="line" height={500} />
    )
}

export default SalesChart