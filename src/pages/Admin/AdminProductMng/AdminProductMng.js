import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./AdminProductMng.module.scss";
import Sidebar from "../global/Sidebar";

import bird from "~/assets/images/bird-cage.png";
import DataTable from "react-data-table-component";
import HeaderSeller from "~/layouts/components/HeaderSeller/HeaderSeller";

const cx = classNames.bind(styles);

const usersRows = [
  {
    id: 1,
    img: bird,
    productName: "Bird Cage",
    shopName: "Louis Vuiton",
    address: "Ho Chi Minh",
    status: "Available",
  },
  {
    id: 2,
    img: bird,
    productName: "Bird Cage",
    shopName: "Louis Vuiton",
    address: "Ho Chi Minh",
    status: "Available",
  },
  {
    id: 3,
    img: bird,
    productName: "Bird Cage",
    shopName: "Louis Vuiton",
    address: "Ho Chi Minh",
    status: "Available",
  },
  {
    id: 4,
    img: bird,
    productName: "Bird Cage",
    shopName: "Louis Vuiton",
    address: "Ho Chi Minh",
    status: "Available",
  },
  {
    id: 5,
    img: bird,
    productName: "Bird Cage",
    shopName: "Louis Vuiton",
    address: "Ho Chi Minh",
    status: "Available",
  },
  {
    id: 6,
    img: bird,
    productName: "Bird Cage",
    shopName: "Louis Vuiton",
    address: "Ho Chi Minh",
    status: "Available",
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
    status: "Available",
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
    status: "Available",
  },
];

const usersColumns = [
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
        <img className={cx("product-img")} src={row.img} />
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
        {row.status === "Available" && (
          <p className={cx("available-status")}>Available</p>
        )}
        {row.status === "Banned" && (
          <p className={cx("banned-status")}>Banned</p>
        )}
      </div>
    ),
  },
  {
    name: "Action",
    cell: (row) => (
      <div>
        {row.status === "Available" && (
          <button className={cx("ban_btn")} onClick={() => console.log(row)}>
            Ban
          </button>
        )}
        {row.status === "Banned" && (
          <button
            className={cx("recover_btn")}
            onClick={() => console.log(row)}
          >
            Recover
          </button>
        )}
      </div>
    ),
  },
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

function AdminUserMng() {
  const [records, setRecords] = useState(usersRows);
  const handleaFilter = (event) => {
    const newData = usersRows.filter((row) =>
      row.fullName.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setRecords(newData);
  };
  return (
    <div className={cx("user-wrapper")}>
      <HeaderSeller title="Product Mng" />
      <div className={cx("container")}>
        <div className={cx("sidebar")}>
          <Sidebar />
        </div>
        <div className={cx("user-container")}>
          <div className={cx("user-table")}>
            <div className={cx("input-search")}>
              <input
                type="text"
                placeholder="Search product"
                onChange={handleaFilter}
                className={cx("skw")}
              ></input>
            </div>

            <DataTable
              columns={usersColumns}
              data={records}
              selectableRows
              customStyles={customStyles}
              pagination
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUserMng;
