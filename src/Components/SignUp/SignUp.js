import React, { useState } from "react";
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
            <h4 className="card-title mb-4">S'inscrire </h4>
            <form>
              <div className="mb-3">
                <label className="form-label">Prénom</label>
                <input
                  onChange={handleChange("name")}
                  value={name}
                  name="name"
                  className="form-control"
                  placeholder="écrire le prénom"
                  type="text"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Nom</label>
                <input
                  required
                  onChange={handleChange("lastName")}
                  value={lastName}
                  className="form-control"
                  placeholder="écrire le nom"
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
                  placeholder="écrire l'email"
                  type="text"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Créer un mot de passe</label>
                <input
                  required
                  onChange={handleChange("password")}
                  value={password}
                  className="form-control"
                  placeholder="écrire le mot de passe"
                  type="mot de passe"
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  onClick={clickSubmit}
                >
                  S'inscrire
                </button>
              </div>
            </form>

            <p className="text-center mb-2">
            Vous avez déjà un compte?
              <Link
                to={{
                  pathname: `/`,
                }}
              >
                Connecter
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
