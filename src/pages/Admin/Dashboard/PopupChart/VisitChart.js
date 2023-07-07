import Chart from "react-apexcharts";


function VisitChart() {
    const series = [
        {
            name: "Line 1",
            data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
        {
            name: "Line 2",
            data: [23, 12, 54, 61, 32, 56, 81, 19],
        },
    ];

    const options = {
        chart: {
            id: "basic-line",
        },
        legend: {
            position: "bottom",
            horizontalAlign: "center",
            fontSize: "14px",
            markers: {
                width: 12,
                height: 12,
            },
            offsetY: 10,
            itemMargin: {
                horizontal: 10,
                vertical: 5,
            },
        },
        stroke: {
            curve: 'smooth',
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        },
    };
    return (
        <Chart options={options} series={series} type="line" height={500} />
    )
}

export default VisitChart