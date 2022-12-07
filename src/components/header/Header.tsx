import React from "react";
import scss from "../scss/stylehead.module.scss";
import abc from "../../img/Logo.jpg";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { Button, Drawer } from "antd";
import { useState } from "react";
import useWindowSize from "../../customhook/useWindowsize";

const Header = () => {
  const { width } = useWindowSize();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  return (
    <header id="head" className={scss.head}>
      <Drawer title="menu" placement="left" onClose={onClose} open={open}>
        <div onClick={() => setOpen(false)} className="mb-1">
          <NavLink
            to="request"
            className={({ isActive }) =>
              isActive
                ? "text-primary fw-bold text-decoration-none mb-3"
                : "text-dark fw-bold text-decoration-none "
            }
          >
            <a>Yêu cầu</a>
          </NavLink>
        </div>

        <div onClick={() => setOpen(false)} className="mb-1">
          <NavLink
            to="/listcty"
            className={({ isActive }) =>
              isActive
                ? "text-primary fw-bold text-decoration-none mb-3 "
                : "text-dark fw-bold text-decoration-none"
            }
          >
            <a>Danh sách </a>
          </NavLink>
        </div>

        <div onClick={() => setOpen(false)} className="mb-1">
          <NavLink
            to="/know"
            className={({ isActive }) =>
              isActive
                ? "text-primary fw-bold text-decoration-none"
                : "text-dark fw-bold text-decoration-none"
            }
          >
            <a>kiến thức </a>
          </NavLink>
        </div>

        <NavLink
          onClick={() => setOpen(false)}
          to="/request"
          className="text-dark fw-bold text-decoration-none"
        >
          <a>liên hệ</a>
          <div className={scss.line} />
        </NavLink>
      </Drawer>
      <div className={scss.container}>
        <div className="d-flex justify-content-between">
          <div className="col-sm-7">
            <Link to="/">
              <div>
                <img src={`${abc}`} />
              </div>
            </Link>
          </div>
          {width < 1027 ? (
            <div className="col-sm-5 d-flex justify-content-end">
              <Button
                style={{
                  border: "none",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                }}
                onClick={showDrawer}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 4.5H21"
                    stroke="#353E50"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 12.2H21"
                    stroke="#353E50"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 19.5H21"
                    stroke="#353E50"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Button>
            </div>
          ) : (
            <div className="col-sm-5 d-flex justify-content-end">
              <div className={scss.headmenu}>
                <NavLink
                  to="request"
                  className={({ isActive }) =>
                    isActive ? scss.ani1 : scss.ani
                  }
                >
                  <a>Yêu cầu</a>
                  <div className={scss.line} />
                </NavLink>

                <NavLink
                  to="/listcty"
                  className={({ isActive }) =>
                    isActive ? scss.ani1 : scss.ani
                  }
                >
                  <a>Danh sách </a>
                  <div className={scss.line} />
                </NavLink>

                <NavLink
                  to="/know"
                  className={({ isActive }) =>
                    isActive ? scss.ani1 : scss.ani
                  }
                >
                  <a>kiến thức </a>
                  <div className={scss.line} />
                </NavLink>

                <NavLink to="/request" className={scss.ani}>
                  <a>liên hệ</a>
                  <div className={scss.line} />
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
