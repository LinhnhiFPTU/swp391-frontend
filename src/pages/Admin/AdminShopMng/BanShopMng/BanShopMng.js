import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./BanShopMng.module.scss";
import Sidebar from "../../global/Sidebar";

import avatar from "~/assets/images/user-avatar.png";
import DataTable from "react-data-table-component";
import ShopMngNav from "../ShopMngNav/ShopMngNav";
import Topbar from "../../global/Topbar";
import axios from "axios";

const cx = classNames.bind(styles);

const shopsRows = [
  {
    id: 1,
    avatar: avatar,
    shopName: "Louis Vuiton",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    package: "30 days",
    status: "Banned",
  },
  {
    id: 2,
    avatar: avatar,
    shopName: "Louis Vuiton",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    package: "30 days",
    status: "Banned",
  },
  {
    id: 3,
    avatar: avatar,
    shopName: "Louis Vuiton",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    package: "30 days",
    status: "Banned",
  },
  {
    id: 4,
    avatar: avatar,
    shopName: "Louis Vuiton",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    package: "30 days",
    status: "Banned",
  },
  {
    id: 5,
    avatar: avatar,
    shopName: "Louis Vuiton",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    package: "30 days",
    status: "Banned",
  },
  {
    id: 6,
    avatar: avatar,
    shopName: "Louis Vuiton",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    package: "30 days",
    status: "Banned",
  },
  {
    id: 7,
    avatar: avatar,
    shopName: "Louis Vuiton",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    package: "30 days",
    status: "Banned",
  },
  {
    id: 8,
    avatar: avatar,
    shopName: "Louis Vuiton",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    package: "30 days",
    status: "Banned",
  },
  {
    id: 9,
    avatar: avatar,
    shopName: "Louis Vuiton",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    package: "30 days",
    status: "Banned",
  },
  {
    id: 10,
    avatar: avatar,
    shopName: "Louis Vuiton",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    package: "30 days",
    status: "Banned",
  },
  {
    id: 11,
    avatar: avatar,
    shopName: "Louis Vuiton",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    package: "30 days",
    status: "Banned",
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
    name: "Avatar",
    cell: (row) => (
      <div>
        <img className={cx("avatar-img")} src={row.avatar} alt="avatar-img" />
      </div>
    ),
  },
  {
    name: "Shop Name",
    selector: (row) => row.shopName,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
  {
    name: "Address",
    selector: (row) => row.address,
  },
  {
    name: "Package",
    selector: (row) => row.package,
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

function BanShopMng() {
  const [search, setSearch] = useState([]);
  const [records, setRecords] = useState([]);
  const handlerFilter = (event) => {
    const newData = records.filter((row) =>
      row.shopName.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearch(newData);
  };

  useEffect(() => {
    axios
      .get("/api/v1/admin/management/shop")
      .then((res) => {
        console.log(res.data);
        let mappedShop = res.data.map((item) => {
          let mapped = {
            id: item.id,
            avatar: item.shopImage,
            shopName: item.name,
            address: item.address.province.name,
            package:
              item.shopPackages[item.shopPackages.length - 1].shopPlan.plan +
              " - " +
              item.shopPackages[item.shopPackages.length - 1].shopPlan
                .duration +
              " days",
            status: item.ban ? "Banned" : "Available",
          };
          return mapped;
        });
        setRecords(mappedShop.filter((item) => item.status === "Banned"));
        setSearch(mappedShop.filter((item) => item.status === "Banned"));
      })
      .catch((e) => console.log(e.response.status));
  }, []);

  return (
    <div className={cx("shop-wrapper")}>
      <div className={cx("topbar")}>
        <Topbar />
      </div>
      <div className={cx("container")}>
        <div className={cx("sidebar")}>
          <Sidebar />
        </div>
        <div className={cx("shop-container")}>
          <div className={cx("nav-bar")}>
            <ShopMngNav />
          </div>
          <div className={cx("shop-table")}>
            <div className={cx("input-search")}>
              <input
                type="text"
                placeholder="Search shop"
                onChange={handlerFilter}
                className={cx("skw")}
              ></input>
            </div>

            <DataTable
              columns={usersColumns}
              data={search}
              selectableRows
              customStyles={customStyles}
              pagination
            />
            <div className={cx("button")}>
              <button className={cx("recover-btn")}>RECOVER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BanShopMng;
