import React, { useEffect } from "react";
import HeaderAuth from "../Header/HeaderAuth";
import SideBar from "../SideBar/SideBar";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useDispatch, useSelector } from "react-redux";
import { getHotel } from "../../JS/actions/hotel";

const HotelDetails = ({ location }) => {
  const id = location.state.id;
  const pics = location.state.pictures;
  const dispatch = useDispatch();
  const hotel = useSelector((state) => state.hotelReducer.hotel);
  const loadHotels = useSelector((state) => state.hotelReducer.loadHotels);

  useEffect(() => {
    dispatch(getHotel(id));
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
              {loadHotels ? (
                <h1>Loading</h1>
              ) : (
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="product_name"
                      disabled="disabled"
                      className="form-label"
                    >
                      Hotel Name
                    </label>
                    <p className="form-control" id="product_name">
                      {" "}
                      {hotel.name}
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
                            alt="picture"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Description</label>
                    <p className="form-control" rows={4}>
                      Disponible en :Petit Dejeuner, Demi Pension, Pension
                      complete, All Inclusive Soft
                    </p>
                  </div>
                  <div className="row gx-2">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">Etoiles</label>
                      <p className="form-control" rows={4}>
                        5 étoiles
                      </p>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">Logement </label>
                      <p className="form-control" rows={4}>
                        LPD , DP , PC , ALL_IN_SOFT , ALL_IN_HARD
                      </p>
                    </div>
                  </div>{" "}
                  {/* row.// */}
                  <div className="row gx-2">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">prix_lpd_adulte</label>
                      <p className="form-control" rows={4}>
                        50 DT
                      </p>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label"> prix_dp_adulte</label>
                      <p className="form-control" rows={4}>
                        50 DT
                      </p>
                    </div>
                  </div>{" "}
                  <div className="row gx-2">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">prix_pc_adulte</label>
                      <p className="form-control" rows={4}>
                        50 DT
                      </p>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">
                        {" "}
                        pricx_all_in_soft_adulte
                      </label>
                      <p className="form-control" rows={4}>
                        50 DT
                      </p>
                    </div>
                  </div>{" "}
                  <div className="row gx-2">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">prix_lpd_adulte</label>
                      <p className="form-control" rows={4}>
                        50 DT
                      </p>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label"> prix_dp_adulte</label>
                      <p className="form-control" rows={4}>
                        50 DT
                      </p>
                    </div>
                  </div>{" "}
                  <div className="row gx-2">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">prix_all_in_adulte</label>
                      <p className="form-control" rows={4}>
                        50 DT
                      </p>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">
                        réduction_enfant_2ans
                      </label>
                      <p className="form-control" rows={4}>
                        50 %
                      </p>
                    </div>
                  </div>{" "}
                  <div className="row gx-2">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">
                        réduction_enfant_12ans
                      </label>
                      <p className="form-control" rows={4}>
                        50 %
                      </p>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">
                        réduction_enfant_adulte
                      </label>
                      <p className="form-control" rows={4}>
                        50 %
                      </p>
                    </div>
                  </div>{" "}
                  <div className="row gx-2">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">
                        réduction_enfant_séparé
                      </label>
                      <p className="form-control" rows={4}>
                        50 %
                      </p>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">réduction_3éme_lit</label>
                      <p className="form-control" rows={4}>
                        50 %
                      </p>
                    </div>
                  </div>{" "}
                  <div className="row gx-2">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">réduction_4éme_lit</label>
                      <p className="form-control" rows={4}>
                        50 %
                      </p>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">supp_single</label>
                      <p className="form-control" rows={4}>
                        50 DT
                      </p>
                    </div>
                  </div>{" "}
                  <div className="row gx-2">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">supp_suite</label>
                      <p className="form-control" rows={4}>
                        50 DT
                      </p>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">Discount</label>
                      <p className="form-control" rows={4}>
                        50 %
                      </p>
                    </div>
                  </div>{" "}
                  <div className="row gx-2">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label"> best_hotel</label>
                      <p className="form-control" rows={4}>
                        true
                      </p>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">family_only</label>
                      <p className="form-control" rows={4}>
                        false
                      </p>
                    </div>
                  </div>{" "}
                  <div className="row gx-2">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label"> total_chambre</label>
                      <p className="form-control" rows={4}>
                        200
                      </p>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">
                        {" "}
                        max_personnes_par_chambre
                      </label>
                      <p className="form-control" rows={4}>
                        50
                      </p>
                    </div>
                  </div>{" "}
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

export default HotelDetails;
