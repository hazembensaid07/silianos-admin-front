import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
const TripList = () => {
  return (
    <div>
      <b className="screen-overlay" />
      <SideBar />
      <main className="main-wrap">
        <header className="main-header navbar">
          <div className="col-search"></div>
          <div className="col-nav">
            <button
              className="btn btn-icon btn-mobile me-auto"
              data-trigger="#offcanvas_aside"
            >
              {" "}
              <i className="md-28 material-icons md-menu" />{" "}
            </button>
            <ul className="nav">
              <li className="nav-item">
                <a
                  className="nav-link btn-icon"
                  onclick="darkmode(this)"
                  title="Dark mode"
                  href="#"
                >
                  {" "}
                  <i className="material-icons md-nights_stay" />{" "}
                </a>
              </li>

              <li className="dropdown nav-item">
                <a
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                >
                  {" "}
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item text-danger" href="#">
                    Exit
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </header>
        <section className="content-main">
          <div className="content-header">
            <h2 className="content-title">Trips List </h2>
            <div>
              <Link to={{ pathname: `/add_trip` }} className="btn btn-primary">
                <i className="material-icons md-plus" /> Add new
              </Link>
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
              </div>
            </header>{" "}
            {/* card-header end// */}
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Region</th>

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
                        <Link
                          className="btn btn-light"
                          to={{ pathname: `/trip_details` }}
                        >
                          Detail
                        </Link>
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
                            <Link
                              className="dropdown-item"
                              to={{ pathname: `/update_trip` }}
                            >
                              Edit info
                            </Link>
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
                      <td>
                        <span className="badge rounded-pill alert-success">
                          Active
                        </span>
                      </td>
                      <td>03.12.2020</td>
                      <td className="text-end">
                        <Link
                          className="btn btn-light"
                          to={{ pathname: `/trip_details` }}
                        >
                          Detail
                        </Link>
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
                            <Link
                              className="dropdown-item"
                              to={{ pathname: `/update_trip` }}
                            >
                              Edit info
                            </Link>
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

export default TripList;
