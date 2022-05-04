import React, { useEffect } from "react";
import HeaderAuth from "../Header/HeaderAuth";
import SideBar from "../SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { getVoucher } from "../../JS/actions/voucher";

const VoucherDeatils = ({ location }) => {
  const id = location.state.id;
  const dispatch = useDispatch();
  const voucher = useSelector((state) => state.voucherReducer.voucher);
  const loadVouchers = useSelector(
    (state) => state.voucherReducer.loadVouchers
  );
  useEffect(() => {
    dispatch(getVoucher(id));
  }, []);
  return (
    <div>
      <b className="screen-overlay" />

      <SideBar />
      <main className="main-wrap">
        <HeaderAuth />
        <section className="content-main">
          <div className="content-header">
            <h2 className="content-title">Voucher details</h2>
          </div>
          {loadVouchers ? (
            <h1>Loading</h1>
          ) : (
            <div className="card">
              <header className="card-header">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <small className="text-muted">
                      {" "}
                      Voucher ID: {voucher._id}
                    </small>
                  </div>
                  <div className="col-lg-6 col-md-6 ms-auto text-md-end">
                    <select
                      className="form-select d-inline-block"
                      style={{ maxWidth: "200px" }}
                    >
                      <option>Change status</option>
                      <option>Awaiting payment</option>
                      <option>Confirmed</option>
                      <option>Shipped</option>
                      <option>Delivered</option>
                    </select>
                    <a className="btn btn-light" href="#">
                      Save
                    </a>
                    <a className="btn btn-secondary ms-2" href="#">
                      <i className="icon material-icons md-print" />
                    </a>
                  </div>
                </div>
              </header>{" "}
              {/* card-header end// */}
              <div className="card-body">
                <div className="row mb-5 order-info-wrap">
                  <div className="col-md-4">
                    <article className="icontext align-items-start">
                      <span className="icon icon-sm rounded-circle bg-primary-light">
                        <i className="text-primary material-icons md-person" />
                      </span>
                      <div className="text">
                        <h6 className="mb-1">Client </h6>
                        <p className="mb-1">
                          {voucher.name} <br /> {voucher.Cin} <br />{" "}
                          {voucher.email} <br /> {voucher.tel}
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="col-md-4">
                    <article className="icontext align-items-start">
                      <span className="icon icon-sm rounded-circle bg-primary-light">
                        <i className="text-primary material-icons md-local_shipping" />
                      </span>
                      <div className="text">
                        <h6 className="mb-1"> Date d'arrivée </h6>
                        <p className="mb-1">{voucher.date_arrivée}</p>
                      </div>
                    </article>
                  </div>
                  <div className="col-md-4">
                    <article className="icontext align-items-start">
                      <span className="icon icon-sm rounded-circle bg-primary-light">
                        <i className="text-primary material-icons md-place" />
                      </span>
                      <div className="text">
                        <h6 className="mb-1">Date de Départ </h6>
                        <p className="mb-1">{voucher.date_départ}</p>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <div className="table-responsive">
                      <form>
                        <div className="row gx-2">
                          <div className="col-sm-6 mb-3">
                            <label className="form-label">Hotel Name </label>
                            <p className="form-control" rows={4}>
                              {voucher.hotelName}
                            </p>
                          </div>
                          <div className="col-sm-6 mb-3">
                            <label className="form-label">Logement </label>
                            <p className="form-control" rows={4}>
                              {voucher.logement}
                            </p>
                          </div>
                        </div>{" "}
                        <div className="mb-4">
                          <label
                            htmlFor="product_name"
                            disabled="disabled"
                            className="form-label"
                          >
                            Nombre de nuits
                          </label>
                          <p className="form-control" id="product_name">
                            {" "}
                            {voucher.nuits}
                          </p>
                        </div>
                        <div className="mb-4">
                          <table className="table border table-hover table-lg">
                            <thead>
                              <tr>
                                <th width="40%">Room </th>
                                <th width="20%">Nombres Adultes </th>
                                <th width="20%">Nombre Enfants -12 ans</th>
                                <th width="20%">Nombre Enfants -2 ans</th>
                              </tr>
                            </thead>
                            <tbody></tbody>
                          </table>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box shadow-sm bg-light">
                      <h6>Payment info</h6>
                      <p>
                        Paid_Agency : {voucher.paidAgency ? true : false} <br />
                        Paid_Hotel : {voucher.paidHotel ? true : false} <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default VoucherDeatils;
