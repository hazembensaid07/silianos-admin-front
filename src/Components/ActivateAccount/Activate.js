import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import apiUri from "../apiUri";
import { Redirect } from "react-router-dom";
import { isAuth } from "../../helpers/helper";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
const Activate = ({ match }) => {
  const [token, setToken] = useState("");
  const clickSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `${apiUri()}/user/account-activation`,
      //send token in req.body
      data: { token },
    })
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.error);
      });
  };
  useEffect(() => {
    //get token from url params
    let token = match.params.token;
    setToken(token);
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
            <h4 className="card-title mb-4">Bienvenue à Silianos</h4>
            <form>
              <div className="mb-4">
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  onClick={(e) => {
                    clickSubmit(e);
                  }}
                >
                  Activez votre compte
                </button>
              </div>
            </form>
            <p className="text-center mb-2">
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

export default Activate;
