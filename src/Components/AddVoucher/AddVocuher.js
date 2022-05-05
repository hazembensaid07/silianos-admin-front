import React, { useState, useEffect } from "react";
import { useFormHandler, Joi } from "react-form-error";
import HeaderAuth from "../Header/HeaderAuth";
import SideBar from "../SideBar/SideBar";
import { getCookie } from "../../helpers/helper";
import axios from "axios";
import apiUri from "../apiUri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const schema = {
  name: Joi.string().required().min(4),
  email: Joi.string().required().email(),
  Cin: Joi.string().required().min(8).max(8),
  Tel: Joi.string().required().min(4),
  nuits: Joi.number().integer().min(1),
  nomHotel: Joi.string().required().min(2),
};
const translator = (error) => {
  if (error === '"email" is not allowed to be empty')
    return "ajouter une adresse email valide";
  if (error === '"name" is not allowed to be empty') return "ajouter un nom";
  if (error === '"Cin" is not allowed to be empty')
    return "ajouter un Cin valide";
  if (error === '"Tel" is not allowed to be empty')
    return "ajouter le numéro de téléphone";

  if (error === '"nomHotel" is not allowed to be empty')
    return "ajouter le nom de l'hotel";

  return error;
};
const AddVocuher = () => {
  const [voucher, setVoucher] = useState({
    name: "",
    email: "",
    Cin: "",
    Tel: "",
    dateD: "",
    arrive: "",
    logement: "Lpd",
    nuits: 1,
    nomHotel: "",
    pay: false,
  });
  const handleChange = (e) => {
    e.preventDefault();
    setVoucher({ ...voucher, [e.target.id]: e.target.value });
  };
  const { errors, Error, checkErrors } = useFormHandler(
    schema,
    {
      name: voucher.name,
      email: voucher.email,
      Cin: voucher.Cin,
      Tel: voucher.Tel,
      nuits: voucher.nuits,
      nomHotel: voucher.nomHotel,
    },
    translator
  );

  console.log(errors);

  const handleSubmit = async (e) => {
    try {
      const isError = checkErrors();

      if (!isError) {
        e.preventDefault();
        const token = getCookie("token");
        const options = {
          headers: { authorization: token },
        };
        let data = {
          name: voucher.name,
          email: voucher.email,
          Cin: voucher.Cin,
          nuits: voucher.nuits,
          arrive: voucher.arrive,
          nomHotel: voucher.nomHotel,
          logement: voucher.logement,
          paidAgency: voucher.pay,
          tel: voucher.Tel,
          dateD: voucher.dateD,
        };
        await axios.post(`${apiUri()}/voucher/add`, data, options);
        toast.success("Le voucher est ajouté");
        setVoucher({
          name: "",
          email: "",
          Cin: "",
          Tel: "",
          dateD: "",
          arrive: "",
          logement: "Lpd",
          nuits: 1,
          nomHotel: "",
          pay: false,
        });
      }
    } catch (error) {
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
            <h2 className="content-title">Add Voucher </h2>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <form>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    Nom Du Client
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="name"
                    value={voucher.name}
                    onChange={handleChange}
                  />
                  <Error name="name" withStyle />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="email"
                    value={voucher.email}
                    onChange={handleChange}
                  />
                  <Error name="email" withStyle />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    Cin
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="Cin"
                    value={voucher.Cin}
                    onChange={handleChange}
                  />
                  <Error name="Cin" withStyle />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    Téléphone
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="Tel"
                    value={voucher.Tel}
                    onChange={handleChange}
                  />
                  <Error name="Tel" withStyle />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    Nom Hotel
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="nomHotel"
                    value={voucher.nomHotel}
                    onChange={handleChange}
                  />
                  <Error name="nomHotel" withStyle />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    Date d'arrivée
                  </label>
                  <input
                    type="date"
                    placeholder="Type here"
                    className="form-control"
                    id="arrive"
                    value={voucher.arrive}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    Date de Départ
                  </label>
                  <input
                    type="date"
                    placeholder="Type here"
                    className="form-control"
                    id="dateD"
                    value={voucher.dateD}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">Type de Logement </label>
                  <select
                    className="form-select"
                    value={voucher.logement}
                    onChange={handleChange}
                    id="logement"
                  >
                    <option value={"Lpd"}> Lpd </option>
                    <option value={"Dp"}> Dp </option>
                    <option value={"Pc"}> Pc </option>
                    <option value={"All_In_Soft"}> All_In_Soft </option>
                    <option value={"All_In"}> All_In </option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="form-label">Voucher payé (agence) </label>
                  <select
                    className="form-select"
                    value={voucher.pay}
                    onChange={handleChange}
                    id="pay"
                  >
                    <option value={true}> true </option>
                    <option value={false}> false </option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    Nombre des nuits
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="nuits"
                    value={voucher.nuits}
                    onChange={handleChange}
                  />
                  <Error name="nuits" withStyle />
                </div>

                <br />
                <br />
                <button
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  type="button"
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

export default AddVocuher;
