import React from "react";
import SideBar from "./SideBar/SideBar";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <b className="screen-overlay" />

      <main className="main-wrap">
        <header className="main-header navbar">
          <div className="col-search"></div>
          <div className="col-nav">
            <button
              className="btn btn-icon btn-mobile me-auto"
              data-trigger="#offcanvas_aside"
            >
              {" "}
              <i className="md-28 material-icons md-menu" />{" "}
            </button>
            <ul className="nav">
              <li className="nav-item">
                <a
                  className="nav-link btn-icon"
                  onclick="darkmode(this)"
                  title="Dark mode"
                  href="#"
                >
                  {" "}
                  <i className="material-icons md-nights_stay" />{" "}
                </a>
              </li>

              <li className="dropdown nav-item">
                <a
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                ></a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="#">
                    My profile
                  </a>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                  <a className="dropdown-item text-danger" href="#">
                    Exit
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </header>
        <section className="content-main">
          <div className="row" style={{ marginTop: "60px" }}>
            <div className="col-sm-12">
              <div className="w-50 mx-auto text-center">
                <img
                  src="images/not-found.png"
                  width={350}
                  alt="Page Not Found"
                />
                <h3 className="mt-4">Oops! Page not found</h3>
                <p>
                  It's looking like you may have taken a wrong turn. Don't
                  worry... it happens to the best of us. Here's a little tip
                  that might help you get back on track.
                </p>
                <Link
                  to={{ pathname: `/admin_dashboard` }}
                  className="btn btn-primary mt-4"
                >
                  Back to main{" "}
                </Link>
              </div>
            </div>
          </div>
        </section>{" "}
        {/* content-main end// */}
      </main>
    </div>
  );
};

export default Error;
