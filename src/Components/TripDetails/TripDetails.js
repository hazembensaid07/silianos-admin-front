import React from "react";
import SideBar from "../SideBar/SideBar";

const TripDetails = () => {
  return (
    <div>
      <b className="screen-overlay" />
      <SideBar />
      <main className="main-wrap">
        <header className="main-header navbar">
          <div className="col-search"></div>
          <div className="col-nav">
            <button
              className="btn btn-icon btn-mobile me-auto"
              data-trigger="#offcanvas_aside"
            >
              {" "}
              <i className="md-28 material-icons md-menu" />{" "}
            </button>
            <ul className="nav">
              <li className="nav-item">
                <a
                  className="nav-link btn-icon"
                  onclick="darkmode(this)"
                  title="Dark mode"
                  href="#"
                >
                  {" "}
                  <i className="material-icons md-nights_stay" />{" "}
                </a>
              </li>

              <li className="dropdown nav-item">
                <a
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                >
                  {" "}
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item text-danger" href="#">
                    Exit
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </header>
        <section className="content-main" style={{ maxWidth: "720px" }}>
          <div className="card mb-4">
            <div className="card-body">
              <form>
                <div className="mb-4">
                  <label htmlFor="product_name" className="form-label">
                    Product title
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="form-control"
                    id="product_name"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">Full description</label>
                  <textarea
                    placeholder="Type here"
                    className="form-control"
                    rows={4}
                    defaultValue={""}
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">Images</label>
                  <input className="form-control" type="file" />
                </div>
                <div className="mb-4">
                  <label htmlFor="product_name" className="form-label">
                    Tags
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="row gx-2">
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">Category</label>
                    <select className="form-select">
                      <option> Automobiles </option>
                      <option> Home items </option>
                      <option> Electronics </option>
                      <option> Smartphones </option>
                      <option> Sport items </option>
                      <option> Baby and Tous </option>
                    </select>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">Sub-category</label>
                    <select className="form-select">
                      <option> Nissan </option>
                      <option> Honda </option>
                      <option> Mercedes </option>
                      <option> Chevrolet </option>
                    </select>
                  </div>
                </div>{" "}
                {/* row.// */}
                <div className="mb-4">
                  <label className="form-label">Price</label>
                  <div className="row gx-2">
                    <div className="col-4">
                      <input
                        placeholder="Type"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="col-2">
                      <select className="form-select">
                        <option> USD </option>
                        <option> EUR </option>
                        <option> RUBL </option>
                      </select>
                    </div>
                  </div>{" "}
                  {/* row.// */}
                </div>
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

export default TripDetails;
