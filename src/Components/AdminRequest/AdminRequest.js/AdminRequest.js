import React, { useState, useEffect } from "react";
import Header from "../../Header/Header";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import apiUri from "../../apiUri";
import { getCookie } from "../../../helpers/helper";
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
      <ToastContainer />
      <b className="screen-overlay" />
      <Header />
      <section className="content-main">
        <div
          className="card shadow mx-auto"
          style={{ maxWidth: "380px", marginTop: "100px" }}
        >
          <div className="card-body">
            <h4 className="card-title mb-4">Become Sylanos Admin </h4>
            <form>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="enter you account email"
                  onChange={handleChange}
                  value={email}
                  type="email"
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  onClick={clickSubmit}
                >
                  Send Request
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
