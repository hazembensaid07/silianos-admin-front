import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { authenticate, isAuth } from "../../helpers/helper";
import { ToastContainer, toast } from "react-toastify";
import apiUri from "../apiUri";
import "react-toastify/dist/ReactToastify.min.css";
import Header from "../Header/Header";
const Login = ({ history }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const clickSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `${apiUri()}/user/signin`,
      data: { email, password },
    })
      .then((response) => {
        authenticate(response, () => {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
          });

          isAuth() && history.push("/");
        });
      })
      .catch((error) => {
        toast.error(error.response.data.error);
      });
  };
  const { email, password } = values;

  return (
    <div>
      <ToastContainer />

      <b className="screen-overlay" />
      <Header />
      <section className="content-main">
        <div
          className="card shadow mx-auto"
          style={{ maxWidth: "380px", marginTop: "100px" }}
        >
          <div className="card-body">
            <h4 className="card-title mb-4">Sign in</h4>
            <form>
              <div className="mb-3">
                <input
                  onChange={handleChange("email")}
                  value={email}
                  type="email"
                  className="form-control"
                  placeholder="Username or email"
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={handleChange("password")}
                  value={password}
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3">
                <Link
                  to={{
                    pathname: `/forgotpassword`,
                  }}
                  className="float-end"
                >
                  Forgot password?
                </Link>
                <label className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    defaultChecked
                  />
                  <span className="form-check-label">Remember</span>
                </label>
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  onClick={(e) => {
                    clickSubmit(e);
                  }}
                >
                  Login
                </button>
              </div>
            </form>
            <p className="text-center mb-4">
              Don't have account?
              <Link
                to={{
                  pathname: `/signup`,
                }}
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
