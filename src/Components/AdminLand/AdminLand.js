import React from "react";
import SideBar from "../SideBar/SideBar";

const AdminLand = () => {
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
                    <h6 className="mb-1">Total Hotels</h6> <span>50</span>
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
                    <h6 className="mb-1">Total Trips</h6> <span>20</span>
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
                    <h6 className="mb-1">Total Vouchers</h6> <span>50</span>
                  </div>
                </article>
              </div>{" "}
              {/*  end// */}
            </div>{" "}
            {/* col end// */}
          </div>{" "}
          {/* row end// */}
          {/* row end// */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Latest Vouchers</h5>
              <div className="table-responsive">
                <table className="table table-hover">
                  <tbody>
                    <tr>
                      <td>2323</td>
                      <td>
                        <b>Devon Lane</b>
                      </td>
                      <td>devon@example.com</td>
                      <td>$778.35</td>
                      <td>
                        <span className="badge rounded-pill alert-success">
                          Delivered
                        </span>
                      </td>
                      <td>07.05.2020</td>
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
                          </div>
                        </div>{" "}
                        {/* dropdown //end */}
                      </td>
                    </tr>
                    <tr>
                      <td>2323</td>
                      <td>
                        <b>Devon Lane</b>
                      </td>
                      <td>devon@example.com</td>
                      <td>$778.35</td>
                      <td>
                        <span className="badge rounded-pill alert-success">
                          Delivered
                        </span>
                      </td>
                      <td>07.05.2020</td>
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
                          </div>
                        </div>{" "}
                        {/* dropdown //end */}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>{" "}
              {/* table-responsive end// */}
            </div>{" "}
            {/* card-body end// */}
          </div>{" "}
          {/* card end// */}
        </section>{" "}
        {/* content-main end// */}
      </main>
    </div>
  );
};

export default AdminLand;
