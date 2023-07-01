import classNames from "classnames/bind";
import { optionBarChart } from "./OptionsChart";
import Chart from "react-apexcharts";
import styles from "./Chart.module.scss";

const cx = classNames.bind(styles);

const series = [
  {
    name: "Quantity",
    data: [124, 453, 658, 143, 657, 156, 756, 345, 786, 132, 654, 387],
  },
];

function BarChart() {
  return (
    <div className={cx("barChart")}>
      <Chart
        type="bar"
        width={"100%"}
        height={"100%"}
        series={series}
        options={optionBarChart}
      />
    </div>
  );
}

export default BarChart;
