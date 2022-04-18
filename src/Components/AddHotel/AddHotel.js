import React, { useEffect, useState } from "react";
import HeaderAuth from "../Header/HeaderAuth";
import SideBar from "../SideBar/SideBar";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getCookie } from "../../helpers/helper";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import handleScroll from "../scroll.js";
import apiUri from "../Components/apiUri";

import { deletePhoto, getHotel } from "../../JS/actions/hotel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const AddHotel = ({ history }) => {
  let counter = 0;
  let info = [];
  const [deletei, setDeletei] = useState(1);

  const dispatch = useDispatch();
  const edit = useSelector((state) => state.editReducer.edit);
  const hotell = useSelector((state) => state.hotelReducer.hotel);

  const [hotel, setHotel] = useState({
    name: "",
    description: "",
    ville: "",
    etoiles: "",
    logement: [],
    localisation: "",
    best_hotel: false,
    meta_description: "",
    meta_keywords: [],
    meta_title: "",
    price_lpd_adulte: "",
    price_dp_adulte: "",
    price_pc_adulte: "",
    price_all_in_soft_adulte: "",
    price_all_in_adulte: "",
    reduction_enfant_2ans: "",
    reduction_enfant_12ans: "",
    reduction_enfant_adulte: "",
    reduction_3_lit: "",
    reduction_4_lit: "",
    sup_single: "",
    sup_suite: "",
    sup_vue_sur_mer: "",
    discount: "",
    family_only: true,
    total_chambre: "",
    autres: "",
    max_chambre: "",
    reduction_enfant_single: "",
  });
  const [file, setFile] = useState([]);

  const handleChangeFile = (e) => {
    e.preventDefault();
    setFile(e.target.files);
  };

  const handleChangeArray = (e) => {
    e.preventDefault();
    let t = e.target.value.split(",");
    for (let i = 0; i < t.length; i++) {
      setHotel({ ...hotel, [e.target.id[i]]: t[i] });
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setHotel({ ...hotel, [e.target.id]: e.target.value });
  };
  const handleChange2 = (e) => {
    e.preventDefault();
    setDeletei(e.target.value);
  };

  const handleDelete = (id, body) => {
    dispatch(deletePhoto(id, body));
  };
  const onChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      if (hotel.logement.indexOf(e.target.value)) {
        let obj = hotel.logement.slice();
        obj.splice(hotel.logement.indexOf(e.target.value), 1);
      }
      let obj = hotel.logement.slice();
      obj.push(e.target.value);
      setHotel({ ...hotel, logement: obj });
    } else {
      let index = hotel.logement.indexOf(e.target.value);
      let obj = hotel.logement.slice();
      obj.splice(index, 1);
      setHotel({ ...hotel, logement: obj });
    }
  };

  const update = async (e) => {
    e.preventDefault();
    const {
      name,
      description,
      ville,
      etoiles,

      localisation,
      best_hotel,
      meta_description,

      meta_title,
      price_lpd_adulte,
      price_dp_adulte,
      price_pc_adulte,
      price_all_in_soft_adulte,
      price_all_in_adulte,
      reduction_enfant_2ans,
      reduction_enfant_12ans,
      reduction_enfant_adulte,
      reduction_3_lit,
      reduction_4_lit,
      sup_single,
      sup_suite,
      sup_vue_sur_mer,
      discount,
      family_only,
      total_chambre,
      autres,
      max_chambre,

      reduction_enfant_single,
    } = hotel;

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
        url: `${apiUri()}/hotel/add`,
        data: data,
        headers: {
          authorization: token,
          ...hotel,
        },
      })
        .then((response) => {
          toast.success("new Trip added");
          setHotel({
            name: "",
            description: "",
            ville: "",
            etoiles: "",
            logement: [],
            localisation: "",
            best_hotel: false,
            meta_description: "",
            meta_keywords: [],
            meta_title: "",
            price_lpd_adulte: "",
            price_dp_adulte: "",
            price_pc_adulte: "",
            price_all_in_soft_adulte: "",
            price_all_in_adulte: "",
            reduction_enfant_2ans: "",
            reduction_enfant_12ans: "",
            reduction_enfant_adulte: "",
            reduction_3_lit: "",
            reduction_4_lit: "",
            sup_single: "",
            sup_suite: "",
            sup_vue_sur_mer: "",
            discount: "",
            family_only: "",
            total_chambre: "",
            autres: "",
            max_chambre: "",
            reduction_enfant_single: "",
          });
          setFile([]);
          handleScroll(e);
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data.error);
        });
    } else {
      let hotelll = {};
      hotelll = {
        name,
        description,
        ville,
        etoiles,

        localisation,
        best_hotel,
        meta_description,

        meta_title,
        price_lpd_adulte,
        price_dp_adulte,
        price_pc_adulte,
        price_all_in_soft_adulte,
        price_all_in_adulte,
        reduction_enfant_2ans,
        reduction_enfant_12ans,
        reduction_enfant_adulte,
        reduction_3_lit,
        reduction_4_lit,
        sup_single,
        sup_suite,
        sup_vue_sur_mer,
        discount,
        family_only,
        total_chambre,
        autres,
        max_chambre,

        reduction_enfant_single,
      };
      hotelll.id = hotell._id;
      hotelll.logement = [...hotel.logement];
      hotelll.meta_keywords = [...hotel.meta_keywords];

      axios.defaults.headers.post["Content-Type"] =
        "application/x-www-form-urlencoded";
      axios({
        method: "post",
        url: `${apiUri()}/hotel/update`,
        data: data,
        headers: {
          authorization: token,
          ...hotelll,
        },
      })
        .then((response) => {
          toast.success("updated");
          dispatch(getHotel(hotell._id));
          handleScroll(e);
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data.error);
        });
    }
  };

  useEffect(() => {
    edit
      ? setHotel(hotell)
      : setHotel({
          name: "",
          description: "",
          ville: "",
          etoiles: "",
          logement: [],
          localisation: "",
          best_hotel: false,
          meta_description: "",
          meta_keywords: [],
          meta_title: "",
          price_lpd_adulte: "",
          price_dp_adulte: "",
          price_pc_adulte: "",
          price_all_in_soft_adulte: "",
          price_all_in_adulte: "",
          reduction_enfant_2ans: "",
          reduction_enfant_12ans: "",
          reduction_enfant_adulte: "",
          reduction_3_lit: "",
          reduction_4_lit: "",
          sup_single: "",
          sup_suite: "",
          sup_vue_sur_mer: "",
          discount: "",
          family_only: "",
          total_chambre: "",
          autres: "",
          max_chambre: "",
          reduction_enfant_single: "",
        });
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
            <h2 className="content-title">Add Hotel </h2>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">
                    Name
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
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="description"
                    value={hotel.description}
                    onChange={handleChange}
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
                    price_lpd_adulte
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="price_lpd_adulte"
                    value={hotel.price_lpd_adulte}
                    onChange={handleChange}
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
                    id="price_dp_adulte"
                    value={hotel.price_dp_adulte}
                    onChange={handleChange}
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
                    id="price_pc_adulte"
                    value={hotel.price_pc_adulte}
                    onChange={handleChange}
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
                    id="price_all_in_soft_adulte"
                    value={hotel.price_all_in_soft_adulte}
                    onChange={handleChange}
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
                    id="price_all_in_adulte"
                    value={hotel.price_all_in_adulte}
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
                    id="reduction_enfant_2ans"
                    value={hotel.reduction_enfant_2ans}
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
                    id="reduction_enfant_12ans"
                    value={hotel.reduction_enfant_12ans}
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
                    id="reduction_enfant_adulte"
                    value={hotel.reduction_enfant_adulte}
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
                    id="reduction_enfant_single"
                    value={hotel.reduction_enfant_single}
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
                    id="reduction_3_lit"
                    value={hotel.reduction_3_lit}
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
                    id="reduction_4_lit"
                    value={hotel.reduction_4_lit}
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
                    id="sup_single"
                    value={hotel.sup_single}
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
                    id="sup_suite"
                    value={hotel.sup_suite}
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
                    id="sup_vue_sur_mer"
                    value={hotel.sup_vue_sur_mer}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    discount
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
                    id="total_chambre"
                    value={hotel.total_chambre}
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
                    id="max_chambre"
                    value={hotel.max_chambre}
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
                    id="meta_keywords"
                    value={hotel.meta_keywords}
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
                    id="meta_description"
                    value={hotel.meta_description}
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
                    id="meta_title"
                    value={hotel.meta_title}
                    onChange={handleChange}
                  />
                </div>
                <div className="row gx-2">
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">best_hotel</label>
                    <select
                      className="form-select"
                      value={hotel.best_hotel}
                      onChange={handleChange}
                      id="best_hotel"
                    >
                      <option value={true}> true </option>
                      <option value={false}> false </option>
                    </select>
                  </div>
                </div>
                <div className="row gx-2">
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">family_only</label>
                    <select
                      className="form-select"
                      value={hotel.family_only}
                      onChange={handleChange}
                      id="family_only"
                    >
                      <option value={true}> true </option>
                      <option value={false}> false </option>
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
                <div className="mb-4">
                  <label className="form-label">Images</label>
                  <input
                    className="form-control"
                    type="file"
                    multiple
                    onChange={handleChangeFile}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    logement:
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="logement"
                    /*defaultChecked={true}*/
                    value="lpd"
                    onChange={onChange}
                  />
                  <label htmlFor="language1"> lpd</label>
                  <br />
                  <input
                    type="checkbox"
                    name="languages"
                    value="pc"
                    onChange={onChange}
                  />
                  <label htmlFor="language2"> pc</label>
                  <br />
                  <input
                    type="checkbox"
                    name="languages"
                    value="dp"
                    onChange={onChange}
                  />
                  <label htmlFor="language3"> dp</label>
                  <br />
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
                    Deleted Selected image
                  </button>
                )}
                <br />
                <br />
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={update}
                >
                  {edit ? "Save Changes" : "Add Hotel"}{" "}
                </button>
              </form>
            </div>
          </div>{" "}
          {/* card end// */}
        </section>{" "}
        {/* content-main end// */}
      </main>
    </div>
  );
};

export default AddHotel;
