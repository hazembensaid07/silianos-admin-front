import React from "react";
import HeaderAuth from "../Header/HeaderAuth";
import SideBar from "../SideBar/SideBar";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { maxWidth } from "@mui/system";

const HotelDetails = ({ history }) => {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://res.cloudinary.com/dpkmrsjaa/image/upload/v1649868415/oga1tipumkckppbpwcf3.jpg",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
  ];

  return (
    <div>
      <b className="screen-overlay" />
      <SideBar />
      <main className="main-wrap">
        <HeaderAuth />
        <section className="content-main" style={{ maxWidth: "820px" }}>
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
                  <ImageList
                    sx={{
                      width: 690,
                      height: 450,
                    }}
                    variant="quilted"
                    cols={3}
                    rowHeight={250}
                  >
                    {itemData.map((item) => (
                      <ImageListItem key={item.img}>
                        <img
                          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          alt={item.title}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
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

export default HotelDetails;
