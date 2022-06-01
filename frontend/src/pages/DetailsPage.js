import { element } from "prop-types";
import React, { useState } from "react";
import Footer from "../component/Footer";
import Nav from "../component/Nav";
import Signin from "../component/Signin";
import search from "../images/search.jpg";
import "./details.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle";
import { Navigation, Pagination } from "swiper";
import SwiperCard from "../component/SwiperCard";

export default function DetailsPage() {
  const [OpenModel, setOpenModel] = useState(false);
  const [Image, setImage] = useState(true);
  const element = [1, 2, 3, 4];
  return (
    <div className="containers">
      {OpenModel && <Signin closeModel={setOpenModel}></Signin>}

      <header>
        <Nav openModel={setOpenModel}></Nav>
      </header>
      <main>
        <div className="container  ">
          <div className="flex detail-page flex-wrap">
            <div className="flex flex-wrap">
              <div className="flex flex-column details-left">
                <div>
                  <img src={search} className="details-img" alt="house"></img>{" "}
                </div>
                <div className="image-hover-box ">
                  <div className="hover-box-body pd-10">
                    <div>Beautiful land on sale in Gatthaghar, Bhaktpur</div>
                    <div className="flex flex-space align-center mgt-10">
                      <div clasName="">
                        <ion-icon
                          style={{
                            color: "grey",
                            fontSize: "1rem",
                          }}
                          name="location-outline"
                        ></ion-icon>{" "}
                        Kalanki, kathmandu near Makalu Petrol pump
                      </div>
                      <div className="flex flex-column flex-center">
                        <div>
                          <ion-icon
                            style={{
                              color: "rgba(227, 46, 46, 0.85)",
                              fontSize: "2rem",
                            }}
                            name="location-outline"
                          ></ion-icon>
                        </div>
                        <div style={{ color: "rgba(227, 46, 46, 0.85)" }}>
                          view on map
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hover-box-footer flex flex-around">
                    <div className="flex align-center">
                      <div>
                        <ion-icon name="images-outline"></ion-icon>
                      </div>
                      <div>10 Images</div>
                    </div>
                    <div className="flex align-center">
                      <div>
                        <ion-icon name="images-outline"></ion-icon>
                      </div>
                      <div>10 Images</div>
                    </div>
                    <div className="flex align-center">
                      <div>
                        <ion-icon name="images-outline"></ion-icon>
                      </div>
                      <div>10 Images</div>
                    </div>
                  </div>
                </div>
                <div className="information-box flex flex-around align-center">
                  <div>Details</div>
                  <div>Details</div>
                  <div>Details</div>
                </div>
                <div className="flex flex-column box mgt-10">
                  <div className="pd-5 box-header">Details</div>
                  <hr style={{ width: "100%" }}></hr>
                  <div className="details-body pd-5 flex flex-wrap ">
                    <div className="flex align-center pd-5">
                      <div>icon</div>
                      <div className="flex flex-column align-center">
                        <div style={{ color: "#8B8686" }}>Floor</div>
                        <div>2.5 storey</div>
                      </div>
                    </div>
                    <div className="flex align-center pd-5">
                      <div>icon</div>
                      <div className="flex flex-column align-center">
                        <div style={{ color: "#8B8686" }}>Floor</div>
                        <div>2.5 storey</div>
                      </div>
                    </div>
                    <div className="flex align-center pd-5">
                      <div>icon</div>
                      <div className="flex flex-column align-center">
                        <div style={{ color: "#8B8686" }}>Floor</div>
                        <div>2.5 storey</div>
                      </div>
                    </div>
                    <div className="flex align-center pd-5">
                      <div>icon</div>
                      <div className="flex flex-column align-center">
                        <div style={{ color: "#8B8686" }}>Floor</div>
                        <div>2.5 storey</div>
                      </div>
                    </div>
                    <div className="flex align-center pd-5">
                      <div>icon</div>
                      <div className="flex flex-column align-center">
                        <div style={{ color: "#8B8686" }}>Floor</div>
                        <div>2.5 storey</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box mgb-10">
                  <div className="box-header flex">
                    <div
                      className="pd-5"
                      onClick={() => setImage(true)}
                      style={{ cursor: "pointer" }}
                    >
                      {Image ? (
                        <div
                          style={{
                            borderBottom: "0.1rem solid rgba(227,46,46,0.8)",
                            color: "rgba(227,46,46,0.8)",
                          }}
                        >
                          Image
                        </div>
                      ) : (
                        "Image"
                      )}
                    </div>

                    <div
                      className="pd-5"
                      onClick={() => setImage(false)}
                      style={{ cursor: "pointer" }}
                    >
                      {Image ? (
                        "Video"
                      ) : (
                        <div
                          style={{
                            borderBottom: "0.1rem solid rgba(227,46,46,0.8)",
                            color: "rgba(227,46,46,0.8)",
                          }}
                        >
                          Video{" "}
                        </div>
                      )}
                    </div>
                  </div>
                  <hr style={{ width: "100%" }}></hr>
                  <div className="box-body flex flex-wrap flex-space">
                    {Image ? (
                      <div className="image flex flex-wrap ">
                        <img
                          style={{ maxWidth: "12rem", width: "100%" }}
                          src={search}
                          alt="house"
                          className="pd-5"
                        ></img>
                        <img
                          style={{ maxWidth: "12rem" }}
                          src={search}
                          alt="house"
                          className="pd-5"
                        ></img>
                        <img
                          style={{ maxWidth: "12rem" }}
                          src={search}
                          alt="house"
                          className="pd-5"
                        ></img>
                        <img
                          style={{ maxWidth: "12rem" }}
                          src={search}
                          alt="house"
                          className="pd-5"
                        ></img>
                        <img
                          style={{ maxWidth: "12rem" }}
                          src={search}
                          alt="house"
                          className="pd-5"
                        ></img>
                        <img
                          style={{ maxWidth: "12rem" }}
                          src={search}
                          alt="house"
                          className="pd-5"
                        ></img>
                      </div>
                    ) : (
                      <div className="video"></div>
                    )}
                  </div>
                </div>
                <div className="box mgb-10">
                  <div className="pd-5 box-header">Description</div>
                  <hr style={{ width: "100%" }}></hr>
                  <div className="flex flex-column pd-5">
                    <div>one</div>
                    <div>one</div>
                    <div>one</div>
                    <div>one</div>
                  </div>
                </div>
                <div className="box mgb-10">
                  <div className="pd-5 box-header">Features</div>
                  <hr style={{ width: "100%" }}></hr>
                  <div className="flex flex-column pd-5">
                    <div>one</div>
                    <div>one</div>
                    <div>one</div>
                    <div>one</div>
                  </div>
                </div>
              </div>
              <div className="details-right">
                <div className="flex flex-column pd-10">
                  <div className="price right-box mgb-10">
                    <div className="right-box-header">Price</div>
                    <div className="rigbt-box-body">
                      <div>Price: 3 cr</div>
                      <div>Negoatiate Price</div>
                    </div>
                  </div>
                  <div className="contact right-box">
                    <div className="right-box-header">Contact</div>
                    <div className="rigbt-box-body">
                      <div>Property By: Username</div>
                      <div>Contact Number: 986035214</div>
                      <div>Optional Number: 986035214</div>
                      <div>Email: pdlbibash77@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-column" style={{ overflow: "hidden" }}>
              <div
                className="mgt-10 mgb-10"
                style={{
                  color: "rgba(227,46,46,0.8)",
                  fontSize: "1.6rem",
                  fontWeight: "700",
                }}
              >
                Similar Post
              </div>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  500: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  756: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1000: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper flex flex-space flex-wrap"
              >
                {element.map((index) => (
                  <SwiperSlide key={index}>
                    <SwiperCard index={index} key={index}></SwiperCard>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
