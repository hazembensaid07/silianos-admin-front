import React, { useEffect, useState } from "react";
import HeaderAuth from "../Header/HeaderAuth";
import SideBar from "../SideBar/SideBar";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useDispatch, useSelector } from "react-redux";

import { getCountry } from "../../JS/actions/country.js";

const CountriesDetails = ({ location }) => {
  const id = location.id;
  const pics = location.state.pictures;
  console.log("the id is ->",location.state.id);
  const dispatch = useDispatch();
  const trip = useSelector((state) => state.countryReducer.country);
  const loadTrips = useSelector((state) => state.countryReducer.loadCountries);
  useEffect(() => {
    dispatch(getCountry(id));
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
                      name
                    </label>
                    <p className="form-control" id="product_name">
                      {location.state.id}
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
                          <img src={`${item}?w=164&h=164&fit=crop&auto=format`} alt="nnn" srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </div>{" "}
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

export default CountriesDetails;
