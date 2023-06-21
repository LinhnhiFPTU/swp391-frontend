import classNames from "classnames/bind";

import styles from "./Table.module.scss";
import {useEffect, useState} from "react";
import axios from "axios";

const cx = classNames.bind(styles);

const statusStyle = (status) => {
  if (status === "Active") {
    return {
      backgroundColor: "#EBF9F4",
      color: "#39B588",
    };
  } else if (status === "Ban") {
    return {
      backgroundColor: "#FDF4F6",
      color: "#E36482",
    };
  } else if (status === "Sold out") {
    return {
      backgroundColor: "#FFF7E6",
      color: "#FFB619",
    };
  }
};

function Table({products}) {

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
      {products.map((product) => {
        let status = "Active"
        if (product.ban) status = "Ban"
        if (product.available === 0) status = "Sold out"

        return <div className={cx("table-body")} key={product.id}>
          <div className={cx("body-text", "body-product")}>
            <img
                src={product.images[0].url}
                alt="product-img"
                className={cx("product-img")}
            />
            <div className={cx("product-name")}>{product.name}</div>
          </div>
          <div className={cx("body-text", "body-price")}>${product.price}</div>
          <div className={cx("body-text", "body-quantity")}>
            {product.available}
          </div>
          <div className={cx("body-text", "body-status")}>
            <div
                className={cx("inside-status")}
                style={statusStyle(status)}
            >
              {status}
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
      })}
      <div className={"more-page"}>
        
      </div>
    </div>
  );
}

export default Table;
