import classNames from "classnames/bind";

import styles from "./Chart.module.scss"

const cx = classNames.bind(styles)

function BarChart() {
  return (
    <div className={cx("barChart")}></div>
  );
}

export default BarChart;