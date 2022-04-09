import React from "react";
import { NavLink } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
const SideBar = () => {
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <aside className="navbar-aside" id="offcanvas_aside">
      <div className="aside-top">
        <Link to={{ pathname: `/admin_dashboard` }} className="brand-wrap">
          <img
            src="/lo.jpg"
            height={150}
            width={300}
            className="logo"
            alt="Ecommerce dashboard template"
          />
        </Link>
        <div>
          <button className="btn btn-icon btn-aside-minimize">
            {" "}
            <i className="text-muted material-icons md-menu_open" />{" "}
          </button>
        </div>
      </div>{" "}
      {/* aside-top.// */}
      <nav>
        <ul className="menu-aside">
          <li className="menu-item ">
            <NavLink
              className="menu-link"
              to={{
                pathname: `/admin_dashboard`,
              }}
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "black" }
              }
            >
              {" "}
              <i className="icon material-icons md-home" />
              <span className="text">Dashboard</span>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              className="menu-link"
              to={{ pathname: `/hotels` }}
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "black" }
              }
            >
              {" "}
              <i className="icon material-icons md-shopping_bag" />
              <span className="text">Hotels</span>
            </NavLink>
          </li>
          <li className="menu-item ">
            <NavLink
              className="menu-link"
              to={{ pathname: `/trips` }}
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "black" }
              }
            >
              {" "}
              <i className="icon material-icons md-shopping_cart" />
              <span className="text">Trips</span>
            </NavLink>
          </li>
          <li className="menu-item ">
            <NavLink
              className="menu-link"
              to={{ pathname: `/voucher_list` }}
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "black" }
              }
            >
              {" "}
              <i className="icon material-icons md-store" />
              <span className="text">Vouchers</span>
            </NavLink>
          </li>
          <li className="menu-item ">
            <NavLink
              className="menu-link"
              to={{ pathname: `/admin_list` }}
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "black" }
              }
            >
              {" "}
              <i className="icon material-icons md-add_box" />
              <span className="text">Admin Requests </span>
            </NavLink>
          </li>
        </ul>

        <br />
        <br />
      </nav>
    </aside>
  );
};

export default SideBar;
