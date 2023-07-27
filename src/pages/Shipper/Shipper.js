import classNames from "classnames/bind";

import styles from "./Shipper.module.scss";

import HeaderShipper from "./HeaderShipper";

const cx = classNames.bind(styles);

function Shipper() {
  return (
    <>
      <HeaderShipper />
      <div className={cx("shipper_container")}>
        <div className={cx("shipper_content")}>
          <div className={cx("order_search")}>
            <div className={cx("type-search")}>Order code</div>
            <form className={cx("form-search")}>
              <div className={cx("search-input")}>
                <input
                  type="text"
                  placeholder="Code"
                  spellCheck={false}
                  className={cx("input")}
                />
                <i
                  className={cx("fa-light fa-magnifying-glass", "search-icon")}
                ></i>
              </div>
              <button type="submit" className={cx("search-btn")}>
                Search
              </button>
            </form>
          </div>
          <div className={cx("order_result")}>
            <div className={cx("result")}>
              <div className={cx("order-code")}>#1234456</div>
              <div className={cx("order-detail")}>
                <div className={cx("product-detail")}>
                  <img
                    src="https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg"
                    alt="product-img"
                    className={cx("product-img")}
                  />
                  <div className={cx("product-info")}>
                    <div className={cx("name")}>
                      Prevue Pet Products Travel Carrier for Birds, Black
                    </div>
                    <div className={cx("quantity")}>x2</div>
                    <div className={cx("price")}>2000$</div>
                  </div>
                </div>
                <div className={cx("user-detail")}>
                  <div className={cx("user-info")}>
                    <div className={cx("username")}>Le Vu Dinh Duy</div>
                    <div className={cx("phone")}>0123456789</div>
                    <div className={cx("address")}>
                      S305 Vinhomes Grand Park, 9 District
                    </div>
                  </div>
                </div>
                <div className={cx("action")}>
                  <div className={cx("action-btn")}>
                    <div className={cx("approve")}>
                      <button className={cx("approve-btn")}>
                        Successful delivery
                      </button>
                    </div>
                    <div className={cx("reject")}>
                      <button className={cx("reject-btn")}>Unsuccessful delivery</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shipper;
