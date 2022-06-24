import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { isAuth } from "../../helpers/helper";
const SideBar = () => {
  //destructuring pathname from location

  return (
    <aside className="navbar-aside" id="offcanvas_aside">
      <div className="aside-top">
        <Link to={{ pathname: `/admin_dashboard` }} className="brand-wrap">
          <img
            src="/lo.jpg"
            height={150}
            width={350}
            className="logo"
            alt="Ecommerce dashboard template"
          />
        </Link>
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
              <span className="text">Tableau de bord</span>
            </li>
          </NavLink>
          <li className="menu-item">
            <NavLink
              className="menu-link"
              to={{ pathname: `/hotels` }}
              activeStyle={{ color: "#ff0000" }}
            >
              {" "}
              <i className="icon material-icons md-hotel " />
              <span className="text">Hôtels</span>
            </NavLink>
          </li>
          <li className="menu-item ">
            <NavLink
              className="menu-link"
              to={{ pathname: `/countries` }}
              activeStyle={{ color: "#ff0000" }}
            >
              {" "}
              <i className="icon material-icons md-public " />
              <span className="text">Pays</span>
            </NavLink>
          </li>
          <li className="menu-item ">
            <NavLink
              className="menu-link"
              to={{ pathname: `/trips` }}
              activeStyle={{ color: "#ff0000" }}
            >
              {" "}
              <i className="icon material-icons md-airplanemode_active " />
              <span className="text">Voyages</span>
            </NavLink>
          </li>
          <li className="menu-item ">
            <NavLink
              className="menu-link"
              to={{ pathname: `/voucher_list` }}
              activeStyle={{ color: "#ff0000" }}
            >
              {" "}
              <i className="icon material-icons md-monetization_on" />
              <span className="text">Bons d'achat</span>
            </NavLink>
          </li>
          {isAuth().email === "hazembensaid195@gmail.com" && (
            <li className="menu-item ">
              {" "}
              <NavLink
                className="menu-link"
                to={{ pathname: `/admin_list` }}
                activeStyle={{ color: "#ff0000" }}
              >
                {" "}
                <i className="icon material-icons md-person" />
                <span className="text">Demandes de role admin</span>
              </NavLink>
            </li>
          )}
        </ul>

        <br />
        <br />
      </nav>
    </aside>
  );
};

export default SideBar;
