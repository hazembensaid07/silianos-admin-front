import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signout } from "../../helpers/helper";
import SideBar from "../SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import Voucher from "./Voucher";
import {
  getVouchers,
  getPaidVouchers,
  getUnpaidVouchers,
} from "../../JS/actions/voucher";
const VoucherList = ({ history }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [hotel, setHotel] = useState("");
  const [show, setShow] = useState(0);
  const numberOfpages = useSelector((state) => state.voucherReducer.pages);
  const pages = new Array(numberOfpages).fill(null).map((v, i) => i);
  const [cin, setCin] = useState("");
  const dispatch = useDispatch();
  const vouchers = useSelector((state) => state.voucherReducer.vouchers);
  const loadVouchers = useSelector(
    (state) => state.voucherReducer.loadVouchers
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
  const clickPaid = (event) => {
    setShow(1);
    setPageNumber(0);
  };
  const clickUnpaid = (event) => {
    setShow(2);
    setPageNumber(0);
  };
  const clickAll = (event) => {
    setShow(0);
    setPageNumber(0);
  };
  useEffect(() => {
    if (show === 0) {
      dispatch(getVouchers(cin, pageNumber));
    }
    if (show === 1) {
      dispatch(getPaidVouchers(cin, pageNumber));
    }
    if (show === 2) {
      dispatch(getUnpaidVouchers(cin, pageNumber));
    }
  }, [cin, dispatch, show, pageNumber]);

  return (
    <div>
      <b className="screen-overlay" />
      <SideBar />

      <main className="main-wrap">
        <header className="main-header navbar">
          <div className="col-search">
            <form className="searchform">
              <div className="input-group">
                <input
                  list="search_terms"
                  type="text"
                  className="form-control"
                  placeholder="search vouchers by hotel "
                  value={hotel}
                  onChange={handleChange}
                />
                <Link
                  className="btn btn-light bg"
                  to={{
                    pathname: `/vouchersbyhotel`,
                    state: { hotel: hotel },
                  }}
                >
                  {" "}
                  <i className="material-icons md-search" />{" "}
                </Link>
              </div>
            </form>
          </div>
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
                    Se d??connecter
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </header>
        <section className="content-main">
          <div className="content-header">
            <h2 className="content-title">Liste des bons d'achat </h2>

            <div>
              <Link
                to={{ pathname: `/add_voucher` }}
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
                      onClick={clickPaid}
                    >
                      <i className="material-icons md-plus" /> Pay??
                    </button>
                  </div>
                </div>
                <div className="col-lg-2 col-6 col-md-3">
                  <div>
                    <button onClick={clickUnpaid} className="btn btn-danger">
                      <i className="material-icons md-plus" /> Impay??
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
                      <th>Cin</th>
                      <th>Tel</th>
                      <th>Statut du paiement</th>
                      <th>Nom Hotel</th>

                      <th className="text-end"> Action </th>
                    </tr>
                  </thead>

                  <tbody>
                    {vouchers.length !== 0 &&
                      vouchers.map((el) => (
                        <Voucher
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
                  <b>Il n'y a pas de bons d'achat </b>
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
                          Pr??c??dent
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

export default VoucherList;
