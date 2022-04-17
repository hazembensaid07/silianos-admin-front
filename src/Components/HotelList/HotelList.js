import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderAuth from "../Header/HeaderAuth";
import { useDispatch, useSelector } from "react-redux";
import {
  getHotels,
  getActivesHotels,
  getDisabledHotels,
} from "../../JS/actions/hotel";
import SideBar from "../SideBar/SideBar";
import Hotel from "./Hotel";
import { toggleFlase } from "../../JS/actions/Edit";

const HotelList = ({ history }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [show, setShow] = useState(0);
  const numberOfpages = useSelector((state) => state.hotelReducer.pages);
  const pages = new Array(numberOfpages).fill(null).map((v, i) => i);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotelReducer.hotels);
  const loadHotels = useSelector((state) => state.hotelReducer.loadHotels);
  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };
  const gotoNext = () => {
    setPageNumber(Math.min(numberOfpages - 1, pageNumber + 1));
  };
  const clickActive = (event) => {
    setShow(1);
    setPageNumber(0);
  };
  const clickDisabled = (event) => {
    setShow(2);
    setPageNumber(0);
  };
  const clickAll = (event) => {
    setShow(0);
    setPageNumber(0);
  };
  useEffect(() => {
    if (show === 0) {
      dispatch(getHotels(name, pageNumber));
    }
    if (show === 1) {
      dispatch(getActivesHotels(name, pageNumber));
    }
    if (show === 2) {
      dispatch(getDisabledHotels(name, pageNumber));
    }
  }, [name, dispatch, show, pageNumber]);

  return (
    <div>
      <b className="screen-overlay" />
      <SideBar />
      <main className="main-wrap">
        <HeaderAuth />
        <section className="content-main">
          <div className="content-header">
            <h2 className="content-title">Hotels List </h2>
<<<<<<< HEAD
            <div style={{ marginTop: "10px" }}>
              <Link to={{ pathname: `/add_hotel` }} className="btn btn-primary">
=======
            <div>
              <Link
                to={{ pathname: `/add_hotel` }}
                className="btn btn-primary"
                onClick={() => {
                  dispatch(toggleFlase());
                }}
              >
>>>>>>> origin/master
                <i className="material-icons md-plus" /> Add new
              </Link>
            </div>
          </div>
          <div className="card mb-4">
            <header className="card-header">
              <div className="row gx-3">
                <div className="col-lg-4 col-md-6 me-auto">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="col-lg-2 col-6 col-md-3">
                  <div>
                    <button
                      to={{ pathname: `/add_hotel` }}
                      className="btn btn-success"
                      style={{ color: "white" }}
                      onClick={clickActive}
                    >
                      <i className="material-icons md-plus" /> Active
                    </button>
                  </div>
                </div>
                <div className="col-lg-2 col-6 col-md-3">
                  <div>
                    <button onClick={clickDisabled} className="btn btn-danger">
                      <i className="material-icons md-plus" /> Disabled
                    </button>
                  </div>
                </div>
                <div className="col-lg-2 col-6 col-md-3">
                  <div>
                    <button
                      to={{ pathname: `/add_hotel` }}
                      className="btn btn-primary"
                      onClick={clickAll}
                    >
                      <i className="material-icons md-plus" /> Show All
                    </button>
                  </div>
                </div>
              </div>
            </header>{" "}
            {/* card-header end// */}
            <div className="card-body">
              <div className="table-responsive">
                {loadHotels && hotels.length === 0 && <p></p>}
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Region</th>
                      <th>Status</th>
                      <th>Stars</th>
                      <th className="text-end"> Action </th>
                    </tr>
                  </thead>

                  <tbody>
                    {hotels.length !== 0 &&
                      hotels.map((el) => (
                        <Hotel
                          key={el._id}
                          hotel={el}
                          name={name}
                          hotels={hotels.length}
                          page={pageNumber}
                        />
                      ))}
                  </tbody>
                </table>
                {!loadHotels && hotels.length === 0 && (
                  <b>There is No Hotels </b>
                )}
              </div>{" "}
              {/* table-responsive end // */}
              {numberOfpages > 1 && (
                <nav className="float-end mt-3" aria-label="Page navigation">
                  <ul className="pagination">
                    {numberOfpages > 1 && (
                      <li className="page-item ">
                        <a
                          className="page-link"
                          onClick={() => {
                            gotoPrevious();
                          }}
                        >
                          Previous
                        </a>
                      </li>
                    )}

                    {hotels.length !== 0 &&
                      pages.map((pageIndex) =>
                        pageNumber === pageIndex ? (
                          <li className="page-item active">
                            <a
                              key={pageIndex}
                              className="page-link"
                              onClick={() => {
                                setPageNumber(pageIndex);
                              }}
                            >
                              {pageIndex + 1}
                            </a>
                          </li>
                        ) : (
                          <li className="page-item ">
                            <a
                              key={pageIndex}
                              className="page-link"
                              onClick={() => {
                                setPageNumber(pageIndex);
                              }}
                            >
                              {pageIndex + 1}
                            </a>
                          </li>
                        )
                      )}

                    {numberOfpages > 1 && (
                      <li className="page-item ">
                        <a
                          className="page-link"
                          onClick={() => {
                            gotoNext();
                          }}
                        >
                          next
                        </a>
                      </li>
                    )}
                  </ul>
                </nav>
              )}
            </div>{" "}
            {/* card-body end// */}
          </div>{" "}
          {/* card end// */}
        </section>
      </main>
    </div>
  );
};

export default HotelList;
