import React, { useEffect, useState } from "react";
import HeaderAuth from "../Header/HeaderAuth";
import SideBar from "../SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import {
  getVoucher,
  validateVoucher,
  validateVoucherHotel,
  validateVoucherAccompte,
} from "../../JS/actions/voucher";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Room from "./room";
const VoucherDeatils = ({ location }) => {
  const [show, setShow] = useState(0);
  const [accompte, setAccompte] = useState(0);

  const id = location.state.id;
  const rooms = location.state.rooms;
  const dispatch = useDispatch();
  const voucher = useSelector((state) => state.voucherReducer.voucher);
  console.log(voucher);
  const error = useSelector((state) => state.voucherReducer.error);
  const loadVouchers = useSelector(
    (state) => state.voucherReducer.loadVouchers
  );
  const handleChange = (event) => {
    event.preventDefault();
    setAccompte(event.target.value);
  };
  const validateAgencyPaymentt = (event, id) => {
    event.preventDefault();
    try {
      if (voucher.paidAgency) {
        toast.error("déjà validé");
      } else {
        dispatch(validateVoucher(id));
        setShow(3);
        toast.success("validé");
      }
    } catch (err) {
      toast.error(error);
    }
  };
  const validateAgencyPaymenttAcoompte = (event, id, accompte) => {
    event.preventDefault();
    try {
      if (voucher.accompte > 0) {
        toast.error("déjà validé");
      }
      if (voucher.paidAgency) {
        toast.error("déjà validé");
      } else {
        dispatch(validateVoucherAccompte(id, accompte));
        setShow(2);
        toast.success("validé");
      }
    } catch (err) {
      toast.error(error);
    }
  };

  const validateHotelPaymentt = (event, id) => {
    event.preventDefault();
    try {
      if (voucher.paidHotel) {
        toast.error("déjà validé");
      } else if (!voucher.paidAgency) {
        toast.error("Agence non payé");
      } else {
        dispatch(validateVoucherHotel(id));
        setShow(1);
        toast.success("validé");
      }
    } catch (err) {
      toast.error(error);
    }
  };
  useEffect(() => {
    dispatch(getVoucher(id));
  }, [show]);
  return (
    <div>
      <ToastContainer />
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
                    <button
                      className="btn btn-light"
                      onClick={(event) => {
                        validateAgencyPaymentt(event, id);
                      }}
                    >
                      valider paiement total
                    </button>

                    <button
                      className="btn btn-light"
                      onClick={(event) => {
                        validateHotelPaymentt(event, id);
                      }}
                    >
                      valider hotel
                    </button>
                    <a
                      className="btn btn-secondary ms-2"
                      target="_blank"
                      href={voucher.pdfUrl}
                      rel="noreferrer"
                    >
                      <i className="icon material-icons md-print" />
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-6 ms-auto text-md-end">
                    <input
                      onChange={handleChange}
                      value={accompte}
                      type="text"
                      className="form-control"
                      placeholder="accompte"
                    />
                    <button
                      className="btn btn-light"
                      onClick={(event) => {
                        validateAgencyPaymenttAcoompte(event, id, accompte);
                      }}
                    >
                      valider paiement d'un accompte
                    </button>
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
                      <div className="text">
                        <h6 className="mb-1"> Date d'arrivée </h6>
                        <p className="mb-1">{voucher.date_arrivée}</p>
                      </div>
                    </article>
                  </div>
                  <div className="col-md-4">
                    <article className="icontext align-items-start">
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
                              {voucher.nomHotel}
                            </p>
                          </div>

                          <div className="col-sm-6 mb-3">
                            <label className="form-label">Prix total </label>
                            <p className="form-control" rows={4}>
                              {voucher.price}
                            </p>
                          </div>
                          <div className="col-sm-6 mb-3">
                            <label className="form-label">Accompte</label>
                            <p className="form-control" rows={4}>
                              {voucher.accompte}
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
                        <div className="table-responsive">
                          <table className="table border table-hover table-lg">
                            <thead>
                              <tr>
                                <th width="40%">Room </th>
                                <th width="20%">Nombres Adultes </th>
                                <th width="20%">Nombre Enfants -12 ans</th>
                                <th width="20%">Nombre Enfants -2ans</th>
                                <th width="20%">logement</th>
                              </tr>
                            </thead>
                            <tbody>
                              {rooms.length !== 0 &&
                                rooms.map((el, index) => (
                                  <Room
                                    key={el.index}
                                    room={el}
                                    index={index}
                                  />
                                ))}
                            </tbody>
                          </table>
                        </div>
                        {voucher.occupation !== undefined && (
                          <div className="table-responsive">
                            <table className="table border table-hover table-lg">
                              <thead>
                                <tr>
                                  <th width="20%">Chambre</th>
                                  <th width="20%">Nom</th>
                                  <th width="20%">Prénom</th>
                                  <th width="20%">Civilité</th>
                                  <th width="20%">Type</th>
                                </tr>
                              </thead>
                              <tbody>
                                {voucher.occupation.length !== 0 &&
                                  voucher.occupation.map((el, index) => (
                                    <>
                                      {el.map((ok) => {
                                        return (
                                          <tr>
                                            <td>{ok.chambre}</td>
                                            <td>{ok.lastname}</td>
                                            <td>{ok.firstname}</td>
                                            <td>{ok.civ}</td>
                                            <td>{ok.type}</td>
                                          </tr>
                                        );
                                      })}
                                    </>
                                  ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                        <h4>Message</h4>
                        <p>{voucher.message}</p>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box shadow-sm bg-light">
                      <h6>Payment info</h6>
                      <p>
                        Paid_Agency : {voucher.paidAgency ? "true" : "false"}{" "}
                        <br />
                        Paid_Hotel : {voucher.paidHotel ? "true" : "false"}{" "}
                        <br />
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
