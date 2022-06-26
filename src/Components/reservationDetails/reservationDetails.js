import React, { useEffect, useState } from "react";
import HeaderAuth from "../Header/HeaderAuth";
import SideBar from "../SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import apiUri from "../apiUri";
import {
  getReservation,
} from "../../JS/actions/reservation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
const Reservationdetails = ({ location }) => {
  const [show, setShow] = useState(0);
  const [accompte, setAccompte] = useState(0);

  const id = location.state.id;
  const rooms = location.state.rooms;
  const dispatch = useDispatch();
  const voucher = useSelector((state) => state.reservationReducer.reservation);
  const error = useSelector((state) => state.reservationReducer.error);
  const loadVouchers = useSelector(
    (state) => state.reservationReducer.loadVouchers
  );
  const handleChange = (event) => {
    event.preventDefault();
    setAccompte(event.target.value);
  };
  const validateTrip = (event, id) => {
    axios.post(`${apiUri()}/reservation/check`,{id})
    .then(res=>{if(res.status===200){
        toast.success("reservation est vérifier");
        window.location.reload(false);
    }})
    .catch(error=>{
      toast.error(error.response.data.error);

    })
  };

  useEffect(() => {
    dispatch(getReservation(id));
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
            <h2 className="content-title">Reservation details</h2>
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
                      Reservation ID: {voucher._id}
                    </small>
                  </div>
                  <div className="col-lg-6 col-md-6 ms-auto text-md-end">
                    {voucher.checked==="false" && <button
                      className="btn btn-light"
                      onClick={(event) => {
                        validateTrip(event, voucher._id);
                      }}
                    >
                      valider voyage
                    </button>}

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
                          {voucher.nom} <br /> {voucher.prenom} <br />{" "}
                          {voucher.cin} <br /> {voucher.telephone}
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="col-md-4">
                    <article className="icontext align-items-start">
                      <div className="text">
                        <h6 className="mb-1"> Date</h6>
                        <p className="mb-1">{voucher.date}</p>
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
                            <label className="form-label">Trip Name </label>
                            <p className="form-control" rows={4}>
                              {voucher.name}
                            </p>
                          </div>

                          <div className="col-sm-6 mb-3">
                            <label className="form-label">Prix total </label>
                            <p className="form-control" rows={4}>
                              {voucher.price}
                            </p>
                          </div>
                          <div className="col-sm-6 mb-3">
                            <label className="form-label">Occupants</label>
                            <p className="form-control" rows={4}>
                              {voucher.occupants}
                            </p>
                          </div>
                        </div>{" "}
                        <h4>Message</h4>
                        <p>{voucher.message}</p>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box shadow-sm bg-light">
                      <h6>Trip info</h6>
                      <p>
                        Vérifié : {voucher.checked==="true" ? "oui" : "non"}{" "}
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

export default Reservationdetails;
