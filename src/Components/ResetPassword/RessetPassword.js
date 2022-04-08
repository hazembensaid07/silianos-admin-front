import React from "react";
import { Link } from "react-router-dom";

const RessetPassword = () => {
  return (
    <div>
      <b className="screen-overlay" />
      <header className="main-header navbar">
        <div className="col-brand">
          <a href="page-index-1.html" className="brand-wrap">
            <img
              src="images/logo.svg"
              height={46}
              className="logo"
              alt="Ecommerce dashboard template"
            />
          </a>
        </div>
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
                onClick="darkmode(this)"
                title="Dark mode"
                href="#"
              >
                {" "}
                <i className="material-icons md-nights_stay" />{" "}
              </a>
            </li>
          </ul>
        </div>
      </header>
      <section className="content-main">
        {/* ============================ COMPONENT LOGIN   ================================= */}
        <div
          className="card shadow mx-auto"
          style={{ maxWidth: "380px", marginTop: "100px" }}
        >
          <div className="card-body">
            <h4 className="card-title mb-4">Reset Password</h4>
            <form>
              {/* form-group// */}
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Password"
                  type="password"
                />
              </div>{" "}
              {/* form-group// */}
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder=" Confirm Password"
                  type="password"
                />
              </div>{" "}
              {/* form-group form-check .// */}
              <div className="mb-4">
                <button type="submit" className="btn btn-primary w-100">
                  {" "}
                  Reset Password
                </button>
              </div>{" "}
              {/* form-group// */}
            </form>
            <p className="text-center mb-4">
              <Link
                to={{
                  pathname: `/`,
                }}
              >
                Log In
              </Link>
            </p>
          </div>{" "}
          {/* card-body.// */}
        </div>{" "}
        {/* card .// */}
        {/* ============================ COMPONENT LOGIN  END.// ================================= */}
      </section>{" "}
      {/* content-main end// */}
    </div>
  );
};

export default RessetPassword;
