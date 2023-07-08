import React, {useState} from "react";
import classNames from "classnames/bind";
import styles from "./ReportedShopMng.module.scss";
import Sidebar from "../../global/Sidebar";

import avatar from "~/assets/images/user-avatar.png";
import DataTable from "react-data-table-component";
import ShopMngNav from "../ShopMngNav/ShopMngNav";
import Topbar from "../../global/Topbar";

const cx = classNames.bind(styles);

const shopsRows = [
    {
        id: 1,
        avatar: avatar,
        shopName: "Louis Vuiton",
        email: "anv@gmail.com",
        address: "Ho Chi Minh",
        package: "30 days",
        status: "Available",
    },
    {
        id: 2,
        avatar: avatar,
        shopName: "Louis Vuiton",
        email: "anv@gmail.com",
        address: "Ho Chi Minh",
        package: "30 days",
        status: "Available",
    },
    {
        id: 3,
        avatar: avatar,
        shopName: "Louis Vuiton",
        email: "anv@gmail.com",
        address: "Ho Chi Minh",
        package: "30 days",
        status: "Available",
    },
    {
        id: 4,
        avatar: avatar,
        shopName: "Louis Vuiton",
        email: "anv@gmail.com",
        address: "Ho Chi Minh",
        package: "30 days",
        status: "Available",
    },
    {
        id: 5,
        avatar: avatar,
        shopName: "Louis Vuiton",
        email: "anv@gmail.com",
        address: "Ho Chi Minh",
        package: "30 days",
        status: "Available",
    },
    {
        id: 6,
        avatar: avatar,
        shopName: "Louis Vuiton",
        email: "anv@gmail.com",
        address: "Ho Chi Minh",
        package: "30 days",
        status: "Available",
    },
    {
        id: 7,
        avatar: avatar,
        shopName: "Louis Vuiton",
        email: "anv@gmail.com",
        address: "Ho Chi Minh",
        package: "30 days",
        status: "Available",
    },
    {
        id: 8,
        avatar: avatar,
        shopName: "Louis Vuiton",
        email: "anv@gmail.com",
        address: "Ho Chi Minh",
        package: "30 days",
        status: "Available",
    },
    {
        id: 9,
        avatar: avatar,
        shopName: "Louis Vuiton",
        email: "anv@gmail.com",
        address: "Ho Chi Minh",
        package: "30 days",
        status: "Available",
    },
    {
        id: 10,
        avatar: avatar,
        shopName: "Louis Vuiton",
        email: "anv@gmail.com",
        address: "Ho Chi Minh",
        package: "30 days",
        status: "Available",
    },
    {
        id: 11,
        avatar: avatar,
        shopName: "Louis Vuiton",
        email: "anv@gmail.com",
        address: "Ho Chi Minh",
        package: "30 days",
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
        name: "Avatar",
        cell: (row) => (
            <div>
                <img className={cx("avatar-img")} src={row.avatar} alt="avatar-img"/>
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
                {row.status === "Available" && (
                    <p className={cx("available-status")}>Available</p>
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

function ReportedShopMng() {
    const [records, setRecords] = useState(shopsRows);
    const handlerFilter = (event) => {
        const newData = shopsRows.filter((row) =>
            row.shopName.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setRecords(newData);
    };
    return (
        <div className={cx("shop-wrapper")}>
            <div className={cx("topbar")}>
                <Topbar/>
            </div>
            <div className={cx("container")}>
                <div className={cx("sidebar")}>
                    <Sidebar/>
                </div>
                <div className={cx("shop-container")}>
                    <div className={cx("nav-bar")}>
                        <ShopMngNav/>
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
                            data={records}
                            selectableRows
                            customStyles={customStyles}
                            pagination
                        />
                        <div className={cx("button")}>
                            <button className={cx("ban-btn")}>BAN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportedShopMng;
