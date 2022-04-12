import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderAuth from "../Header/HeaderAuth";
import SideBar from "../SideBar/SideBar";

const VoucherList = ({ history }) => {
  return (
    <div>
      <b className="screen-overlay" />
      <SideBar />
      <main className="main-wrap">
        <HeaderAuth />
        <section className="content-main">
          <div className="content-header">
            <h2 className="content-title">Vouchers List </h2>
            <div>
              <a href="#" className="btn btn-primary">
                <i className="material-icons md-plus" /> Add new
              </a>
            </div>
          </div>
          <div className="card mb-4">
            <header className="card-header">
              <div className="row gx-3">
                <div className="col-lg-4 col-md-6 me-auto">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="form-control"
                  />
                </div>
                <div className="col-lg-2 col-6 col-md-3">
                  <select className="form-select">
                    <option>Status</option>
                    <option>paid Online </option>
                    <option>paid In Agency </option>
                    <option>paid With Bank </option>
                    <option>not paid </option>
                  </select>
                </div>
              </div>
            </header>{" "}
            {/* card-header end// */}
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>email</th>
                      <th>amount </th>
                      <th>date </th>
                      <th className="text-end"> Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <b>Lace mini dress with faux leather</b>
                      </td>
                      <td>Dresses</td>
                      <td>
                        <span className="badge rounded-pill alert-success">
                          Active
                        </span>
                      </td>
                      <td>03.12.2020</td>
                      <td className="text-end">
                        <a href="#" className="btn btn-light">
                          Detail
                        </a>
                        <div className="dropdown">
                          <a
                            href="#"
                            data-bs-toggle="dropdown"
                            className="btn btn-light"
                          >
                            {" "}
                            <i className="material-icons md-more_horiz" />{" "}
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              View detail
                            </a>
                            <a className="dropdown-item" href="#">
                              Edit info
                            </a>
                            <a className="dropdown-item text-danger" href="#">
                              Delete
                            </a>
                            <a className="dropdown-item text-success" href="#">
                              Validate
                            </a>
                          </div>
                        </div>{" "}
                        {/* dropdown //end */}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Lace mini dress with faux leather</b>
                      </td>
                      <td>Dresses</td>
                      <td>
                        <span className="badge rounded-pill alert-success">
                          Active
                        </span>
                      </td>
                      <td>03.12.2020</td>
                      <td className="text-end">
                        <a href="#" className="btn btn-light">
                          Detail
                        </a>
                        <div className="dropdown">
                          <a
                            href="#"
                            data-bs-toggle="dropdown"
                            className="btn btn-light"
                          >
                            {" "}
                            <i className="material-icons md-more_horiz" />{" "}
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              View detail
                            </a>
                            <a className="dropdown-item" href="#">
                              Edit info
                            </a>
                            <a className="dropdown-item text-danger" href="#">
                              Delete
                            </a>
                            <a className="dropdown-item text-success" href="#">
                              Validate
                            </a>
                          </div>
                        </div>{" "}
                        {/* dropdown //end */}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>{" "}
              {/* table-responsive end // */}
              <nav className="float-end mt-3" aria-label="Page navigation">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>{" "}
            {/* card-body end// */}
          </div>{" "}
          {/* card end// */}
        </section>
      </main>
    </div>
  );
};

export default VoucherList;
