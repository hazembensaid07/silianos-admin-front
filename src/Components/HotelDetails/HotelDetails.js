import React, { useEffect } from "react";
import HeaderAuth from "../Header/HeaderAuth";
import SideBar from "../SideBar/SideBar";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useDispatch, useSelector } from "react-redux";
import { getHotel } from "../../JS/actions/hotel";
import { DefaultEditor } from "react-simple-wysiwyg";


const HotelDetails = ({ location }) => {
  const id = location.state.id;
  const pics = location.state.pictures;
  const dispatch = useDispatch();
  const hotel = useSelector((state) => state.hotelReducer.hotel);
  const loadHotels = useSelector((state) => state.hotelReducer.loadHotels);
  const logement = location.state.logement;
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
                    >  Nom Hotel                </label>
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
                   
                    <DefaultEditor value={hotel.description} />
                  </div>
                  <div className="row gx-2">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">Etoiles</label>
                      <p className="form-control" rows={4}>
                        {hotel.etoiles}
                      </p>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">Logement </label>
                      <p className="form-control" rows={4}>
                        {logement}
                      </p>
                    </div>
                  </div>{" "}
                  {/* row.// */}
          { hotel.prices.map ((hotel) => ( <div> <div className="row gx-2">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">prix_lpd_adulte</label>
                      <p className="form-control" rows={4}>
                        {hotel.pricelpdadulte}
                      </p>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label"> prix_dp_adulte</label>
                      <p className="form-control" rows={4}>
                        {hotel.pricedpadulte}
                      </p>
                    </div>
                  </div>
                    <div className="row gx-2">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">prix_pc_adulte</label>
                      <p className="form-control" rows={4}>
                        {hotel.pricepcadulte}
                      </p>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">
                        {" "}
                        prix_all_in_soft_adulte
                      </label>
                      <p className="form-control" rows={4}>
                        {hotel.priceallinsoftadulte}
                      </p>
                    </div>
                  </div>{" "}
                  <div className="row gx-2">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">prix_all_in_adulte</label>
                      <p className="form-control" rows={4}>
                        {hotel.priceallinadulte}
                      </p>
                    </div>
                  
                  </div>
                  </div> ))}
                  <div className="col-sm-6 mb-3">
                      <label className="form-label">
                        réduction_enfant_2ans
                      </label>
                      <p className="form-control" rows={4}>
                        {hotel.reductionenfant2ans}
                      </p>
                    </div>
                  <div className="row gx-2">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">
                        réduction_enfant_12ans
                      </label>
                      <p className="form-control" rows={4}>
                        {hotel.reductionenfant12ans}
                      </p>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">
                        réduction_enfant_adulte
                      </label>
                      <p className="form-control" rows={4}>
                        {hotel.reductionenfantadulte}
                      </p>
                    </div>
                  </div>{" "}
                  <div className="row gx-2">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">
                        réduction_enfant_séparé
                      </label>
                      <p className="form-control" rows={4}>
                        {hotel.reductionenfantsingle}
                      </p>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">réduction_3éme_lit</label>
                      <p className="form-control" rows={4}>
                        {hotel.reduction3lit}
                      </p>
                    </div>
                  </div>{" "}
                  <div className="row gx-2">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">réduction_4éme_lit</label>
                      <p className="form-control" rows={4}>
                        {hotel.reduction4lit}
                      </p>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">supp_single</label>
                      <p className="form-control" rows={4}>
                        {hotel.supsingle}
                      </p>
                    </div>
                  </div>{" "}
                  <div className="row gx-2">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">supp_suite</label>
                      <p className="form-control" rows={4}>
                        {hotel.supsuite}
                      </p>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">Remise</label>
                      <p className="form-control" rows={4}>
                        {hotel.discount}
                      </p>
                    </div>
                  </div>{" "}
                  <div className="row gx-2">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label"> Meilleur Hotel</label>
                      <p className="form-control" rows={4}>
                        {hotel.besthotel ? "true" : "false"}
                      </p>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">Seulement pour famille</label>
                      <p className="form-control" rows={4}>
                        {hotel.familyonly ? "true" : "false"}
                      </p>
                    </div>
                  </div>{" "}
                  <div className="row gx-2">
                    <div className="col-sm-6 mb-3">
                      <label className="form-label"> total_chambre</label>
                      <p className="form-control" rows={4}>
                        {hotel.totalchambre}
                      </p>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">
                        {" "}
                        max_personnes_par_chambre
                      </label>
                      <p className="form-control" rows={4}>
                        {hotel.maxchambre}
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
