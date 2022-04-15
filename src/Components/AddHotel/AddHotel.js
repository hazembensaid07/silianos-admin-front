import React, { useEffect, useState } from "react";
import HeaderAuth from "../Header/HeaderAuth";
import SideBar from "../SideBar/SideBar";
import { useSelector, useDispatch } from "react-redux";
import { addHotel } from "../../JS/actions/hotel";

const AddHotel = ({ history }) => {
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
    family_only: "",
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
    setHotel({ ...hotel, [e.target.id]: e.target.value.split(",") });
  };
  const handleChange = (e) => {
    e.preventDefault();
    setHotel({ ...hotel, [e.target.id]: e.target.value });
  };
  const handleHotel = () => {
    dispatch(addHotel(hotel, file));
  };
  const onChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
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
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleHotel}
                >
                  {edit ? "save changes" : "Add"}
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
