import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderAuth from "../Header/HeaderAuth";
import SideBar from "../SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import Voucher from "./Voucher";
import {
  getPaidVouchersByhotel,
  getUnpaidVouchersByHotel,
  getVouchersByHotel,
} from "../../JS/actions/voucher";
const VoucherByHotel = ({ location }) => {
  const hotel = location.state.hotel;
  const [pageNumber, setPageNumber] = useState(0);
  const [show, setShow] = useState(0);
  const numberOfpages = useSelector((state) => state.voucherReducer.pages);
  const pages = new Array(numberOfpages).fill(null).map((v, i) => i);
  const [cin, setCin] = useState("");
  const dispatch = useDispatch();
  const vouchers = useSelector((state) => state.voucherReducer.vouchersByHotel);
  const loadVouchers = useSelector(
    (state) => state.voucherReducer.loadVouchers
  );
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
      dispatch(getVouchersByHotel(cin, pageNumber, hotel));
    }
    if (show === 1) {
      dispatch(getPaidVouchersByhotel(cin, pageNumber, hotel));
    }
    if (show === 2) {
      dispatch(getUnpaidVouchersByHotel(cin, pageNumber, hotel));
    }
  }, [cin, dispatch, show, pageNumber]);

  return (
    <div>
      <b className="screen-overlay" />
      <SideBar />
      <main className="main-wrap">
        <HeaderAuth />
        <section className="content-main">
          <div className="content-header">
            {vouchers.length > 0 ? (
              <h2 className="content-title">Voucher List {hotel}</h2>
            ) : (
              <h2 className="content-title">Voucher List </h2>
            )}
          </div>
          <div className="card mb-4">
            <header className="card-header">
              <div className="row gx-3">
                <div className="col-lg-4 col-md-6 me-auto">
                  <input
                    type="text"
                    placeholder="Search..."
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
                      <i className="material-icons md-plus" /> Paid
                    </button>
                  </div>
                </div>
                <div className="col-lg-2 col-6 col-md-3">
                  <div>
                    <button onClick={clickUnpaid} className="btn btn-danger">
                      <i className="material-icons md-plus" /> Unpaid
                    </button>
                  </div>
                </div>
                <div className="col-lg-2 col-6 col-md-3">
                  <div>
                    <button className="btn btn-primary" onClick={clickAll}>
                      <i className="material-icons md-plus" /> Show All
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
                      <th>Name</th>
                      <th>Cin</th>
                      <th>Tel</th>
                      <th>paiement status</th>
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
                  <b>There is No Vouchers </b>
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
                          Previous
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
                          next
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

export default VoucherByHotel;
