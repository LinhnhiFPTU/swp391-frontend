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

function FeedbackChart() {
  const labels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Today",
        data: [24, 12, 43, 54, 21, 12, 6],
        backgroundColor: "transparent",
        fill: false,
        borderColor: "#30E3CD",
        borderWidth: 2,
        pointStyle: "circle",
        pointBackgroundColor: "#30E3CD",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: "Yesterday",
        data: [12, 41, 7, 24, 34, 76, 3],
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
              label += new Intl.NumberFormat("en-US").format(context.parsed.y);
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
        },
      },
    },
  };
  return <Line data={data} options={options}></Line>;
}

export default FeedbackChart;
