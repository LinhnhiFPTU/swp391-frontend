import classNames from "classnames/bind";

import styles from "./OrderDetails.module.scss";

const cx = classNames.bind(styles);

function OrderDetails({ setOpenListDetail }) {
  return (
    <div className={cx("overlay")}>
      <div className={cx("order-details-popup")}>
        <div className={cx("order-detail-header")}>
          <div className={cx("header")}>
            <div className={cx("title")}>Order</div>
            <div className={cx("orderId")}>#1234567</div>
          </div>
          <div className={cx("close")}>
            <button
              className={cx("close-btn")}
              onClick={() => setOpenListDetail(false)}
            >
              <i className={cx("fa-regular fa-xmark")}></i>
            </button>
          </div>
        </div>
        <div className={cx("order-detail-container")}>
          <div className={cx("user-information")}>
            <div className={cx("detail-user")}>
              <div className={cx("user-info")}>
                <div className={cx("user-name")}>eelvuxx</div>
                <div className={cx("phone-number")}>0123456789</div>
              </div>
              <div className={cx("contact-user")}>
                <button className={cx("chat-btn")}>Chat</button>
              </div>
            </div>
            <div className={cx("shipping-detail")}>
              <div className={cx("left")}>
                <div className={cx("shipping-to")}>Shipping to: </div>
                <div className={cx("shipping-address")}>
                  100, Phường 9, TP Đà Lạt, Lâm Đồng
                </div>
              </div>
              <div className={cx("shipping-fee")}>$20</div>
            </div>
          </div>
          <div className={cx("order-detail_list")}>
            <div className={cx("order-detail")}>
              <img
                src="https://salt.tikicdn.com/cache/750x750/ts/product/d6/b6/f9/8d0af23baac2d0b5130ea3595f964cfe.jpg.webp"
                alt="img-detail"
                className={cx("img-detail")}
              />
              <div className={cx("product-info")}>
                <div className={cx("left")}>
                  <div className={cx("product-name")}>
                    Pet Birds Feeder Food Water Feeding Box For Small Medium Large
                    Birds Parrots
                  </div>
                  <div className={cx("product-quantity")}>x2</div>
                </div>
                <div className={cx("right")}>
                  <div className={cx("price")}>$1000</div>
                </div>
              </div>
            </div>
            <div className={cx("order-detail")}>
              <img
                src="https://salt.tikicdn.com/cache/750x750/ts/product/d6/b6/f9/8d0af23baac2d0b5130ea3595f964cfe.jpg.webp"
                alt="img-detail"
                className={cx("img-detail")}
              />
              <div className={cx("product-info")}>
                <div className={cx("left")}>
                  <div className={cx("product-name")}>
                    Pet Birds Feeder Food Water Feeding Box For Small Medium Large
                    Birds Parrots
                  </div>
                  <div className={cx("product-quantity")}>x2</div>
                </div>
                <div className={cx("right")}>
                  <div className={cx("price")}>$1000</div>
                </div>
              </div>
            </div><div className={cx("order-detail")}>
              <img
                src="https://salt.tikicdn.com/cache/750x750/ts/product/d6/b6/f9/8d0af23baac2d0b5130ea3595f964cfe.jpg.webp"
                alt="img-detail"
                className={cx("img-detail")}
              />
              <div className={cx("product-info")}>
                <div className={cx("left")}>
                  <div className={cx("product-name")}>
                    Pet Birds Feeder Food Water Feeding Box For Small Medium Large
                    Birds Parrots
                  </div>
                  <div className={cx("product-quantity")}>x2</div>
                </div>
                <div className={cx("right")}>
                  <div className={cx("price")}>$1000</div>
                </div>
              </div>
            </div>
            <div className={cx("order-detail")}>
              <img
                src="https://salt.tikicdn.com/cache/750x750/ts/product/d6/b6/f9/8d0af23baac2d0b5130ea3595f964cfe.jpg.webp"
                alt="img-detail"
                className={cx("img-detail")}
              />
              <div className={cx("product-info")}>
                <div className={cx("left")}>
                  <div className={cx("product-name")}>
                    Pet Birds Feeder Food Water Feeding Box For Small Medium Large
                    Birds Parrots
                  </div>
                  <div className={cx("product-quantity")}>x2</div>
                </div>
                <div className={cx("right")}>
                  <div className={cx("price")}>$1000</div>
                </div>
              </div>
            </div>
            <div className={cx("order-detail")}>
              <img
                src="https://salt.tikicdn.com/cache/750x750/ts/product/d6/b6/f9/8d0af23baac2d0b5130ea3595f964cfe.jpg.webp"
                alt="img-detail"
                className={cx("img-detail")}
              />
              <div className={cx("product-info")}>
                <div className={cx("left")}>
                  <div className={cx("product-name")}>
                    Pet Birds Feeder Food Water Feeding Box For Small Medium Large
                    Birds Parrots
                  </div>
                  <div className={cx("product-quantity")}>x2</div>
                </div>
                <div className={cx("right")}>
                  <div className={cx("price")}>$1000</div>
                </div>
              </div>
            </div>
            <div className={cx("order-detail")}>
              <img
                src="https://salt.tikicdn.com/cache/750x750/ts/product/d6/b6/f9/8d0af23baac2d0b5130ea3595f964cfe.jpg.webp"
                alt="img-detail"
                className={cx("img-detail")}
              />
              <div className={cx("product-info")}>
                <div className={cx("left")}>
                  <div className={cx("product-name")}>
                    Pet Birds Feeder Food Water Feeding Box For Small Medium Large
                    Birds Parrots
                  </div>
                  <div className={cx("product-quantity")}>x2</div>
                </div>
                <div className={cx("right")}>
                  <div className={cx("price")}>$1000</div>
                </div>
              </div>
            </div>
            <div className={cx("order-detail")}>
              <img
                src="https://salt.tikicdn.com/cache/750x750/ts/product/d6/b6/f9/8d0af23baac2d0b5130ea3595f964cfe.jpg.webp"
                alt="img-detail"
                className={cx("img-detail")}
              />
              <div className={cx("product-info")}>
                <div className={cx("left")}>
                  <div className={cx("product-name")}>
                    Pet Birds Feeder Food Water Feeding Box For Small Medium Large
                    Birds Parrots
                  </div>
                  <div className={cx("product-quantity")}>x2</div>
                </div>
                <div className={cx("right")}>
                  <div className={cx("price")}>$1000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
