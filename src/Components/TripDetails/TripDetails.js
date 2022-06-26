import React, { useEffect, useState } from "react";
import HeaderAuth from "../Header/HeaderAuth";
import SideBar from "../SideBar/SideBar";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useDispatch, useSelector } from "react-redux";
import { DefaultEditor } from "react-simple-wysiwyg";

import { getTrip } from "../../JS/actions/trip";

const TripDetails = ({ location }) => {
  const id = location.state.id;
  const pics = location.state.pictures;
  const best = location.state.best;
  console.log(best);
  const dispatch = useDispatch();
  const trip = useSelector((state) => state.tripReducer.trip);
  const loadTrips = useSelector((state) => state.tripReducer.loadTrips);
  const [bestt, setBest] = useState(false);
  useEffect(() => {
    dispatch(getTrip(id));
    if (best) {
      setBest(true);
    } else {
      setBest(false);
    }
  }, []);
  return (
    <div>
      <b className="screen-overlay" />
      <SideBar />
      <main className="main-wrap">
        <HeaderAuth />
        <section className="content-main" style={{ maxWidth: "820px" }}>
          <div className="card mb-4">
            <div className="card-body">
              {loadTrips ? (
                <h1>Chargement</h1>
              ) : (
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="product_name"
                      disabled="disabled"
                      className="form-label"
                    >
                      Destination
                    </label>
                    <p className="form-control" id="product_name">
                      {trip.destination}
                    </p>
                  </div>
                  <div className="mb-4">
                    <ImageList
                      sx={{
                        width: 690,
                        height: 450,
                      }}
                      variant="quilted"
                      cols={3}
                      rowHeight={250}
                    >
                      {pics.map((item) => (
                        <ImageListItem key={item}>
                          <img
                            src={`${item}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Description</label>
                    <DefaultEditor value={trip.description} />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Programme</label>

                    <DefaultEditor value={trip.programme} />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Dates</label>
                    <p className="form-control" rows={4}>
                      {trip.dates}
                    </p>
                  </div>
                  {trip.price.map((el) => (
                    <div className="row gx-2">
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">Prix</label>
                        <p className="form-control" rows={4}>
                          {el.price}
                        </p>
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">date</label>
                        <p className="form-control" rows={4}>
                          {el.date}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="row gx-2">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">
                        Meilleure Destination{" "}
                      </label>
                      <p className="form-control" rows={4}>
                        {trip.bestorg ? "vrai" : "faux"}
                      </p>
                    </div>
                  </div>
                  {/* row.// */}
                </form>
              )}
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
