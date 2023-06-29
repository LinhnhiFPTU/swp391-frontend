import classNames from "classnames/bind";
import Chart from "react-apexcharts";
import { optionPieChartRevenue as options } from "./OptionsChart";
import styles from "./Chart.module.scss";

const cx = classNames.bind(styles);

const series = [42, 656, 117, 424];

function PieChartRevenue() {
  return (
    <div className={cx("pieChart")}>
      <Chart
        type="donut"
        width={"100%"}
        height={"100%"}
        series={series}
        options={options}
      />
    </div>
  );
}

export default PieChartRevenue;
