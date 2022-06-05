import React from "react";
import HeaderAuth from "../Header/HeaderAuth";
import SideBar from "../SideBar/SideBar";

const AdminLand = ({ history }) => {
  return (
    <div>
      <b className="screen-overlay" />
      <SideBar />
      <main className="main-wrap">
        <HeaderAuth />
        <section className="content-main">
          <div className="content-header">
            <h2 className="content-title"> Tableau de bord
 </h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card card-body mb-4">
                <article className="icontext">
                  <span className="icon icon-sm rounded-circle bg-primary-light">
                    <i className="text-primary material-icons md-monetization_on" />
                  </span>
                  <div className="text">
                    <h6 className="mb-1">Total des hôtels</h6> <span>50</span>
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
                    <h6 className="mb-1">Total des voyages</h6> <span>20</span>
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
                    <h6 className="mb-1">Total des bons</h6> <span>50</span>
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
              <h5 className="card-title">Bons d'achat les plus récents</h5>
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
                        Livré                        </span>
                      </td>
                      <td>07.05.2020</td>
                      <td className="text-end">
                        <a href="#" className="btn btn-light">
                          Details
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
                            Voir le détail

                            </a>
                            <a className="dropdown-item" href="#">
                            Modifier l'information
                            </a>
                            <a className="dropdown-item text-danger" href="#">
                              Supprimer
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
                          Livré
                        </span>
                      </td>
                      <td>07.05.2020</td>
                      <td className="text-end">
                        <a href="#" className="btn btn-light">
                          Details
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
                            Voir le détail
                            </a>
                            <a className="dropdown-item" href="#">
                            Modifier l'information
                            </a>
                            <a className="dropdown-item text-danger" href="#">
                              Supprimer
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
