import classNames from "classnames/bind";

import styles from "./ReportDetail.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function ReportDetail({ titleReport, backToReport, closeSubReport }) {
  const [reportContent, setReportContent] = useState("");
  const [error, setError] = useState(false);

  const handleSendReport = (e) => {
    e.preventDefault();
    console.log(reportContent)
    if (reportContent === "") {
      setError(true);
    }else {
      setError(false)
    }
  };
  return (
    <div className={cx("overlay")}>
      <div className={cx("report-popup")}>
        <div className={cx("report_container")}>
          <div className={cx("report_header")}>
            <i
              className={cx("fa-sharp fa-light fa-arrow-left", "back-icon")}
              onClick={() => backToReport(false)}
            ></i>
            <span className={cx("report_reason_title")}>{titleReport}</span>
            <i
              className={cx("fa-light fa-xmark", "x-icon-multi")}
              onClick={() => closeSubReport(false)}
            ></i>
          </div>
          <div className={cx("report_content")}>
            <textarea
              className={error ? cx("report_input-error") : cx("report_input")}
              placeholder="Report Description (10-50 character allowed)"
              spellCheck={false}
              onChange={(e) => setReportContent(e.target.value)}
            ></textarea>
            {error && (
              <div className={cx("error")}>
                Description for this reason should have 10 - 50 characters
              </div>
            )}
          </div>
          <div className={cx("report_send-report")}>
            <button
              className={cx("send_report")}
              onClick={(e) => handleSendReport(e)}
            >
              Send Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportDetail;