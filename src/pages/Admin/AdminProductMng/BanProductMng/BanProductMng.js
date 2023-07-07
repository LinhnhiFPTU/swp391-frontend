import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./BanProductMng.module.scss";

import bird from "~/assets/images/bird-cage.png";
import DataTable from "react-data-table-component";
import Sidebar from "../../global/Sidebar";
import NavBar from "../ProductMngNav";
import Topbar from "../../global/Topbar";

const cx = classNames.bind(styles);

const productRows = [
  {
    id: 1,
    img: bird,
    productName: "Bird Cage",
    shopName: "Louis Vuiton",
    address: "Ho Chi Minh",
    status: "Banned",
  },
  {
    id: 2,
    img: bird,
    productName: "Bird Cage",
    shopName: "Louis Vuiton",
    address: "Ho Chi Minh",
    status: "Banned",
  },
  {
    id: 3,
    img: bird,
    productName: "Bird Cage",
    shopName: "Louis Vuiton",
    address: "Ho Chi Minh",
    status: "Banned",
  },
  {
    id: 4,
    img: bird,
    productName: "Bird Cage",
    shopName: "Louis Vuiton",
    address: "Ho Chi Minh",
    status: "Banned",
  },
  {
    id: 5,
    img: bird,
    productName: "Bird Cage",
    shopName: "Louis Vuiton",
    address: "Ho Chi Minh",
    status: "Banned",
  },
  {
    id: 6,
    img: bird,
    productName: "Bird Cage",
    shopName: "Louis Vuiton",
    address: "Ho Chi Minh",
    status: "Banned",
  },
  {
    id: 7,
    img: bird,
    productName: "Bird Cage",
    shopName: "Louis Vuiton",
    address: "Ho Chi Minh",
    status: "Banned",
  },
  {
    id: 8,
    img: bird,
    productName: "Bird Cage",
    shopName: "Louis Vuiton",
    address: "Ho Chi Minh",
    status: "Banned",
  },
  {
    id: 9,
    img: bird,
    productName: "Bird Cage",
    shopName: "Louis Vuiton",
    address: "Ho Chi Minh",
    status: "Banned",
  },
  {
    id: 10,
    img: bird,
    productName: "Bird Cage",
    shopName: "Louis Vuiton",
    address: "Ho Chi Minh",
    status: "Banned",
  },
  {
    id: 11,
    img: bird,
    productName: "Bird Cage",
    shopName: "Louis Vuiton",
    address: "Ho Chi Minh",
    status: "Banned",
  },
];

const productColumns = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
    style: {
      fontsize: "16px",
    },
  },
  {
    name: "Image",
    // selector: (row) => row.avatar,
    // sortable: true,
    cell: (row) => (
      <div>
        <img className={cx("product-img")} src={row.img} alt="product-img" />
      </div>
    ),
  },
  {
    name: "Product Name",
    selector: (row) => row.productName,
    sortable: true,
  },
  {
    name: "Shop Name",
    selector: (row) => row.shopName,
  },
  {
    name: "Address",
    selector: (row) => row.address,
  },
  {
    name: "Status",
    cell: (row) => (
      <div>
        {row.status === "Banned" && (
          <p className={cx("banned-status")}>Banned</p>
        )}
      </div>
    ),
  },
  // {
  //   name: "Action",
  //   cell: (row) => (
  //     <div>
  //       {row.status === "Available" && (
  //         <button className={cx("ban_btn")} onClick={() => console.log(row)}>
  //           Ban
  //         </button>
  //       )}
  //       {row.status === "Banned" && (
  //         <button
  //           className={cx("recover_btn")}
  //           onClick={() => console.log(row)}
  //         >
  //           Recover
  //         </button>
  //       )}
  //     </div>
  //   ),
  // },
];

const customStyles = {
  header: {
    style: {
      fontsize: "16px",
    },
  },
  headRow: {
    style: {
      backgroundColor: "#f2f2f2",
    },
  },
  headCells: {
    style: {
      fontSize: "16px",
    },
  },
  rows: {
    style: {
      backgroundColor: "#fff",
    },
  },
  cells: {
    style: {
      padding: "10px",
      fontSize: "15px",
    },
  },
};

function BanProductMng() {
  const [records, setRecords] = useState(productRows);
  const handleaFilter = (event) => {
    const newData = productRows.filter((row) =>
      row.productName.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setRecords(newData);
  };
  return (
    <div className={cx("product-wrapper")}>
      <div className={cx("topbar")}>
        <Topbar />
      </div>
      <div className={cx("container")}>
        <div className={cx("sidebar")}>
          <Sidebar />
        </div>
        <div className={cx("product-container")}>
          <div className={cx("nav-bar")}>
            <NavBar />
          </div>
          <div className={cx("product-table")}>
            <div className={cx("input-search")}>
              <input
                type="text"
                placeholder="Search product"
                onChange={handleaFilter}
                className={cx("skw")}
              ></input>
            </div>
            <DataTable
              columns={productColumns}
              data={records}
              selectableRows
              customStyles={customStyles}
              pagination
            />
          </div> 
          <div className={cx("button")}>
              <button className={cx("recover-btn")}>RECOVER</button>
            </div>
       </div>
      </div>
    </div>
  );
}

export default BanProductMng;
