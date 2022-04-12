import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import apiUri from "../apiUri";
import { ToastContainer, toast } from "react-toastify";
import { isAuth } from "../../helpers/helper";
import "react-toastify/dist/ReactToastify.min.css";
import Header from "../Header/Header";
const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { name, email, password, lastName } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const clickSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `${apiUri()}/user/signup`,
      data: { name, lastName, email, password },
    })
      .then((response) => {
        console.log("SIGNUP SUCCESS", response);
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          lastName: "",
        });
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log("SIGNUP ERROR", error.response.data);
        toast.error(error.response.data.error);
      });
  };

  return (
    <div>
      <ToastContainer />
      {isAuth() && <Redirect to="/admin_request" />}
      <b className="screen-overlay" />
      <Header />
      <section className="content-main">
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
                  onChange={handleChange("name")}
                  value={name}
                  name="name"
                  className="form-control"
                  placeholder="Type text"
                  type="text"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  required
                  onChange={handleChange("lastName")}
                  value={lastName}
                  className="form-control"
                  placeholder="Type text"
                  type="text"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  required
                  onChange={handleChange("email")}
                  value={email}
                  className="form-control"
                  placeholder="Type email"
                  type="text"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Create password</label>
                <input
                  required
                  onChange={handleChange("password")}
                  value={password}
                  className="form-control"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  onClick={clickSubmit}
                >
                  Sign Up
                </button>
              </div>
            </form>

            <p className="text-center mb-2">
              Already have an account?
              <Link
                to={{
                  pathname: `/`,
                }}
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
