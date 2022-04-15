import React, { useState } from "react";
import HeaderAuth from "../Header/HeaderAuth";
import SideBar from "../SideBar/SideBar";
import { addTrip } from "../../JS/actions/trip";
import { useDispatch } from "react-redux";
import { getCookie } from "../../helpers/helper";

const AddTrip = ({ history }) => {
  const dispatch = useDispatch();

  const [trip, setTrip] = useState({
    destination: "",
    description: "",
    programme: "",
    price: "",
    dates: "",
    best_org: true,
    meta_description: "",
    meta_keywords: "",
    meta_title: "",
  });

  const [file, setFile] = useState({
    selectedeFile: null,
  });

  const handleChangeFile = (e) => {
    e.preventDefault();
    setFile({ ...file, selectedeFile: e.target.files });
  };
  const handleChangeArray = (e) => {
    e.preventDefault();
    setTrip({ ...trip, [e.target.id]: e.target.value.split(",") });
  };
  const handleChange = (e) => {
    e.preventDefault();
    setTrip({ ...trip, [e.target.id]: e.target.value });
  };

  const handleTrip = () => {
    console.log("test");

    console.log(trip);

    dispatch(addTrip(trip, file));
  };
  return (
    <div>
      <b className="screen-overlay" />
      <SideBar />
      <main className="main-wrap">
        <HeaderAuth />
        <section className="content-main" style={{ maxWidth: "720px" }}>
          <div className="content-header">
            <h2 className="content-title">Add Trip </h2>
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
                    placeholder="Type here"
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
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="description"
                    value={trip.description}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="ville" className="form-label">
                    programme
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="programme"
                    value={trip.programme}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="localisation" className="form-label">
                    price
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
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
                    placeholder="Type here"
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
                    placeholder="Type here"
                    className="form-control"
                    id="meta_keywords"
                    value={trip.meta_keywords}
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
                    value={trip.meta_description}
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
                    value={trip.meta_title}
                    onChange={handleChange}
                  />
                </div>
                <div className="row gx-2">
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">best_org</label>
                    <select
                      className="form-select"
                      value={trip.best_org}
                      onChange={handleChange}
                    >
                      <option> true </option>
                      <option> false </option>
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">Images</label>
                  <input
                    className="form-control"
                    type="file"
                    multiple="multiple"
                    onChange={handleChangeFile}
                  />
                </div>

                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleTrip}
                >
                  Submit item
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

export default AddTrip;
