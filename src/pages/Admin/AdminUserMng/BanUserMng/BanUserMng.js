import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./BanUserMng.module.scss";
import Sidebar from "../../global/Sidebar";

import avatar from "~/assets/images/user-avatar.png";
import DataTable from "react-data-table-component";
import UserMngNav from "../../AdminShopMng/ShopMngNav/ShopMngNav";

const cx = classNames.bind(styles);

const usersRows = [
  {
    id: 1,
    avatar: avatar,
    fullName: "Nguyen Van A",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    status: "Banned",
  },
  {
    id: 2,
    avatar: avatar,
    fullName: "Nguyen Van B",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    status: "Banned",
  },
  {
    id: 3,
    avatar: avatar,
    fullName: "Nguyen Van C",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    status: "Banned",
  },
  {
    id: 4,
    avatar: avatar,
    fullName: "Nguyen Van D",
    email: "anv@gmail.com",
    address: "Nguyen Dong Chi, TP.Ho Chi Minh",
    status: "Banned",
  },
  {
    id: 5,
    avatar: avatar,
    fullName: "Nguyen Van E",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    status: "Banned",
  },
  {
    id: 6,
    avatar: avatar,
    fullName: "Nguyen Van F",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    status: "Banned",
  },
  {
    id: 7,
    avatar: avatar,
    fullName: "Nguyen Van G",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    status: "Banned",
  },
  {
    id: 8,
    avatar: avatar,
    fullName: "Nguyen Van H",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    status: "Banned",
  },
  {
    id: 9,
    avatar: avatar,
    fullName: "Nguyen Van I",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    status: "Banned",
  },
  {
    id: 10,
    avatar: avatar,
    fullName: "Nguyen Van J",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    status: "Banned",
  },
  {
    id: 11,
    avatar: avatar,
    fullName: "Nguyen Van K",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
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
        <img className={cx("avatar-img")} src={row.avatar} alt="img-avatar" />
      </div>
    ),
  },
  {
    name: "Full Name",
    selector: (row) => row.fullName,
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
      width: "100px",
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

function BanUserMng() {
  const [records, setRecords] = useState(usersRows);
  const handleaFilter = (event) => {
    const newData = usersRows.filter((row) =>
      row.fullName.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setRecords(newData);
  };
  return (
    <>
      <div className={cx("container")}>
        <div className={cx("sidebar")}>
          <Sidebar />
        </div>
        <div className={cx("user-container")}>
          <div className={cx("nav-bar")}>
            <UserMngNav />
          </div>
          <div className={cx("user-table")}>
            <div className={cx("input-search")}>
              <input
                type="text"
                placeholder="Search user"
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
            <div className={cx("button")}>
              <button className={cx("recover-btn")}>RECOVER</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BanUserMng