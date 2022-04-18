import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderAuth from "../Header/HeaderAuth";
import SideBar from "../SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { getTrips } from "../../JS/actions/trip";
import { toggleFlase } from "../../JS/actions/Edit";

import Trip from "./Trip";
const TripList = ({ history }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const numberOfpages = useSelector((state) => state.tripReducer.pages);
  const pages = new Array(numberOfpages).fill(null).map((v, i) => i);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const trips = useSelector((state) => state.tripReducer.trips);
  const loadTrips = useSelector((state) => state.tripReducer.loadTrips);
  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };
  const gotoNext = () => {
    setPageNumber(Math.min(numberOfpages - 1, pageNumber + 1));
  };
  useEffect(() => {
    dispatch(getTrips(name, pageNumber));
  }, [name, dispatch, pageNumber]);

  return (
    <div>
      <b className="screen-overlay" />
      <SideBar />
      <main className="main-wrap">
        <HeaderAuth />
        <section className="content-main">
          <div className="content-header">
            <h2 className="content-title">Trip List </h2>
            <div>
              <Link
                to={{ pathname: `/add_trip` }}
                onClick={() => {
                  dispatch(toggleFlase());
                }}
                className="btn btn-primary"
              >
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
                    placeholder="Search... By Destination "
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            </header>{" "}
            {/* card-header end// */}
            <div className="card-body">
              <div className="table-responsive">
                {loadTrips && trips.length === 0 && <b>loading</b>}
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Destination</th>
                      <th>price</th>
                      <th>dates</th>
                      <th className="text-end"> Action </th>
                    </tr>
                  </thead>

                  <tbody>
                    {trips.length !== 0 &&
                      trips.map((el) => (
                        <Trip
                          key={el._id}
                          trip={el}
                          name={name}
                          page={pageNumber}
                        />
                      ))}
                  </tbody>
                </table>
                {!loadTrips && trips.length === 0 && <b>There is No Trips </b>}
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

                    {trips.length !== 0 &&
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

export default TripList;
