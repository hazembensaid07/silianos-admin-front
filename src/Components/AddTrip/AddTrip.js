import React, { useEffect, useState } from "react";
import HeaderAuth from "../Header/HeaderAuth";
import SideBar from "../SideBar/SideBar";
import { DefaultEditor } from "react-simple-wysiwyg";
import sanitizeHtml from "sanitize-html";

import { deletePhoto, getTrip } from "../../JS/actions/trip";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../helpers/helper";
import axios from "axios";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import handleScroll from "../scroll.js";
import apiUri from "../apiUri";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const AddTrip = () => {
  const [formFields, setFormFields] = useState([
    {
      date: "",
      price: 0,
    },
  ]);

  const addFields = (e) => {
    e.preventDefault();
    let object = {
      date: "",
      price: 0,
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

  const dispatch = useDispatch();
  let counter = 0;
  let info = [];
  const [deletei, setDeletei] = useState(1);
  const edit = useSelector((state) => state.editReducer.edit);
  const tripp = useSelector((state) => state.tripReducer.trip);

  const [trip, setTrip] = React.useState({
    destination: "",
    price: "",
    bestorg: true,
    metadescription: "",
    metakeywords: "",
    metatitle: "",
    disabled: false,
  });

  const [file, setFile] = useState([]);
  const [description, setDescription] = React.useState("");
  const [programme, setProgramme] = React.useState("");

  function onChangeDescription(e) {
    setDescription(sanitizeHtml(e.target.value));
  }
  function onChangeProgramme(e) {
    setProgramme(sanitizeHtml(e.target.value));
  }
  const handleChangeFile = (e) => {
    e.preventDefault();
    setFile(e.target.files);
  };

  const handleChangeArray = (e) => {
    e.preventDefault();
    setTrip({ ...trip, [e.target.id]: e.target.value.split(",") });
  };
  const handleChange = (e) => {
    e.preventDefault();
    setTrip({ ...trip, [e.target.id]: e.target.value });
  };
  const handleChange2 = (e) => {
    e.preventDefault();
    setDeletei(e.target.value);
  };

  const update = async (e) => {
    e.preventDefault();
    let updatedItem = { ...trip, disabled: true };
    setTrip(updatedItem);

    const token = getCookie("token");
    const data = new FormData();
    for (const key of Object.keys(file)) {
      data.append("image", file[key]);
    }

    axios({
      method: "post",
      url: `${apiUri()}/org/add/image`,
      data: data,
      headers: {
        authorization: token,
      },
    })
      .then((response) => {
        const pictures = response.data.pictures;
        const cloudinary_ids = response.data.cloudinary_ids;

        const {
          destination,
          bestorg,
          metadescription,
          metakeywords,
          metatitle,
        } = trip;
        trip.cloudinary_ids = cloudinary_ids;
        trip.pictures = pictures;
        trip.price = formFields;
        trip.description = description;
        trip.programme = programme;

        if (!edit) {
          axios.defaults.headers.post["Content-Type"] =
            "application/x-www-form-urlencoded";
          axios({
            method: "post",
            url: `${apiUri()}/org/add`,
            data: trip,
            headers: {
              authorization: token,
            },
          })
            .then((response) => {
              toast.success("new Trip added");
              setTrip({
                destination: "",
                description: "",
                programme: "",
                price: "",
                bestorg: false,
                metadescription: "",
                metakeywords: "",
                metatitle: "",
                disabled: false,
              });
              setFile([]);
              setFormFields([
                {
                  date: "",
                  price: 0,
                },
              ]);
              handleScroll(e);
            })
            .catch((error) => {
              const updated1 = { ...trip, disabled: false };
              setTrip(updated1);

              if (error.response.data.error) {
                toast.error(error.response.data.error);
              } else {
                toast("error");
              }
            });
        } else {
          let trippp = {};
          trippp = {
            destination,
            bestorg,
            metadescription,
            metakeywords,
            metatitle,
          };
          trippp.id = tripp._id;
          trippp.description = description;
          trippp.programme = programme;
          trippp.price = formFields;
          trippp.cloudinary_ids = cloudinary_ids;
          trippp.pictures = pictures;

          axios.defaults.headers.post["Content-Type"] =
            "application/x-www-form-urlencoded";
          axios({
            method: "post",
            url: `${apiUri()}/org/update`,
            data: trippp,
            headers: {
              authorization: token,
            },
          })
            .then((response) => {
              toast.success("updated");
              dispatch(getTrip(tripp._id));
              handleScroll(e);
            })
            .catch((error) => {
              const updated2 = { ...trip, disabled: false };
              setTrip(updated2);

              toast.error(error.response.data.error);
            });
        }
      })
      .catch((error) => {
        const updated4 = { ...trip, disabled: false };
        setTrip(updated4);
      });
  };

  useEffect(() => {
    if (edit) {
      setTrip(tripp);
      setDescription(tripp.description);
      setProgramme(tripp.programme);
      setFormFields(tripp.price);
    } else {
      setTrip({
        destination: "",
        description: "",
        programme: "",
        price: "",
        bestorg: false,
        metadescription: "",
        metakeywords: "",
        metatitle: "",
        disabled: false,
      });
      setProgramme("");
      setDescription("");
      setFormFields([
        {
          date: "",
          price: 0,
        },
      ]);
    }
  }, [edit, tripp]);
  return (
    <div>
      <ToastContainer />

      <b className="screen-overlay" />
      <SideBar />
      <main className="main-wrap">
        <HeaderAuth />
        <section className="content-main" style={{ maxWidth: "720px" }}>
          <div className="content-header">
            <h2 className="content-title">Ajouter voyage </h2>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">
                    destination
                  </label>
                  <input
                    type="text"
                    placeholder="Tapez ici"
                    className="form-control"
                    id="destination"
                    value={trip.destination}
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
                    programme
                  </label>

                  <DefaultEditor
                    value={programme}
                    onChange={onChangeProgramme}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    meta_keywords
                  </label>
                  <input
                    type="text"
                    placeholder="Tapez ici"
                    className="form-control"
                    id="metakeywords"
                    value={trip.metakeywords}
                    onChange={handleChangeArray}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    meta_description
                  </label>
                  <input
                    type="text"
                    placeholder="Tapez ici"
                    className="form-control"
                    id="metadescription"
                    value={trip.metadescription}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    meta_title
                  </label>
                  <input
                    type="text"
                    placeholder="Tapez ici"
                    className="form-control"
                    id="metatitle"
                    value={trip.metatitle}
                    onChange={handleChange}
                  />
                </div>
                <div className="row gx-2">
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">Meilleure Destination</label>
                    <select
                      className="form-select"
                      value={trip.bestorg}
                      onChange={handleChange}
                      id="bestorg"
                    >
                      <option value={true}> vrai</option>
                      <option value={false}> faux </option>
                    </select>
                  </div>
                </div>
                {formFields &&
                  formFields.map((form, index) => {
                    return (
                      <div key={index}>
                        <div className="row gx-2">
                          <div className="mb-4">
                            <label
                              htmlFor="localisation"
                              className="form-label"
                            >
                              dates
                            </label>
                            <input
                              type="date"
                              placeholder="Tapez ici"
                              className="form-control"
                              id="date"
                              value={form.date}
                              onChange={(event) =>
                                handleFormChange(event, index)
                              }
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="localisation"
                              className="form-label"
                            >
                              prix
                            </label>
                            <input
                              type="text"
                              placeholder="Tapez ici"
                              className="form-control"
                              id="price"
                              value={form.price}
                              onChange={(event) =>
                                handleFormChange(event, index)
                              }
                            />
                          </div>
                        </div>
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
                  })}
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
                {edit && tripp.pictures && (
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
                      {tripp.pictures.map((img) => {
                        const body = {};
                        body.id = tripp._id;
                        body.pictureUrl = img;
                        body.imageID = tripp.cloudinary_ids[counter];
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
                {edit && tripp.pictures && (
                  <div className="row gx-2">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">Supprimer image</label>
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
                {edit && tripp.pictures && (
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={(e) => {
                      dispatch(
                        deletePhoto(tripp._id, info[parseInt(deletei) - 1])
                      );
                    }}
                  >
                    Supprmier les images selectionés{" "}
                  </button>
                )}
                <br />
                <br />

                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={update}
                  disabled={trip.disabled}
                >
                  {edit ? "Mise à jour" : "Ajouter voyages"}{" "}
                </button>
              </form>
            </div>
          </div>{" "}
        </section>{" "}
      </main>
    </div>
  );
};
export default AddTrip;
