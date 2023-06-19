import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./UserMng.module.scss";
import Sidebar from "../global/Sidebar";
import Header from "~/layouts/components/Header/Header";

import avatar from "~/assets/images/avatar.png";
import DataTable  from "react-data-table-component";

const cx = classNames.bind(styles);

const usersRows = [
  {
    id: 1,
    fullName: "Nguyen Van A",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    status: "Available",
  },
  {
    id: 2,
    fullName: "Nguyen Van B",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    status: "Available",
  },
  {
    id: 3,
    fullName: "Nguyen Van C",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    status: "Available",
  },
  {
    id: 4,
    fullName: "Nguyen Van D",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    status: "Available",
  },
  {
    id: 5,
    fullName: "Nguyen Van E",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    status: "Available",
  },
  {
    id: 6,
    fullName: "Nguyen Van F",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    status: "Available",
  },
  {
    id: 7,
    fullName: "Nguyen Van G",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    status: "Banned",
  },
  {
    id: 8,
    fullName: "Nguyen Van H",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    status: "Banned",
  },
  {
    id: 9,
    fullName: "Nguyen Van I",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    status: "Available",
  },
  {
    id: 10,
    fullName: "Nguyen Van J",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    status: "Banned",
  },
  {
    id: 11,
    fullName: "Nguyen Van K",
    email: "anv@gmail.com",
    address: "Ho Chi Minh",
    status: "Available",
  },
];

const usersColumns = [
  { 
    name: "ID", 
    selector: row => row.id ,
    sortable: true,
  },
  { 
    name: "Full Name", 
    selector: row => row.fullName,
    sortable: true,
  },
  { 
    name: "Email", 
    selector: row => row.email 
  },
  { 
    name: "Address", 
    selector: row => row.address,  
  },
  { 
    name: "Status", 
    selector: row => row.status 
  },
  {
    name: 'Action',
    cell: (row) => (
      <div>
        {row.status === 'Available' && (
          <button onClick={() => console.log(row)}>Ban</button>
        )}
        {row.status === 'Banned' && (
          <button onClick={() => console.log(row)}>Recover</button>
        )}
      </div>
    ),
  },
];

const customStyles = {
  headRow: {
    style: {
      backgroundColor: '#f2f2f2',
    },
  },
  rows: {
    style: {
      backgroundColor: '#fff',
    },
  },
  selectedRow: {
    style: {
      backgroundColor: 'blue',
    },
  },
  cells: {
    style: {
      padding: '10px',
    },
  },
};

function AdminUserMng() {
  const [records, setRecords] = useState(usersRows);
  const handleaFilter = (event) => {
    const newData = usersRows.filter(row => row.fullName.toLowerCase().includes(event.target.value.toLowerCase()))
    setRecords(newData)
  }
  return (
    <div className={cx("user-wrapper")}>
      <Header />
      <div className={cx("container")}>
        <div className={cx("sidebar")}>
          <Sidebar />
        </div>
        <div className={cx("user-container")}>
        <div className={cx('input-search')}>
          <input type="text" placeholder="Search user" onChange={handleaFilter}>

          </input>
        </div>
          <DataTable 
          columns={usersColumns} 
          data={records}
          selectableRows
          pagination
          customStyles={customStyles}
           />
        </div>
      </div>
    </div>
  );
}

export default AdminUserMng;
