import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signout } from "../../helpers/helper";
import SideBar from "../SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import Reservation from "./reservation";
import {
  getReservations,getVerified
} from "../../JS/actions/reservation";
const Reservationlist = ({ history }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [hotel, setHotel] = useState("");
  const [show, setShow] = useState(0);
  const numberOfpages = useSelector((state) => state.reservationReducer.pages);
  const pages = new Array(numberOfpages).fill(null).map((v, i) => i);
  const [cin, setCin] = useState("");
  const dispatch = useDispatch();
  const vouchers = useSelector((state) => state.reservationReducer.reservations);
  const loadVouchers = useSelector(
    (state) => state.reservationReducer.loadVouchers
  );
  const handleChange = (event) => {
    setHotel(event.target.value);
  };
  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };
  const gotoNext = () => {
    setPageNumber(Math.min(numberOfpages - 1, pageNumber + 1));
  };
  const clickVerified=(event)=>{
    setShow(1);
    setPageNumber(0);
  }
  const clickNotVerified=(event)=>{
    setShow(2);
    setPageNumber(0);
  }

  const clickAll = (event) => {
    setCin("")
    setShow(0);
    setPageNumber(0);
  };
  useEffect(() => {
    if (show === 0) {
      dispatch(getReservations(cin, pageNumber));
    }
    if (show === 1) {
      dispatch(getVerified("true", pageNumber));
    }
    if(show===2){
      dispatch(getVerified("false",pageNumber))
    }
  }, [cin, dispatch, show, pageNumber]);

  return (
    <div>
      <b className="screen-overlay" />
      <SideBar />

      <main className="main-wrap">
        <header className="main-header navbar">
          <div className="col-brand"></div>

          <div className="col-nav">
            <button
              className="btn btn-icon btn-mobile me-auto"
              data-trigger="#offcanvas_aside"
            >
              <i className="md-28 material-icons md-menu" />
            </button>
            <ul className="nav">
              <li className="dropdown nav-item">
                <button className="dropdown-toggle" data-bs-toggle="dropdown">
                  {" "}
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  <button
                    className="dropdown-item text-danger"
                    onClick={() => {
                      signout();
                    }}
                  >
                    Se déconnecter
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </header>
        <section className="content-main">
          <div className="content-header">
            <h2 className="content-title">Liste des réservations voyages </h2>

            <div>
              <Link
                to={{ pathname: `/add_reservation` }}
                className="btn btn-primary"
              >
                <i className="material-icons md-plus" /> Ajouter
              </Link>
            </div>
          </div>
          <div className="card mb-4">
            <header className="card-header">
              <div className="row gx-3">
                <div className="col-lg-4 col-md-6 me-auto">
                  <input
                    type="text"
                    placeholder="Chercher..."
                    className="form-control"
                    onChange={(e) => setCin(e.target.value)}
                  />
                </div>

                <div className="col-lg-2 col-6 col-md-3">
                  <div>
                    <button
                      className="btn btn-success"
                      style={{ color: "white" }}
                      onClick={clickVerified}
                    >
                      <i className="material-icons md-plus" /> Vérifié
                    </button>
                  </div>
                </div>
                <div className="col-lg-2 col-6 col-md-3">
                  <div>
                    <button onClick={clickNotVerified} className="btn btn-danger">
                      <i  className="material-icons md-plus" /> Non Vérifié
                    </button>
                  </div>
                </div>
                
                <div className="col-lg-2 col-6 col-md-3">
                  <div>
                    <button className="btn btn-primary" onClick={clickAll}>
                      <i className="material-icons md-plus" /> Afficher tout
                    </button>
                  </div>
                </div>
              </div>
            </header>{" "}
            {/* card-header end// */}
            <div className="card-body">
              <div className="table-responsive">
                {loadVouchers && vouchers.length === 0 && <p></p>}
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Nom</th>
                      <th>Prenom</th>
                      <th>Cin</th>
                      <th>Tel</th>
                      <th>Vérifié</th>
                      <th>Nom Voyage</th>

                      <th className="text-end">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {vouchers.length !== 0 &&
                      vouchers.map((el) => (
                        <Reservation
                          key={el._id}
                          voucher={el}
                          cin={cin}
                          page={pageNumber}
                          vouchers={vouchers.length}
                        />
                      ))}
                  </tbody>
                </table>
                {!loadVouchers && vouchers.length === 0 && (
                  <b>Il n'y a pas de reservation</b>
                )}
              </div>{" "}
              {/* table-responsive end // */}
              {numberOfpages > 1 && (
                <nav className="float-end mt-3" aria-label="Page navigation">
                  <ul className="pagination">
                    {numberOfpages > 1 && (
                      <li className="page-item ">
                        <a
                          className="page-link"
                          onClick={() => {
                            gotoPrevious();
                          }}
                        >
                          Précédent
                        </a>
                      </li>
                    )}

                    {vouchers.length !== 0 &&
                      pages.map((pageIndex) =>
                        pageNumber === pageIndex ? (
                          <li className="page-item active">
                            <a
                              key={pageIndex}
                              className="page-link"
                              onClick={() => {
                                setPageNumber(pageIndex);
                              }}
                            >
                              {pageIndex + 1}
                            </a>
                          </li>
                        ) : (
                          <li className="page-item ">
                            <a
                              key={pageIndex}
                              className="page-link"
                              onClick={() => {
                                setPageNumber(pageIndex);
                              }}
                            >
                              {pageIndex + 1}
                            </a>
                          </li>
                        )
                      )}

                    {numberOfpages > 1 && (
                      <li className="page-item ">
                        <a
                          className="page-link"
                          onClick={() => {
                            gotoNext();
                          }}
                        >
                          suivant
                        </a>
                      </li>
                    )}
                  </ul>
                </nav>
              )}
            </div>{" "}
            {/* card-body end// */}
          </div>{" "}
          {/* card end// */}
        </section>
      </main>
    </div>
  );
};

export default Reservationlist;
