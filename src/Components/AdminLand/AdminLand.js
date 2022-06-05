import React, { useState, useEffect } from "react";
import HeaderAuth from "../Header/HeaderAuth";
import SideBar from "../SideBar/SideBar";
import axios from "axios";
import { getCookie } from "../../helpers/helper";
import apiUri from "../apiUri";
const AdminLand = ({ history }) => {
  const [statistics, setStatistics] = useState({
    hotel: 0,
    org: 0,
    voucher: 0,
  });
  const token = getCookie("token");
  const loadStatistics = () => {
    axios({
      method: "GET",
      url: `${apiUri()}/hotel/statistics`,
      headers: {
        authorization: token,
      },
    })
      .then((response) => {
        const { hotel, org, voucher } = response.data;
        setStatistics({ ...statistics, hotel, org, voucher });
      })
      .catch((error) => {
        console.log("error");
      });
  };
  useEffect(() => {
    loadStatistics();
  }, []);
  return (
    <div>
      <b className="screen-overlay" />
      <SideBar />
      <main className="main-wrap">
        <HeaderAuth />
        <section className="content-main">
          <div className="content-header">
            <h2 className="content-title"> Dashboard </h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card card-body mb-4">
                <article className="icontext">
                  <span className="icon icon-sm rounded-circle bg-primary-light">
                    <i className="text-primary material-icons md-monetization_on" />
                  </span>
                  <div className="text">
                    <h6 className="mb-1">Total Hotels</h6>{" "}
                    <span>{statistics.hotel}</span>
                  </div>
                </article>
              </div>{" "}
              {/* card  end// */}
            </div>{" "}
            {/* col end// */}
            <div className="col-lg-4">
              <div className="card card-body mb-4">
                <article className="icontext">
                  <span className="icon icon-sm rounded-circle bg-success-light">
                    <i className="text-success material-icons md-local_shipping" />
                  </span>
                  <div className="text">
                    <h6 className="mb-1">Total Trips</h6>{" "}
                    <span>{statistics.org}</span>
                  </div>
                </article>
              </div>{" "}
              {/* card end// */}
            </div>{" "}
            {/* col end// */}
            <div className="col-lg-4">
              <div className="card card-body mb-4">
                <article className="icontext">
                  <span className="icon icon-sm rounded-circle bg-warning-light">
                    <i className="text-warning material-icons md-shopping_basket" />
                  </span>
                  <div className="text">
                    <h6 className="mb-1">Total Vouchers</h6>{" "}
                    <span>{statistics.voucher}</span>
                  </div>
                </article>
              </div>{" "}
              {/*  end// */}
            </div>{" "}
            {/* col end// */}
          </div>{" "}
          {/* row end// */}
          {/* row end// */}
        </section>{" "}
        {/* content-main end// */}
      </main>
    </div>
  );
};

export default AdminLand;
