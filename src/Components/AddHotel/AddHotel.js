import React, { useEffect, useState } from "react";
import { DefaultEditor } from "react-simple-wysiwyg";
import HeaderAuth from "../Header/HeaderAuth";
import SideBar from "../SideBar/SideBar";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getCookie } from "../../helpers/helper";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import handleScroll from "../scroll.js";
import apiUri from "../apiUri";

import { deletePhoto, getHotel } from "../../JS/actions/hotel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const AddHotel = () => {
  let counter = 0;
  let info = [];

  const [description, setDescription] = React.useState('');

  const [formFields, setFormFields] = useState([
    {
      datedebut: "", datefin: "", pricelpdadulte: 0, pricedpadulte: 0, pricepcadulte: 0, priceallinsoftadulte: 0,
      priceallinadulte: 0,
    },
  ]);

  const addFields = (e) => {
    e.preventDefault();
    let object = {
      pricelpdadulte: 0,
      pricedpadulte: 0,
      pricepcadulte: 0,
      priceallinsoftadulte: 0,
      priceallinadulte: 0,
      datedebut: "",
      datefin: "",

    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index, e) => {
    e.preventDefault();
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.id] = event.target.value;
    setFormFields(data);
  };

  function onChangeDescription(e) {
    setDescription(e.target.value);
  }

  const [deletei, setDeletei] = useState(1);
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.editReducer.edit);
  const hotell = useSelector((state) => state.hotelReducer.hotel);
  const [hotel, setHotel] = useState({
    name: "",
    ville: "",
    etoiles: "4",
    logement: [],
    localisation: "",
    best_hotel: false,
    meta_description: "",
    meta_keywords: [],
    meta_title: "",
    reduction_enfant_2ans: 0,
    reduction_enfant_12ans: 0,
    reduction_enfant_adulte: 0,
    reduction_3_lit: 0,
    reduction_4_lit: 0,
    sup_single: 0,
    sup_suite: 0,
    sup_vue_sur_mer: 0,
    discount: 0,
    family_only: true,
    total_chambre: 0,
    autres: 0,
    max_chambre: 0,
    reduction_enfant_single: 0,
    disabled: false,
  });
  const [file, setFile] = useState([]);
  let [logement2, setLog] = useState({
    lpd: false,
    dp: false,
    pc: false,
    all_in_soft: false,
    all_in_hard: false,
  });

  const handleChangeFile = (e) => {
    e.preventDefault();
    setFile(e.target.files);
  };

  const handleChangeArray = (e) => {
    e.preventDefault();
    setHotel({ ...hotel, [e.target.id]: e.target.value.split(",") });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setHotel({ ...hotel, [e.target.id]: e.target.value });
  };
  const handleChange3 = (e) => {
    e.preventDefault();
    if ((e.target.value) == "true")
      setLog({ ...logement2, [e.target.id]: true });
    else
      setLog({ ...logement2, [e.target.id]: false });

  };
  const handleChange2 = (e) => {
    e.preventDefault();
    setDeletei(e.target.value);
  };

  const update = async (e) => {
    const updated = { ...hotel, disabled: true };

    const token = getCookie("token");
    const data = new FormData();
    for (const key of Object.keys(file)) {
      data.append("image", file[key]);
    }

    axios({
      method: "post",
      url: `${apiUri()}/hotel/add-files`,
      data: data,
      headers: {
        authorization: token,
      },
    })
      .then((response) => {

        const cloudinary_ids = response.data.cloudinary_ids;
        const pictures = response.data.pictures;
        console.log(cloudinary_ids);
        console.log(pictures);

        setHotel(updated);
        e.preventDefault();
        const {
          name,
          ville,
          etoiles,
          logement,
          localisation,
          besthotel,
          metadescription,
          metakeywords,
          metatitle,
          reductionenfant2ans,
          reductionenfant12ans,
          reductionenfantadulte,
          reduction3lit,
          reduction4lit,
          supsingle,
          supsuite,
          supvuesurmer,
          discount,
          familyonly,
          totalchambre,
          autres,
          maxchambre,
          reductionenfantsingle,
        } = hotel;
        let loge = "";
        if (logement2.lpd === true) {
          loge += "lpd,";
        }
        if (logement2.dp === true) {
          loge += "dp,";
        }
        if (logement2.pc === true) {
          loge += "pc,";
        }
        if (logement2.all_in_soft === true) {
          loge += "all_in_soft,";
        }
        if (logement2.all_in_hard === true) {
          loge += "all_in_hard,";
        }
        console.log(loge)
        hotel.logement[0] = loge;
        hotel.description = description;
        hotel.prices = formFields;
        hotel.pictures = pictures;
        hotel.cloudinary_ids = cloudinary_ids;

        console.log(hotel);



        if (!edit) {
          axios.defaults.headers.post["Content-Type"] =
            "application/x-www-form-urlencoded";
          axios({
            method: "post",
            url: `${apiUri()}/hotel/add`,
            data: hotel,
            headers: {
              authorization: token,
            },
          })
            .then((response) => {
              toast.success("new Hotel added");
              setFile([]);
              setHotel({
                name: "",
                ville: "",
                etoiles: "4",
                logement: [],
                localisation: "",
                besthotel: false,
                metadescription: "",
                metakeywords: [],
                metatitle: "",
                pricelpdadulte: "",
                pricedpadulte: "",
                pricepcadulte: "",
                priceallinsoftadulte: "",
                priceallinadulte: "",
                reductionenfant2ans: "",
                reductionenfant12ans: "",
                reductionenfantadulte: "",
                reduction3lit: "",
                reduction4lit: "",
                supsingle: "",
                supsuite: "",
                supvuesurmer: "",
                discount: "",
                familyonly: false,
                totalchambre: "",
                autres: "",
                maxchambre: "",
                reductionenfantsingle: "",
                disabled: false,
              });
              setDescription("");
              setFormFields([
                {
                  datedebut: "", datefin: "", pricelpdadulte: 0, pricedpadulte: 0, pricepcadulte: 0, priceallinsoftadulte: 0,
                  priceallinadulte: 0,
                },
              ]);
              handleScroll(e);
            })
            .catch((error) => {
              const updated1 = { ...hotel, disabled: false };
              setHotel(updated1);
              toast.error(error.response.data.error);
            });
        } else {
          let hotelll = {};
          hotelll = {
            name,
            ville,
            etoiles,
            logement,
            localisation,
            besthotel,
            metadescription,
            metakeywords,
            metatitle,
            reductionenfant2ans,
            reductionenfant12ans,
            reductionenfantadulte,
            reduction3lit,
            reduction4lit,
            supsingle,
            supsuite,
            supvuesurmer,
            discount,
            familyonly,
            totalchambre,
            autres,
            maxchambre,
            reductionenfantsingle,
          };
          hotelll.id = hotell._id;
          hotelll.description = description
          hotelll.prices = formFields;
          hotelll.cloudinary_ids = cloudinary_ids;
          hotelll.pictures = pictures;

          axios.defaults.headers.post["Content-Type"] =
            "application/x-www-form-urlencoded";
          axios({
            method: "post",
            url: `${apiUri()}/hotel/update`,
            data: hotelll,
            headers: {
              authorization: token,

            },
          })
            .then((response) => {
              toast.success("updated");
              dispatch(getHotel(hotell._id));
              handleScroll(e);
              const updated6 = { ...hotel, disabled: false };
              setHotel(updated6);
            })
            .catch((error) => {
              const updated2 = { ...hotel, disabled: false };
              setHotel(updated2);
              if (error.response) {
                toast.error(error.response.data.error);
              } else {
                toast.error("Server error");
              }
            });
        }

      })
      .catch((error) => {
        const updated4 = { ...hotel, disabled: false };
        setHotel(updated4);
      });




  };

  useEffect(() => {
    if (edit) {
      setHotel(hotell);

      setDescription(hotell.description);
      setFormFields(hotell.prices);
      console.log(formFields)
      if (hotell.logement) {
        let test = hotell;

        let arr = test.logement[0].split(",");

        let t = {
          lpd: false,
          dp: false,
          pc: false,
          all_in_soft: false,
          all_in_hard: false,
        };

        if (arr.includes("lpd") || arr.includes(" lpd")) {
          t.lpd = true;
        }
        if (arr.includes("dp") || arr.includes(" dp")) {
          t.dp = true;
        }
        if (arr.includes("pc") || arr.includes(" pc")) {
          t.pc = true;
        }
        if (
          arr.includes("all_in_soft") ||
          arr.includes(" all_in_soft") ||
          arr.includes("all in soft") ||
          arr.includes(" all in soft")
        ) {
          t.all_in_soft = true;
        }
        if (
          arr.includes("all_in_hard") ||
          arr.includes(" all_in_hard") ||
          arr.includes("all in hard") ||
          arr.includes(" all in hard")
        ) {
          t.all_in_hard = true;
        }
        setLog(t);
      }
    } else {
      setHotel({
        name: "",
        ville: "",
        etoiles: "4",
        logement: [],
        localisation: "",
        besthotel: false,
        metadescription: "",
        metakeywords: [],
        metatitle: "",
        pricelpdadulte: "",
        pricedpadulte: "",
        pricepcadulte: "",
        priceallinsoftadulte: "",
        priceallinadulte: "",
        reductionenfant2ans: "",
        reductionenfant12ans: "",
        reductionenfantadulte: "",
        reduction3lit: "",
        reduction4lit: "",
        supsingle: "",
        supsuite: "",
        supvuesurmer: "",
        discount: "",
        familyonly: false,
        totalchambre: "",
        autres: "",
        maxchambre: "",
        reductionenfantsingle: "",
      });
      setDescription("");
    }
  }, [edit, hotell, hotell.logement]);
  return (
    <div>
      <ToastContainer />

      <b className="screen-overlay" />
      <SideBar />
      <main className="main-wrap">
        <HeaderAuth />
        <section className="content-main" style={{ maxWidth: "720px" }}>
          <div className="content-header">
            <h2 className="content-title">Ajouter Hotel </h2>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">
                    Nom
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="name"
                    value={hotel.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="form-label">
                    description
                  </label>

                  <DefaultEditor
                    value={description}
                    onChange={onChangeDescription}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="ville" className="form-label">
                    ville
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="ville"
                    value={hotel.ville}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    localisation
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="localisation"
                    value={hotel.localisation}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    reduction_enfant_2ans
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="reductionenfant2ans"
                    value={hotel.reductionenfant2ans}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    reduction_enfant_12ans
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="reductionenfant12ans"
                    value={hotel.reductionenfant12ans}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    reduction_enfant_adulte
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="reductionenfantadulte"
                    value={hotel.reductionenfantadulte}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    reduction_enfant_single
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="reductionenfantsingle"
                    value={hotel.reductionenfantsingle}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    reduction_3_lit
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="reduction3lit"
                    value={hotel.reduction3lit}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    reduction_4_lit
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="reduction4lit"
                    value={hotel.reduction4lit}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    sup_single
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="supsingle"
                    value={hotel.supsingle}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    sup_suite
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="supsuite"
                    value={hotel.supsuite}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    sup_vue_sur_mer
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="supvuesurmer"
                    value={hotel.supvuesurmer}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    remise
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="discount"
                    value={hotel.discount}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    total_chambre
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="totalchambre"
                    value={hotel.totalchambre}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    max_chambre
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="maxchambre"
                    value={hotel.maxchambre}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    autres
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="autres"
                    value={hotel.autres}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    meta_keywords
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="metakeywords"
                    value={hotel.metakeywords}
                    onChange={handleChangeArray}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    meta_description
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="metadescription"
                    value={hotel.metadescription}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    meta_title
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="metatitle"
                    value={hotel.metatitle}
                    onChange={handleChange}
                  />
                </div>

                <div className="row gx-2">
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">LPD</label>
                    <select
                      className="form-select"
                      value={logement2.lpd}
                      onChange={handleChange3}
                      id="lpd"
                    >
                      <option value={true}> vrai </option>
                      <option value={false}> faux </option>
                    </select>
                  </div>
                </div>
                <div className="row gx-2">
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">DP</label>
                    <select
                      className="form-select"
                      value={logement2.dp}
                      onChange={handleChange3}
                      id="dp"
                    >
                      <option value={true}> vrai </option>
                      <option value={false}> faux </option>
                    </select>
                  </div>
                </div>
                <div className="row gx-2">
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">PC</label>
                    <select
                      className="form-select"
                      value={logement2.pc}
                      onChange={handleChange3}
                      id="pc"
                    >
                      <option value={true}> vrai </option>
                      <option value={false}> faux </option>
                    </select>
                  </div>
                </div>
                <div className="row gx-2">
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">ALL_IN_SOFT</label>
                    <select
                      className="form-select"
                      value={logement2.all_in_soft}
                      onChange={handleChange3}
                      id="all_in_soft"
                    >
                      <option value={true}> vrai </option>
                      <option value={false}> faux </option>
                    </select>
                  </div>
                </div>
                <div className="row gx-2">
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">ALL_IN_HARD</label>
                    <select
                      className="form-select"
                      value={logement2.all_in_hard}
                      onChange={handleChange3}
                      id="all_in_hard"
                    >
                      <option value={true}> vrai </option>
                      <option value={false}> faux </option>
                    </select>
                  </div>
                </div>
                <div className="row gx-2">
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">meilleure hotel</label>
                    <select
                      className="form-select"
                      value={hotel.besthotel}
                      onChange={handleChange}
                      id="besthotel"
                    >
                      <option value={true}> vrai </option>
                      <option value={false}> faux </option>
                    </select>
                  </div>
                </div>
                <div className="row gx-2">
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">Seulement pour famille</label>
                    <select
                      className="form-select"
                      value={hotel.familyonly}
                      onChange={handleChange}
                      id="familyonly"
                    >
                      <option value={true}> vrai </option>
                      <option value={false}> faux </option>
                    </select>
                  </div>
                </div>
                <div className="row gx-2">
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">etoiles</label>
                    <select
                      className="form-select"
                      value={hotel.etoiles}
                      onChange={handleChange}
                      id="etoiles"
                    >
                      <option value={1}> 1 </option>
                      <option value={2}> 2 </option>
                      <option value={3}> 3 </option>
                      <option value={4}> 4 </option>
                      <option value={5}> 5 </option>{" "}
                    </select>
                  </div>
                </div>
                <br />
                <br />
                <br />

                {
                  formFields && formFields.map((form, index) => {
                    return (
                      <div key={index}>
                        <div className="row gx-2">
                          <div className="mb-4">
                            <label htmlFor="localisation" className="form-label">
                              datedebut
                            </label>
                            <input
                              type="date"
                              placeholder="Tapez ici"
                              className="form-control"
                              id="datedebut"
                              value={form.datedebut}
                              onChange={(event) => handleFormChange(event, index)}


                            />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="localisation" className="form-label">
                              datefin
                            </label>
                            <input
                              type="date"
                              placeholder="Tapez ici"
                              className="form-control"
                              id="datefin"
                              value={form.datefin}
                              onChange={(event) => handleFormChange(event, index)}

                            />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="localisation" className="form-label">
                              price_lpd_adulte
                            </label>
                            <input
                              type="text"
                              placeholder="Type here"
                              className="form-control"
                              id="pricelpdadulte"
                              value={form.pricelpdadulte}
                              onChange={(event) => handleFormChange(event, index)}
                            />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="localisation" className="form-label">
                              price_dp_adulte
                            </label>
                            <input
                              type="text"
                              placeholder="Type here"
                              className="form-control"
                              id="pricedpadulte"
                              value={form.pricedpadulte}
                              onChange={(event) => handleFormChange(event, index)}
                            />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="localisation" className="form-label">
                              price_pc_adulte
                            </label>
                            <input
                              type="text"
                              placeholder="Type here"
                              className="form-control"
                              id="pricepcadulte"
                              value={form.pricepcadulte}
                              onChange={(event) => handleFormChange(event, index)}
                            />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="localisation" className="form-label">
                              price_all_in_soft_adulte
                            </label>
                            <input
                              type="text"
                              placeholder="Type here"
                              className="form-control"
                              id="priceallinsoftadulte"
                              value={form.priceallinsoftadulte}
                              onChange={(event) => handleFormChange(event, index)}
                            />

                          </div>
                          <div className="mb-4">
                            <label htmlFor="localisation" className="form-label">
                              price_all_in_adulte
                            </label>
                            <input
                              type="text"
                              placeholder="Type here"
                              className="form-control"
                              id="priceallinadulte"
                              value={form.priceallinadulte}
                              onChange={(event) => handleFormChange(event, index)}
                            />
                          </div>

                        </div>{" "}
                        <button
                          className="btn btn-primary"
                          onClick={(e) => removeFields(index, e)}
                        >
                          supprimer
                        </button>
                        <br />
                        <br />
                      </div>

                    );
                  })
                }
                <button className="btn btn-primary" onClick={addFields}>
                  ajouter un autre date
                </button>
                <br />
                <br />
                <br />



                <div className="mb-4">
                  <label className="form-label">Images</label>
                  <input
                    className="form-control"
                    type="file"
                    multiple
                    onChange={handleChangeFile}
                  />
                </div>

                {edit && hotell.pictures && (
                  <div className="mb-4">
                    <ImageList
                      sx={{
                        width: 600,
                        height: 450,
                      }}
                      variant="quilted"
                      cols={3}
                      rowHeight={250}
                    >
                      {hotell.pictures.map((img) => {
                        const body = {};
                        body.id = hotell._id;
                        body.pictureUrl = img;
                        body.imageID = hotell.cloudinary_ids[counter];
                        info[counter] = body;
                        counter++;

                        return (
                          <ImageListItem key={img}>
                            <img
                              src={img}
                              srcSet={`${{
                                img,
                              }}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                              alt="15"
                              loading="lazy"
                            />
                          </ImageListItem>
                        );
                      })}
                    </ImageList>
                  </div>
                )}

                <br />
                {edit && hotell.pictures && (
                  <div className="row gx-2">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">Image to delete</label>
                      <select
                        className="form-select"
                        value={deletei}
                        onChange={handleChange2}
                        id="delete"
                      >
                        {info.map((value, index) => {
                          return <option value={index + 1}>{index + 1}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                )}
                {edit && hotell.pictures && (
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={(e) => {
                      dispatch(
                        deletePhoto(hotell._id, info[parseInt(deletei) - 1])
                      );
                    }}
                  >
                    Supprimer les images selectionés
                  </button>
                )}
                <br />
                <br />
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={update}
                  disabled={hotel.disabled}
                >
                  {edit ? "Mise à jour" : "Ajouter Hotel"}{" "}
                </button>
              </form>
            </div>
          </div>{" "}
        </section>{" "}
      </main>
    </div>
  );
};

export default AddHotel;
