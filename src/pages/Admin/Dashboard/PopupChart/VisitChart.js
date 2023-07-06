import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";


function VisitChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setData((prevData) => {
                const newData = [...prevData];
                newData.push({
                    x: new Date().getTime(),
                    y: Math.floor(Math.random() * 100) + 1,
                });
                return newData;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const series = [
        {
            name: "Realtime Data",
            data: data,
        },
    ];

    const options = {
        chart: {
            id: "realtime",
            animations: {
                enabled: true,
                easing: "linear",
                dynamicAnimation: {
                    speed: 1000,
                },
            },
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            type: "datetime",
            range: 60000,
        },
        yaxis: {
            max: 100,
        },
    };
    return (
        <div>
            <Chart options={options} series={series} type="line" height={500} />
        </div>
    )
}

export default VisitChart