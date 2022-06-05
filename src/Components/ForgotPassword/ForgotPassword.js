import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { isAuth } from "../../helpers/helper";
import Header from "../Header/Header";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import apiUri from "../apiUri";
const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState("");
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const clickSubmit = (event) => {
    event.preventDefault();

    axios({
      method: "PUT",
      url: `${apiUri()}/user/forgot-password`,
      data: { email },
    })
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((error) => {
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
          style={{ maxWidth: "380px", marginTop: "100px" }}
        >
          <div className="card-body">
            <h4 className="card-title mb-4">                  Réinitialiser le mot de passe
</h4>
            <form>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="email"
                  onChange={handleChange}
                  value={email}
                  type="email"
                />
              </div>{" "}
              <div className="mb-4">
                <button
                  type="soumettre"
                  className="btn btn-primary w-100"
                  onClick={clickSubmit}
                >
                  {" "}
                  Réinitialiser le mot de passe

                </button>
              </div>{" "}
            </form>
            <p className="text-center mb-4">
              <Link
                to={{
                  pathname: `/`,
                }}
              >
                S'identifier
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
