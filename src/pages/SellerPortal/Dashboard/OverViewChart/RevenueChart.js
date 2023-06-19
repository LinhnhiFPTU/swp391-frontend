import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

function RevenueChart() {
  const labels = ["00:00", "06:00", "12:00", "18:00", "23:59"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Today",
        data: [1245, 5236, 3514, 2415, 7568],
        backgroundColor: "transparent",
        fill: false,
        borderColor: "#30D003",
        borderWidth: 2,
        pointStyle: "circle",
        pointBackgroundColor: "#30D003",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: "Yesterday",
        data: [2352, 1231, 5567, 8908, 1241],
        backgroundColor: "transparent",
        fill: false,
        borderColor: "#C9CBCF",
        borderWidth: 2,
        pointStyle: "circle",
        pointBackgroundColor: "#C9CBCF",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        display: true,
        labels: {
          font: {
            size: 15,
            weight: "bold",
          },
          boxWidth: 50,
          boxHeight: 0,
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 14,
          },
        },
      },
      y: {
        grid: {
          color: "#f1f1f1",
        },
        ticks: {
          color: "#999",
          font: {
            size: 13,
            weight: "bold",
          },

          callback: (value) => "$" + value,
        },
      },
    },
  };
  return <Line data={data} options={options}></Line>;
}

export default RevenueChart;
