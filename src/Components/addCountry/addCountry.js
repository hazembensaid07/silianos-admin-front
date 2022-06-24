import React, { useEffect, useState } from "react";
import HeaderAuth from "../Header/HeaderAuth";
import SideBar from "../SideBar/SideBar";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getCookie } from "../../helpers/helper";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import handleScroll from "../scroll.js";
import apiUri from "../apiUri";

import { deletePhoto, getCountry } from "../../JS/actions/country";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const AddCountry = () => {
  let counter = 0;
  let info = [];

  const [deletei, setDeletei] = useState(1);
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.editReducer.edit);
  const hotell = useSelector((state) => state.countryReducer.country);
  const [hotel, setHotel] = useState({
    name: "",
    disabled: false,
  });
  const [file, setFile] = useState([]);


  const handleChangeFile = (e) => {
    e.preventDefault();
    setFile(e.target.files);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setHotel({ ...hotel, [e.target.id]: e.target.value });
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
      url: `${apiUri()}/country/image`,
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
        } = hotel;
        
        hotel.pictures = pictures;
        hotel.cloudinary_ids = cloudinary_ids;
        if (!edit) {
          axios.defaults.headers.post["Content-Type"] =
            "application/x-www-form-urlencoded";
          axios({
            method: "post",
            url: `${apiUri()}/country/add`,
            data: hotel,
            headers: {
              authorization: token,
            },
          })
            .then((response) => {
              toast.success("new Country added");
              setFile([]);
              setHotel({
                name: "",
              });
              
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
          };
          hotelll.id = hotell._id;
          hotelll.cloudinary_ids = cloudinary_ids;
          hotelll.pictures = pictures;

          axios.defaults.headers.post["Content-Type"] =
            "application/x-www-form-urlencoded";
          axios({
            method: "post",
            url: `${apiUri()}/country/update`,
            data: hotelll,
            headers: {
              authorization: token,
            },
          })
            .then((response) => {
              toast.success("updated");
              dispatch(getCountry(hotel.name));
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
    } else {
      setHotel({
        name: "",
      });
    }
  }, [edit, hotell]);
  return (
    <div>
      <ToastContainer />

      <b className="screen-overlay" />
      <SideBar />
      <main className="main-wrap">
        <HeaderAuth />
        <section className="content-main" style={{ maxWidth: "720px" }}>
          <div className="content-header">
            <h2 className="content-title">Ajouter Pays</h2>
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
                  {edit ? "Mise à jour" : "Ajouter Pays"}{" "}
                </button>
                <button onClick={(e)=>{e.preventDefault(); console.log(hotell)}}>zlegkeg</button>
              </form>
            </div>
          </div>{" "}
        </section>{" "}
      </main>
    </div>
  );
};

export default AddCountry;
