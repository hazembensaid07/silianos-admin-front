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
    //name of the input
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
          //verify that the token and user saved successfully
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
      {isAuth() && <Redirect to="admin_request" />}
      <b className="screen-overlay" />
      <Header />
      <section className="content-main">
        <div
          className="card shadow mx-auto"
          style={{ maxWidth: "380px", marginTop: "100px" }}
        >
          <div className="card-body">
            <h4 className="card-title mb-4">s'identifier</h4>
            <form>
              <div className="mb-3">
                <input
                  onChange={handleChange("email")}
                  value={email}
                  type="email"
                  className="form-control"
                  placeholder="email"
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={handleChange("password")}
                  value={password}
                  type="password"
                  className="form-control"
                  placeholder="Mot de passe"
                />
              </div>
              <div className="mb-3">
                <Link
                  to={{
                    pathname: `/forgotpassword`,
                  }}
                  className="float-end"
                >
                  Mot de passe oublié ?
                </Link>
                <label className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    defaultChecked
                  />
                  <span className="form-check-label">N'oubliez pas</span>
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
                  Se Connecter
                </button>
              </div>
            </form>
            <p className="text-center mb-4">
              Vous n'avez pas de compte ?
              <Link
                to={{
                  pathname: `/signup`,
                }}
              >
                S'inscrire
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
