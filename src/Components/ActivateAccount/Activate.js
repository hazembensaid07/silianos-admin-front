import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import apiUri from "../apiUri";
import { Redirect } from "react-router-dom";
import { isAuth } from "../../helpers/helper";
import Header from "../Header/Header";
const Activate = ({ match }) => {
  const [token, setToken] = useState("");
  const clickSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `${apiUri()}/user/account-activation`,
      data: { token },
    })
      .then((response) => {
        console.log("ACCOUNT ACTIVATION", response);
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log("ACCOUNT ACTIVATION ERROR", error.response.data.error);
        toast.error(error.response.data.error);
      });
  };
  useEffect(() => {
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
            <h4 className="card-title mb-4">Welcome to Silianos</h4>
            <form>
              <div className="mb-4">
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  onClick={(e) => {
                    clickSubmit(e);
                  }}
                >
                  Activate Your Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activate;
