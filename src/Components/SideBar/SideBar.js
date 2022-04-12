import React from "react";
import { NavLink } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
const SideBar = () => {
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;

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
          <NavLink
            className="menu-link"
            to={{
              pathname: `/admin_dashboard`,
            }}
            activeStyle={{ color: "#ff0000" }}
          >
            <li className="menu-item ">
              {" "}
              <i className="icon material-icons md-home" />
              <span className="text">Dashboard</span>
            </li>
          </NavLink>
          <li className="menu-item">
            <NavLink
              className="menu-link"
              to={{ pathname: `/hotels` }}
              activeStyle={{ color: "#ff0000" }}
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
              activeStyle={{ color: "#ff0000" }}
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
              activeStyle={{ color: "#ff0000" }}
            >
              {" "}
              <i className="icon material-icons md-store" />
              <span className="text">Vouchers</span>
            </NavLink>
          </li>
          <li className="menu-item "></li>
        </ul>

        <br />
        <br />
      </nav>
    </aside>
  );
};

export default SideBar;
