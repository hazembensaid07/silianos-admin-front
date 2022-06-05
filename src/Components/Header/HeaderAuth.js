import React from "react";
import { signout } from "../../helpers/helper";

const HeaderAuth = () => {
  return (
    <header className="main-header navbar">
      <div className="col-brand"></div>

      <div className="col-nav">
        <button
          className="btn btn-icon btn-mobile me-auto"
          data-trigger="#offcanvas_aside"
        >
          <i className="md-28 material-icons md-menu" />
        </button>
        <ul className="nav">
          <li className="dropdown nav-item">
            <button className="dropdown-toggle" data-bs-toggle="dropdown">
              {" "}
            </button>
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
    </header>
  );
};

export default HeaderAuth;
