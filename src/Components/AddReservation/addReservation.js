import React, { useState, useEffect } from "react";
import { useFormHandler, Joi } from "react-form-error";
import HeaderAuth from "../Header/HeaderAuth";
import SideBar from "../SideBar/SideBar";
import { getCookie } from "../../helpers/helper";
import axios from "axios";
import apiUri from "../apiUri";
import handleScroll from "../scroll.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Addreservation = () => {
  const [voucher, setVoucher] = useState({
    nom: "",
    prenom: "",
    cin: "",
    tel: "",
    date: "",
    name: "",
    checked: "false",
    price: 0,
    disabled: false,
    message: "",
    occupants:1
  });
  
  const handleChange = (e) => {
    e.preventDefault();
    setVoucher({ ...voucher, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    try {

        e.preventDefault();
        const updated = { ...voucher, disabled: true };
        setVoucher(updated);

        const token = getCookie("token");
        const options = {
          headers: { authorization: token },
        };
        let data = {
            name: voucher.name,
            nom: voucher.nom,
            prenom: voucher.prenom,
            cin: voucher.cin,
            telephone: voucher.tel,
            date: voucher.date,
            checked: voucher.checked,
            price:voucher.price,
            message:voucher.message,
            occupants:voucher.occupants
        };
        await axios.post(`${apiUri()}/reservation/add`, data, options);
        toast.success("La reservation est ajouté");
        setVoucher({
            nom: "",
            prenom: "",
            cin: "",
            tel: "",
            date: "",
            name: "",
            checked: "false",
            price: 0,
            disabled: false,
            message: "",
            occupants:1
        });
        handleScroll(e);
      
    } catch (error) {
      const updated1 = { ...voucher, disabled: false };
      setVoucher(updated1);
      toast.error(error.response.data.error);
    }
  };
  return (
    <div>
      <ToastContainer />

      <b className="screen-overlay" />
      <SideBar />
      <main className="main-wrap">
        <HeaderAuth />
        <section className="content-main" style={{ maxWidth: "800px" }}>
          <div className="content-header">
            <h2 className="content-title">Ajouter Reservation </h2>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <form>
              <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    Voyage
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="name"
                    value={voucher.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    Nom
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="nom"
                    value={voucher.nom}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    Prenom
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="prenom"
                    value={voucher.prenom}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    Cin
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="cin"
                    value={voucher.cin}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    Téléphone
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="tel"
                    value={voucher.tel}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    Date
                  </label>
                  <input
                    type="date"
                    placeholder="Type here"
                    className="form-control"
                    id="date"
                    value={voucher.date}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    Occupants
                  </label>
                  <input
                    type="number"
                    min="1"
                    placeholder="Type here"
                    className="form-control"
                    id="occupants"
                    value={voucher.occupants}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    Prix Total du reservation
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="price"
                    value={voucher.price}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    Message
                  </label>
                  <textarea
                    type="text"
                    placeholder="entrer une remarque sur votre séjour"
                    className="form-control"
                    id="message"
                    value={voucher.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Reservation vérifié</label>
                  <select
                    className="form-select"
                    value={voucher.checked}
                    onChange={handleChange}
                    id="checked"
                  >
                    <option value="false"> false </option>
                    <option value="true"> true </option>
                  </select>
                </div>
                <br />
                <br />
               
                <button
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  type="button"
                  disabled={voucher.disabled}
                >
                  ajouter
                </button>
              </form>
            </div>
          </div>{" "}
        </section>{" "}
      </main>
    </div>
  );
  
};

export default Addreservation;
