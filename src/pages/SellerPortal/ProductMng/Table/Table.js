import classNames from "classnames/bind";

import styles from "./Table.module.scss";

const cx = classNames.bind(styles);

const products = [
  {
    id: 0,
    image: "https://m.media-amazon.com/images/I/81cR4gm3+aL._AC_SL1500_.jpg",
    name: "Prevue Pet Products Travel Carrier for Birds, Black",
    price: 1200,
    quantity: 100,
    status: "Pending",
  },
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/81OfgffymML._AC_SL1500_.jpg",
    name: "Prevue Pet Products Travel Carrier for Birds, Black",
    price: 1200,
    quantity: 100,
    status: "Active",
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/61Dq2+9h7xL._AC_SL1081_.jpg",
    name: "Prevue Pet Products Travel Carrier for Birds, Black",
    price: 1200,
    quantity: 0,
    status: "Sold out",
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/71tMJsLvMSL._AC_SL1200_.jpg",
    name: "Prevue Pet Products Travel Carrier for Birds, Black",
    price: 1200,
    quantity: 100,
    status: "Band",
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/71XKmGkVUOL._AC_SL1500_.jpg",
    name: "Prevue Pet Products Travel Carrier for Birds, Black",
    price: 1200,
    quantity: 100,
    status: "Pending",
  },
];

const statusStyle = (status) => {
  if (status === "Active") {
    return {
      backgroundColor: "#EBF9F4",
      color: "#39B588",
    };
  } else if (status === "Band") {
    return {
      backgroundColor: "#FDF4F6",
      color: "#E36482",
    };
  } else if (status === "Sold out") {
    return {
      backgroundColor: "#FFF7E6",
      color: "#FFB619",
    };
  } else if (status === "Pending") {
    return {
      backgroundColor: "#F2F4F8",
      color: "#1B4780",
    };
  }
};

function Table() {
  return (
    <div className={cx("table_data")}>
      <div className={cx("table-head")}>
        <div className={cx("head-product")}>Product</div>
        <div className={cx("head-price")}>Price</div>
        <div className={cx("head-quantity")}>Quantity</div>
        <div className={cx("head-status")}>Status</div>
        <div className={cx("head-edit")}>Edit</div>
        <div className={cx("head-delete")}>Delete</div>
      </div>
      {products.map((product) => (
        <div className={cx("table-body")} key={product.id}>
          <div className={cx("body-text", "body-product")}>
            <img
              src={product.image}
              alt="product-img"
              className={cx("product-img")}
            />
            <div className={cx("product-name")}>{product.name}</div>
          </div>
          <div className={cx("body-text", "body-price")}>${product.price}</div>
          <div className={cx("body-text", "body-quantity")}>
            {product.quantity}
          </div>
          <div className={cx("body-text", "body-status")}>
            <div
              className={cx("inside-status")}
              style={statusStyle(product.status)}
            >
              {product.status}
            </div>
          </div>
          <div className={cx("body-text", "body-edit")}>
            <button className={cx("edit-btn")}>
              <i className={cx("fa-regular fa-pen-to-square", "edit-icon")}></i>
            </button>
          </div>
          <div className={cx("body-text", "body-delete")}>
            <button className={cx("delete-btn")}>
              <i className={cx("fa-regular fa-trash", "delete-icon")}></i>
            </button>
          </div>
        </div>
      ))}
      <div className={"more-page"}>
        
      </div>
    </div>
  );
}

export default Table;
