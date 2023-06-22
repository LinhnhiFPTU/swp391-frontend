import classNames from "classnames/bind";
import { useState } from "react";

import styles from "./Table.module.scss";
import EditProduct from "../EditProduct/EditProduct";
import NoProduct from "../NoProduct";

const cx = classNames.bind(styles);



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

function Table({ products}) {
  const [showEdit, setShowEdit] = useState(false);
  const [productEdit, setProductEdit] = useState();

  const handleEditProduct = (product) => {
    setShowEdit(true);
    setProductEdit(product);
  };

  if (!products || products.length === 0) {
    return <NoProduct />;
  }
  return (
    <>
      {showEdit && (
        <EditProduct product={productEdit} setShowEdit={setShowEdit} />
      )}
      <div className={cx("table_data")}>
        <div className={cx("table-head")}>
          <div className={cx("head-product")}>Product</div>
          <div className={cx("head-price")}>Price</div>
          <div className={cx("head-quantity")}>Quantity</div>
          <div className={cx("head-status")}>Status</div>
          <div className={cx("head-edit")}>Edit</div>
          <div className={cx("head-delete")}>Delete</div>
        </div>
        <div className={cx("table-content")}>
          {products.map((product) => (
            <div className={cx("table-body")} key={product.productId}>
              <div className={cx("body-text", "body-product")}>
                <img
                  src={product.listImage[0]}
                  alt="product-img"
                  className={cx("product-img")}
                />
                <div className={cx("product-name")}>{product.productName}</div>
              </div>
              <div className={cx("body-text", "body-price")}>
                ${product.productPrice}
              </div>
              <div className={cx("body-text", "body-quantity")}>
                {product.productQuantity}
              </div>
              <div className={cx("body-text", "body-status")}>
                <div
                  className={cx("inside-status")}
                  style={statusStyle(product.productStatus)}
                >
                  {product.productStatus}
                </div>
              </div>
              <div className={cx("body-text", "body-edit")}>
                <button
                  className={cx("edit-btn")}
                  onClick={() => handleEditProduct(product)}
                >
                  <i
                    className={cx("fa-regular fa-pen-to-square", "edit-icon")}
                  ></i>
                </button>
              </div>
              <div className={cx("body-text", "body-delete")}>
                <button className={cx("delete-btn")}>
                  <i className={cx("fa-regular fa-trash", "delete-icon")}></i>
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

export default Table;
