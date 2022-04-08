import React from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div>
      <b className="screen-overlay" />
      <header className="main-header navbar">
        <div className="col-brand">
          <img
            src="./lo.jpg"
            height={150}
            width={300}
            className="logo"
            alt="Ecommerce dashboard template"
          />
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
                onclick="darkmode(this)"
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
          style={{ maxWidth: "380px", marginTop: "60px" }}
        >
          <div className="card-body">
            <h4 className="card-title mb-4">Sign Up </h4>
            <form>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  className="form-control"
                  placeholder="Type text"
                  type="text"
                />
              </div>{" "}
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  className="form-control"
                  placeholder="Type text"
                  type="text"
                />
              </div>{" "}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  className="form-control"
                  placeholder="Type email"
                  type="text"
                />
              </div>{" "}
              {/* form-group// */}
              {/* form-group// */}
              <div className="mb-3">
                <label className="form-label">Create password</label>
                <input
                  className="form-control"
                  placeholder="Password"
                  type="password"
                />
              </div>{" "}
              {/* form-group// */}
              {/* form-group  .// */}
              <div className="mb-4">
                <button type="submit" className="btn btn-primary w-100">
                  {" "}
                  Sign Up
                </button>
              </div>{" "}
              {/* form-group// */}
            </form>

            <p className="text-center mb-2">
              Already have an account?{" "}
              <Link
                to={{
                  pathname: `/`,
                }}
              >
                Sign in{" "}
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

export default SignUp;
