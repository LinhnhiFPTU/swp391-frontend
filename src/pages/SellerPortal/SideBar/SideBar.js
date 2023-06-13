import classNames from "classnames/bind";
import { NavLink, useLocation } from "react-router-dom";

import styles from "./SideBar.module.scss";

const cx = classNames.bind(styles);

const sideBarOptions = [
  {
    id: 0,
    title: "Dashboard",
    icon: "fa-light fa-table-columns",
    path: "/seller/portal/dashboard",
  },
  {
    id: 1,
    title: "Order Management",
    icon: "fa-thin fa-clipboard-list",
    path: "/seller/portal/order",
  },
  {
    id: 2,
    title: "Product Management",
    icon: "fa-sharp fa-light fa-box-dollar",
    path: "/seller/portal/product",
  },
  {
    id: 3,
    title: "Shop Management",
    icon: "fa-light fa-bag-shopping",
    path: "/seller/portal/shop",
  },
  {
    id: 4,
    title: "Sale Management",
    icon: "fa-light fa-wallet",
    path: "/seller/portal/finance",
  },
  {
    id: 5,
    title: "Data Chart",
    icon: "fa-light fa-chart-line-up",
    path: "/seller/portal/chart",
  },
];

function SideBar() {
  const { pathname } = useLocation();

  return (
    <>
      <div className={cx("side-bar_wrapper")}>
        <div className={cx("side-bar_container")}>
          <div className={cx("side-bar_menu-item")}>
            {sideBarOptions.map((option) => (
              <NavLink
                to={option.path}
                key={option.id}
                className={({ isActive }) =>
                  [cx("nav-item"), isActive ? cx("nav-active") : null].join(" ")
                }
                isActive={() =>
                  [
                    "/seller/portal/dashboard",
                    "/seller/portal/order",
                    "/seller/portal/product",
                    "/seller/portal/shop",
                    "/seller/portal/finance",
                    "/seller/portal/chart",
                  ].includes(pathname)
                }
              >
                <i className={cx(option.icon, "nav-icon")}></i>
                <span className={cx("nav-text")}>{option.title}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
