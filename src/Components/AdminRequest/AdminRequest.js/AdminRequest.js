import React, { useState } from "react";
import HeaderAuth from "../../Header/HeaderAuth";
import { Redirect } from "react-router-dom";
import { isAuth } from "../../../helpers/helper";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import apiUri from "../../apiUri";
import { getCookie } from "../../../helpers/helper";
import HeaderAuth from "../../Header/HeaderAuth";
const AdminRequest = () => {
  const [email, setEmail] = useState("");
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const clickSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = getCookie("token");
      const options = {
        headers: { authorization: token },
      };
      const result = await axios.post(
        `${apiUri()}/user/request-role`,
        { email },
        options
      );
      toast.success(result.data.msg);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };
  return (
    <div>
      {isAuth().role === "Cn4CgaPX.uD6@gB5" && (
        <Redirect to="admin_dashboard" />
      )}
      <ToastContainer />
      <b className="screen-overlay" />
      <HeaderAuth />
      <section className="content-main">
        <div
          className="card shadow mx-auto"
          style={{ maxWidth: "380px", marginTop: "100px" }}
        >
          <div className="card-body">
            <h4 className="card-title mb-4">Devenir Admin Sylanos </h4>
            <form>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="écrire votre email"
                  onChange={handleChange}
                  value={email}
                  type="email"
                />
              </div>
              <div className="mb-4">
                <button
                  type="soumettre"
                  className="btn btn-primary w-100"
                  onClick={clickSubmit}
                >
                  Envoyer la demande
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminRequest;
