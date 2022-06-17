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
import { v4 as uuidv4 } from "uuid";
const schema = {
  name: Joi.string().required().min(4),
  email: Joi.string().required().email(),
  Cin: Joi.string().required().min(8).max(8),
  Tel: Joi.string().required().min(4),
  nuits: Joi.number().integer().min(1),
  nomHotel: Joi.string().required().min(2),
  price: Joi.number().integer().min(1),
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
    nuits: 1,
    nomHotel: "",
    pay: false,
    price: 0,
    disabled: false,
  });
  const [formFields, setFormFields] = useState([
    { nombreAdulte: 0, nombreEnfants2ans: 0, nombreEnfants12ans: 0 },
  ]);
  const [occupation, setOccuation] = useState([]);
  const handleChangeInput = (id, event) => {
    const inputs = occupation.map((el, i) => {
      el.map((ek, k) => {
        if (ek.id === id) {
          ek[event.target.name] = event.target.value;
        }
        return ek;
      });
      return el;
    });
    setOccuation(inputs);
  };

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const addFields = (e) => {
    e.preventDefault();
    let object = {
      nombreAdulte: 0,
      nombreEnfants2ans: 0,
      nombreEnfants12ans: 0,
      logement: "Lpd",
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index, e) => {
    e.preventDefault();
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };
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
      price: voucher.price,
    },
    translator
  );
  const generateOccupation = () => {
    let occupa = [];
    formFields.map((el, chambre) => {
      let occup = [];
      for (let i = 0; i < parseInt(el.nombreAdulte); i++) {
        let obj = {
          id: uuidv4(),
          firstname: "",
          lastname: "",
          civ: "Mr",
          type: "adulte",
          chambre: chambre + 1,
        };
        occup.push(obj);
      }
      for (let i = 0; i < parseInt(el.nombreEnfants2ans); i++) {
        let obj = {
          id: uuidv4(),
          firstname: "",
          lastname: "",
          civ: "Mr",
          type: "enfant -2ans",
          chambre: chambre + 1,
        };
        occup.push(obj);
      }

      for (let i = 0; i < parseInt(el.nombreEnfants12ans); i++) {
        let obj = {
          id: uuidv4(),
          firstname: "",
          lastname: "",
          civ: "Mr",
          type: "enfant -12ans",
          chambre: chambre + 1,
        };
        occup.push(obj);
      }
      occupa.push(occup);
      return null;
    });
    setOccuation(occupa);
  };
  const handleSubmit = async (e) => {
    try {
      const isError = checkErrors();

      if (!isError) {
        e.preventDefault();
        const updated = { ...voucher, disabled: true };
        setVoucher(updated);

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
          paidAgency: voucher.pay,
          tel: voucher.Tel,
          dateD: voucher.dateD,
          rooms: formFields,
          price: voucher.price,
          occupation,
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
          nuits: 1,
          nomHotel: "",
          pay: false,
          price: 0,
          disabled: false,
        });
        setFormFields([
          {
            nombreAdulte: 0,
            nombreEnfants2ans: 0,
            nombreEnfants12ans: 0,
            logement: "lpd",
          },
        ]);
        handleScroll(e);
      }
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
            <h2 className="content-title">Ajouter Voucher </h2>
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
                  <label htmlFor="localisation" className="form-label">
                    Prix Total du voucher
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
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    Chambres:
                  </label>
                </div>
                {formFields.map((form, index) => {
                  return (
                    <div key={index}>
                      <div className="row gx-2">
                        <div className="col-sm-4 mb-3">
                          <label htmlFor="localisation" className="form-label">
                            Nombre des adultes
                          </label>
                          <input
                            name="nombreAdulte"
                            placeholder="nombre adultes"
                            onChange={(event) => handleFormChange(event, index)}
                            value={form.nombreAdulte}
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="col-sm-4 mb-3">
                          <label htmlFor="localisation" className="form-label">
                            Nombre des enfants -12 ans
                          </label>
                          <input
                            name="nombreEnfants12ans"
                            placeholder="nombre enfants -12 ans"
                            onChange={(event) => handleFormChange(event, index)}
                            value={form.nombreEnfants12ans}
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="col-sm-4  mb-3">
                          <label htmlFor="localisation" className="form-label">
                            Nombre des enfants -2 ans
                          </label>
                          <input
                            name="nombreEnfants2ans"
                            placeholder="nombre des enfants -2 ans"
                            onChange={(event) => handleFormChange(event, index)}
                            value={form.nombreEnfants2ans}
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>{" "}
                      <div className="mb-4">
                        <label className="form-label">Type de Logement </label>
                        <select
                          name="logement"
                          className="form-select"
                          onChange={(event) => handleFormChange(event, index)}
                          value={form.logement}
                          id="logement"
                        >
                          <option value={"Lpd"}> Lpd </option>
                          <option value={"Dp"}> Dp </option>
                          <option value={"Pc"}> Pc </option>
                          <option value={"All_In_Soft"}> All_In_Soft </option>
                          <option value={"All_In"}> All_In </option>
                        </select>
                      </div>
                      <button
                        className="btn btn-primary"
                        onClick={(e) => removeFields(index, e)}
                      >
                        supprimer
                      </button>
                    </div>
                  );
                })}
                <br />

                <button className="btn btn-primary" onClick={addFields}>
                  ajouter une autre chambre
                </button>

                <br />
                <br />
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={generateOccupation}
                >
                  générer occupation
                </button>
                <br />
                <br />
                <div>
                  {occupation.map((el, i) => {
                    return (
                      <div key={i}>
                        <h5>Chambre {i + 1}</h5>
                        {el.map((ok, j) => {
                          return (
                            <div className="occupation-chambre-inp">
                              <input
                                name="lastname"
                                placeholder="Nom"
                                onChange={(event) =>
                                  handleChangeInput(ok.id, event)
                                }
                                value={ok.lastname}
                                type="text"
                                className="form-control"
                              />
                              <input
                                name="firstname"
                                placeholder="Prénom"
                                onChange={(event) =>
                                  handleChangeInput(ok.id, event)
                                }
                                value={ok.firstname}
                                type="text"
                                className="form-control"
                              />
                              <select
                                onChange={(event) =>
                                  handleChangeInput(ok.id, event)
                                }
                                name="civ"
                                value={ok.civ}
                              >
                                <option>Mr</option>
                                <option>Mme</option>
                              </select>
                              <input
                                name="type"
                                onChange={(event) =>
                                  handleChangeInput(ok.id, event)
                                }
                                value={ok.type}
                                type="text"
                                className="form-control"
                                disabled
                              />
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>

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

export default AddVocuher;
