import React from "react";

import HeaderAuth from "../Header/HeaderAuth";
import SideBar from "../SideBar/SideBar";

const AdminList = () => {
  return (
    <div>
      <b className="screen-overlay" />
      <SideBar />
      <main className="main-wrap">
        <HeaderAuth />
        <section className="content-main">
          <div className="content-header">
            <h2 className="content-title">Admin Requests List </h2>
          </div>
          <div className="card mb-4">
            {/* card-header end// */}
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>

                      <th className="text-end"> Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <b>Lace mini dress with faux leather</b>
                      </td>
                      <td>Dresses</td>

                      <td className="text-end">
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
                            <a className="dropdown-item text-success" href="#">
                              Accept
                            </a>
                            <a className="dropdown-item text-danger" href="#">
                              Delete
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

                      <td className="text-end">
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
                            <a className="dropdown-item text-success" href="#">
                              Accept
                            </a>
                            <a className="dropdown-item text-danger" href="#">
                              Delete
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

export default AdminList;
