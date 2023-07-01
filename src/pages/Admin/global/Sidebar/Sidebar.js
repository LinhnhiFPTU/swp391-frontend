import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { NavLink, useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);
const options = [
  {
    id: 1,
    title: "Dashboard",
    icon: "fa-light fa-table-columns",
    path: "/admin/portal/dashboard",
  },
  {
    id: 2,
    title: "User",
    icon: "fa-light fa-bag-shopping",
    path: "/admin/portal/usermng",
  },
  {
    id: 3,
    title: "Shop",
    icon: "fa-thin fa-clipboard-list",
    path: "/admin/portal/shopmng",
  },
  {
    id: 4,
    title: "Product",
    icon: "fa-sharp fa-light fa-box-dollar",
    path: "/admin/portal/productmng",
  },
];
function Sidebar() {
  const { pathname } = useLocation();
  return (
    <div className={cx('sidebar')}>
      <div className={cx("side-bar_menu-item")}>
            {options.map((option) => (
              <NavLink
                to={option.path}
                key={option.id}
                className={({ isActive }) =>
                  [cx("nav-item"), isActive ? cx("nav-active") : null].join(" ")
                }
                isActive={() =>
                  [
                    "/admin/portal/dashboard",
                    "/admin/portal/usermng", 
                    "/admin/portal/shopmng",
                    "/admin/portal/productmng",
                  ].includes(pathname)
                }
              >
                <i className={cx(option.icon, "nav-icon")}></i>
                <span className={cx("nav-text")}>{option.title}</span>
              </NavLink>
            ))}
          </div>
    </div>
  )
}

export default Sidebar