import React from "react";
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
            src="images/logo.svg"
            height={46}
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
          <li className="menu-item active">
            <Link
              className="menu-link"
              to={{
                pathname: `/admin_dashboard`,
              }}
            >
              {" "}
              <i className="icon material-icons md-home" />
              <span className="text">Dashboard</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link" to={{ pathname: `/hotels` }}>
              {" "}
              <i className="icon material-icons md-shopping_bag" />
              <span className="text">Hotels</span>
            </Link>
          </li>
          <li className="menu-item ">
            <Link className="menu-link" to={{ pathname: `/trips` }}>
              {" "}
              <i className="icon material-icons md-shopping_cart" />
              <span className="text">Trips</span>
            </Link>
          </li>
          <li className="menu-item ">
            <Link className="menu-link" to={{ pathname: `/voucher_list` }}>
              {" "}
              <i className="icon material-icons md-store" />
              <span className="text">Vouchers</span>
            </Link>
          </li>
          <li className="menu-item ">
            <Link className="menu-link" to={{ pathname: `/admin_list` }}>
              {" "}
              <i className="icon material-icons md-add_box" />
              <span className="text">Admin Requests </span>
            </Link>
          </li>
        </ul>

        <br />
        <br />
      </nav>
    </aside>
  );
};

export default SideBar;
