import React from "react";
import { isAuth, signout } from "../../helpers/helper";
import logo from "./lo.jpg";
const Header = () => {
  return (
    <header className="main-header navbar">
      <div className="col-brand">
        <img
          src={logo}
          height={150}
          width={300}
          className="logo"
          alt="Ecommerce dashboard template"
        />
      </div>
      {isAuth() && (
        <div className="col-nav">
          <ul className="nav">
            <li className="dropdown nav-item">
              <button
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
              ></button>
              <div className="dropdown-menu dropdown-menu-end">
                <button
                  className="dropdown-item text-danger"
                  onClick={() => {
                    signout();
                  }}
                >
                  Se déconnecter
                </button>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
