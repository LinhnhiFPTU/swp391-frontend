import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";
import NavBar from "./NavBar";

import styles from "./Purchase.module.scss";

const cx = classNames.bind(styles);

const orders = [
  {
    shop: {
      id: 1,
      name: "Baboon’s Toys Shop",
    },
    status: "Completed",
    total: 2400,
    product: [
      {
        pid: 1,
        pimage:
          "https://salt.tikicdn.com/cache/750x750/ts/product/d6/b6/f9/8d0af23baac2d0b5130ea3595f964cfe.jpg.webp",
        pname:
          "Pet Birds Feeder Food Water Feeding Box For Small Medium Large Birds Parrots",
        pquantity: 2,
        pprice: 1200,
      },
    ],
  },
  {
    shop: {
      id: 1,
      name: "Baboon’s Toys Shop",
    },
    status: "Canceled",
    total: 2400,
    product: [
      {
        pid: 1,
        pimage:
          "https://salt.tikicdn.com/cache/750x750/ts/product/d6/b6/f9/8d0af23baac2d0b5130ea3595f964cfe.jpg.webp",
        pname:
          "Pet Birds Feeder Food Water Feeding Box For Small Medium Large Birds Parrots",
        pquantity: 2,
        pprice: 1200,
      },
    ],
  },
  {
    shop: {
      id: 1,
      name: "Baboon’s Toys Shop",
    },
    status: "Pending",
    total: 2400,
    product: [
      {
        pid: 1,
        pimage:
          "https://salt.tikicdn.com/cache/750x750/ts/product/d6/b6/f9/8d0af23baac2d0b5130ea3595f964cfe.jpg.webp",
        pname:
          "Pet Birds Feeder Food Water Feeding Box For Small Medium Large Birds Parrots",
        pquantity: 2,
        pprice: 1200,
      },
    ],
  },
  {
    shop: {
      id: 1,
      name: "Baboon’s Toys Shop",
    },
    status: "Shipping",
    total: 2400,
    product: [
      {
        pid: 1,
        pimage:
          "https://salt.tikicdn.com/cache/750x750/ts/product/d6/b6/f9/8d0af23baac2d0b5130ea3595f964cfe.jpg.webp",
        pname:
          "Pet Birds Feeder Food Water Feeding Box For Small Medium Large Birds Parrots",
        pquantity: 2,
        pprice: 1200,
      },
    ],
  },
];

const styleStatus = (status) => {
  if (status === "Completed") {
    return {
      color: "var(--primary)",
    };
  } else if (status === "Canceled") {
    return {
      color: "#ff1616",
    };
  } else if (status === "Pending") {
    return {
      color: "#feb019",
    };
  } else {
    return {
      color: "#008ffb",
    };
  }
};

function Purchase() {
  return (
    <>
      <Header />
      <div className={cx("purchase_wrapper")}>
        <div className={cx("purchase_container")}>
          <NavBar />
          {orders.map((order, index) => (
            <div className={cx("purchase_item")} key={index}>
              <div className={cx("purchase_item-info")}>
                <div className={cx("purchase_item-header")}>
                  <div className={cx("shop-name")}>{order.shop.name}</div>
                  <div
                    className={cx("status")}
                    style={styleStatus(order.status)}
                  >
                    {order.status.toUpperCase()}
                  </div>
                </div>
                {order.product.map((item) => (
                  <div className={cx("purchase_item-detail")} key={item.pid}>
                    <div className={cx("content")}>
                      <img
                        src={item.pimage}
                        alt="product-img"
                        className={cx("product-img")}
                      />
                      <div className={cx("product-content")}>
                        <div className={cx("product-name")}>{item.pname}</div>
                        <div className={cx("quantity")}>x{item.pquantity}</div>
                      </div>
                    </div>
                    <div className={cx("price")}>${item.pprice}</div>
                  </div>
                ))}
              </div>
              <div className={cx("purchase_item_order-total")}>
                <div className={cx("order-total-detail")}>
                  <div className={cx("text")}>Order Total:</div>
                  <div className={cx("price")}>${order.total}</div>
                </div>
              </div>
              <div className={cx("purchase_item-options")}>
                <div className={cx("text")}>No rating received</div>
                <div className={cx("button")}>
                  {(order.status === "Completed" ||
                    order.status === "Canceled") && (
                      <Link to="/product" className={cx("buy-btn")}>Buy Again</Link>
                    )}
                  <button className={cx("contact-btn")}>Contact Seller</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Purchase;
