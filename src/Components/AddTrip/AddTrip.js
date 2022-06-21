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
  const dispatch = useDispatch();
  let counter = 0;
  let info = [];
  const [deletei, setDeletei] = useState(1);
  const edit = useSelector((state) => state.editReducer.edit);
  const tripp = useSelector((state) => state.tripReducer.trip);

  const [trip, setTrip] = React.useState({
    destination: "",
    price: "",
    dates: "",
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

    const {
      destination,
      price,
      dates,
      bestorg,
      metadescription,
      metakeywords,
      metatitle,
    } = trip;
    trip.description = description;
    trip.programme = programme;
    console.log(trip);
    const token = getCookie("token");

    const data = new FormData();
    for (const key of Object.keys(file)) {
      data.append("image", file[key]);
    }

    if (!edit) {
      axios.defaults.headers.post["Content-Type"] =
        "application/x-www-form-urlencoded";
      axios({
        method: "post",
        url: `${apiUri()}/org/add`,
        data: data,
        headers: {
          authorization: token,
          ...trip,
        },
      })
        .then((response) => {
          toast.success("new Trip added");
          setTrip({
            destination: "",
            description: "",
            programme: "",
            price: "",
            dates: "",
            bestorg: false,
            metadescription: "",
            metakeywords: "",
            metatitle: "",
            disabled: false,
          });
          setFile([]);
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
        price,
        dates,
        bestorg,
        metadescription,
        metakeywords,
        metatitle,
      };
      trippp.id = tripp._id;
      trippp.description = description;
      trippp.programme = programme;
      console.log(trippp);

      axios.defaults.headers.post["Content-Type"] =
        "application/x-www-form-urlencoded";
      axios({
        method: "post",
        url: `${apiUri()}/org/update`,
        data: data,
        headers: {
          authorization: token,
          ...trippp,
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
  };

  useEffect(() => {
    if (edit) {
      setTrip(tripp);
      setDescription(tripp.description);
      setProgramme(tripp.programme);
    } else {
      setTrip({
        destination: "",
        description: "",
        programme: "",
        price: "",
        dates: "",
        bestorg: false,
        metadescription: "",
        metakeywords: "",
        metatitle: "",
        disabled: false,
      });
      setProgramme("");
      setDescription("");
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
                    prix
                  </label>
                  <input
                    type="text"
                    placeholder="Tapez ici"
                    className="form-control"
                    id="price"
                    value={trip.price}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    dates
                  </label>
                  <input
                    type="date"
                    placeholder="Tapez ici"
                    className="form-control"
                    id="dates"
                    value={trip.dates}
                    onChange={handleChange}
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
