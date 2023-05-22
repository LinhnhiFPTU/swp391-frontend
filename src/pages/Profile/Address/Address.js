import classNames from "classnames/bind";
import { NavLink, useLocation} from "react-router-dom";
import { useState, useContext, useEffect } from "react";

import Header from "~/layouts/components/Header/Header";
import Footer from "~/layouts/components/Footer";
import AddressPopup from "~/layouts/components/AddressPopup";
import styles from "./Address.module.scss";
import { UserContext } from "~/App";
import axios from "axios";

const cx = classNames.bind(styles);
const sidebarDatas = [
  {
    title: "Account",
    path: "/user/account/profile",
  },
  {
    title: "Password",
    path: "/user/account/password",
  },
  {
    title: "Address",
    path: "/user/account/address",
  },
];
function Address() {
  const { pathname } = useLocation();
  const [openMadal, setOpenModal] = useState(false);
  const [curPage, setCurPage] = useState(1);
  const [receiveinfos, setReceiveInfos] = useState([])
  const [user, setUser] = useState({
    email: "",
    firstname: "",
    lastname: "",
    imageurl: "",
    gender: "",
    receive_info_page: 1
  });
  const context = useContext(UserContext);

  useEffect(() => {
    if (context) {
      setUser(context);
    }
  }, [context]);

  useEffect(() => {
    axios.get('/api/v1/users/info/address?page=' + curPage)
      .then(res => {
        let setup = res.data || []
        let param = (curPage == 1)? "": "?page=" + curPage
        setReceiveInfos(setup)
      })
      .catch(e => {
        console.log(e)
      })
  }, [curPage])

  const handleAdd = () => {
    setOpenModal(true);
  };

  const handlePrev = (e) =>
  {
    e.preventDefault()
    setCurPage(c => {
      if(c > 0)
      {
        let prevPage = c - 1
        return prevPage;
      }
      return c;
    })
  }

  const handleNext = (e) =>
  {
    e.preventDefault()
    setCurPage(c => {
      if(c < user.receive_info_page)
      {
        let nextPage = c + 1;
        return nextPage;
      }
    })
  }

  return (
    <>
      {openMadal && <AddressPopup closeModel={setOpenModal} />}
      <Header />
      <div className={cx("profile-wrapper")}>
        <div className={cx("profile-container")}>
          <div className={cx("profile-content")}>
            <div className={cx("left-content")}>
              <div className={cx("user-avatar")}>
                <div className={cx("user-avatar-img")}>
                  <img src={user.imageurl} alt="avatar" />
                </div>
                <div className={cx("user-name")}>
                  <p>
                    {(user.firstname + " " + user.lastname).trim() || "User"}
                  </p>
                </div>
              </div>
              <div className={cx("user-nav")}>
                {sidebarDatas.map((data, index) => (
                  <NavLink
                    to={data.path}
                    className={({ isActive }) =>
                      [cx("nav-link"), isActive ? cx("nav-active") : null].join(
                        " "
                      )
                    }
                    isActive={() =>
                      [
                        "/user/account/profile",
                        "/user/account/password",
                        "/user/account/address",
                      ].includes(pathname)
                    }
                    key={index}
                  >
                    <span className={cx("nav-text")}>{data.title}</span>
                  </NavLink>
                ))}
              </div>
            </div>
            <div className={cx("right-content")}>
              <div className={cx("right-content-head")}>
                <div className={cx("setting-title")}>
                  <p>Address Settings</p>
                </div>
                <button className={cx("add-new")} onClick={handleAdd}>
                  <i className={cx("fa-solid fa-plus")}></i>
                  <span>Add address</span>
                </button>
              </div>
              <div className={cx("setting-content")}>
                {receiveinfos.map((item) => (
                  <div className={cx("address-item")} key={item.id}>
                    <div className={cx("address-icon")}>
                      <i className={cx("fa-solid fa-address-book")}></i>
                    </div>
                    <div className={cx("address-name")}>
                      <span className={cx("name")}>{item.fullname}</span>
                    </div>
                    <div className={cx("address-phone")}>
                      <span className={cx("phone")}>{item.phone}</span>
                    </div>
                    <div className={cx("address-detail")}>
                      <div className={cx("address-name")}>
                        <span className={cx("address")}>
                          {`${item.specific_address}, ${item.ward}, ${item.district}, ${item.province}`}
                        </span>
                      </div>
                      <div className={cx("address-crud")}>
                        <button className={cx("crud-delete")}>
                          <i
                            className={cx(
                              "icon-delete",
                              "fa-sharp fa-solid fa-trash-xmark"
                            )}
                          ></i>
                        </button>
                      </div>
                    </div>
                    <div className={cx("address-options")}>
                      <div className={cx({"address-non-default": !item._default}, {"address-default" : item._default})}>
                        <span>{item._default && "Default"}</span>
                      </div>
                      <button className={cx("address-make")} disabled={item._default}>
                        <span>Make it default</span>
                      </button>
                    </div>
                  </div>
                ))}
                <div className={cx("next-page")}>
                  <button className={cx("icon-left")} onClick={handlePrev} disabled={curPage === 1}>
                    <i className={cx("fa-light fa-angle-left")}></i>
                  </button>
                  <button className={cx("icon-right")} onClick={handleNext} disabled={curPage === user.receive_info_page}>
                    <i className={cx("fa-light fa-angle-right")}></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Address;
