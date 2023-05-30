import classNames from "classnames/bind";

import styles from "./Report.module.scss";

const cx = classNames.bind(styles);

const reports = [
  "Prohibited products (wild animals, 18+, ...)",
  "Fake product",
  "Products of unknown origin",
  "Products with signs of fraud",
  "Product image is not clear",
  "Other"
];
function Report() {
  return (
    <div className={cx("overlay")}>
      <div className={cx("report-popup")}>
        <div className={cx("report_container")}>
          <div className={cx("report_header")}>
            <span className={cx("report_reason")}>Select a Reason</span>
            <i className={cx("fa-light fa-xmark")}></i>
          </div>
          <ul className={cx("report_list")}>
            {reports.map((report, index) => (
              <li key={index}>{report}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Report;
