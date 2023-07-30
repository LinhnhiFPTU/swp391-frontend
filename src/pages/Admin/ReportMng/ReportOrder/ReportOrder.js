import classNames from "classnames/bind";
import OrderDetail from "./OrderDetail";
import styles from "./ReportOrder.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function ReportOrder() {
  const [open, setOpen] = useState(false);
  const [reports, setReport] = useState([]);
  const [showOrder, setShowOrder] = useState();

  useEffect(() => {
    axios
      .get("/api/v1/admin/management/report/order")
      .then((res) => {
        setReport(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      {open && <OrderDetail closePopup={setOpen} order={showOrder} />}
      <div className={cx("report-product")}>
        <div className={cx("report-header")}>
          <div className={cx("order")}>Order</div>
          <div className={cx("user")}>User</div>
          <div className={cx("desc")}>Description</div>
          <div className={cx("shipping")}>Shipping Unit</div>
          <div className={cx("actions")}>Actions</div>
        </div>
        <div className={cx("report-list")}>
          {reports.map((pr, prId) => (
            <div className={cx("report-item")}>
              <div className={cx("rp-order")}>
                <div className={cx("text")}>#{pr.order.id}</div>
              </div>
              <div className={cx("rp-user")}>
                <img
                  src={pr.reporter.imageurl}
                  alt="avatar-user"
                  className={cx("avatar-user")}
                />
                <div className={cx("user-name")}>
                  {pr.reporter.firstname + " " + pr.reporter.lastname}
                </div>
              </div>
              <div
                className={cx("rp-desc")}
                onClick={() => {
                  setOpen(true);
                  setShowOrder(pr.order);
                }}
              >
                <img
                  src={pr.order.orderDetails[0].product.images[0].url}
                  alt="product-img"
                  className={cx("product-img")}
                />
                <div className={cx("product-name")}>
                  {pr.order.orderDetails[0].product.name}
                </div>
              </div>
              <div className={cx("ship-unit")}>GHN</div>
              <div className={cx("rp-actions")}>
                <button
                  className={cx("ban-btn")}
                  // onClick={(e) => handleBanProduct(e, pr)}
                >
                  <i className={cx("fa-regular fa-ban", "ban-icon")}></i>
                </button>
                <button
                  className={cx("notify-btn")}
                  // onClick={(e) => handleWarningProduct(e, pr)}
                >
                  <i
                    className={cx(
                      "fa-regular fa-triangle-exclamation",
                      "notify-icon"
                    )}
                  ></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={cx("prev-next")}>
          <button className={cx("icon-left")}>
            <i className={cx("fa-light fa-angle-left")}></i>
          </button>
          <button className={cx("icon-right")}>
            <i className={cx("fa-light fa-angle-right")}></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default ReportOrder;
