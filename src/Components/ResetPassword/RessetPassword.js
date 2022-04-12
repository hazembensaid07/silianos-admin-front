import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { isAuth } from "../../helpers/helper";
import Header from "../Header/Header";
import apiUri from "../apiUri";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.min.css";

const RessetPassword = ({ match }) => {
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
    token: "",
  });
  const { password, confirmPassword, token } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const clickSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      axios({
        method: "PUT",
        url: `${apiUri()}/user/reset-password`,
        data: { newPassword: password, resetPasswordLink: token },
      })
        .then((response) => {
          console.log("RESET PASSWORD SUCCESS", response);
          toast.success(response.data.message);
          setValues({
            ...values,
            password: "",
            confirmPassword: "",
            token: "",
          });
        })
        .catch((error) => {
          console.log("RESET PASSWORD ERROR", error.response.data);
          toast.error(error.response.data.error);
        });
    } else {
      toast.error("passwords don't match ");
    }
  };
  useEffect(() => {
    setValues({ ...values, token: match.params.token });
  }, []);
  return (
    <div>
      <ToastContainer />
      {isAuth() && <Redirect to="/admin_request" />}
      <b className="screen-overlay" />

      <Header />
      <section className="content-main">
        <div
          className="card shadow mx-auto"
          style={{ maxWidth: "380px", marginTop: "100px" }}
        >
          <div className="card-body">
            <h4 className="card-title mb-4">Reset Password</h4>
            <form>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Password"
                  onChange={handleChange("password")}
                  value={password}
                  type="password"
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder=" Confirm Password"
                  onChange={handleChange("confirmPassword")}
                  value={confirmPassword}
                  type="password"
                />
              </div>

              <div className="mb-4">
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  onClick={clickSubmit}
                >
                  Reset Password
                </button>
              </div>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default RessetPassword;
