import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Nav from "../component/Nav";
import "./home.scss";
import "../style.css";
import search from "../images/search.jpg";
import Signin from "../component/Signin";
import Card from "../component/Card";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle";

// import required modules
import { Navigation, Pagination } from "swiper";
import SwiperCard from "../component/SwiperCard";
export default function Home() {
  const [OpenModel, setOpenModel] = useState(false);

  const element = [1, 2, 3, 4];

  return (
    <div className="containers">
      {OpenModel && <Signin closeModel={setOpenModel}></Signin>}
      <header>
        <Nav openModel={setOpenModel}></Nav>
      </header>
      <main>
        <div>
          <div className="main-top ">
            <div className="search-area">
              <div
                style={{
                  fontSize: "2.3rem",
                  color: "rgba(227, 46, 46, 0.85)",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Find the Suitable Palace For You
              </div>
              <div className="search-filter flex">
                <div>House</div>
                <div>Land</div>
                <div>Buy</div>
                <div>Rent</div>
              </div>
              <div className="flex" style={{}}>
                <input
                  style={{
                    outline: "none",
                    border: "solid .1rem rgba(227, 46, 46, 0.85)",
                    borderRadius: ".5rem 0rem 0rem 0.5rem",
                    width: "100%",
                  }}
                  placeholder="Search By local place name, city"
                ></input>
                <div
                  style={{
                    backgroundColor: "rgba(227, 46, 46, 0.85)",
                    fontSize: "2.5rem",
                    border: "1.rem solid rgba(227, 46, 46, 0.85)",
                    borderRadius: "0rem 0.5rem 0.5rem 0rem",
                    padding: "0.2rem .3rem",
                  }}
                >
                  <ion-icon
                    style={{
                      color: "white",
                      fontSize: "2.5rem",
                    }}
                    name="search-outline"
                  ></ion-icon>
                </div>
              </div>
            </div>
            <img className="search-img" src={search} alt="searchimg"></img>{" "}
          </div>
          <div className="container pdb-10">
            <div className="flex flex-column features-list">
              <div className="flex flex-space mgb-10">
                <div
                  style={{
                    fontSize: "1.8rem",
                    color: "rgba(227, 46, 46, 0.85)",
                    fontWeight: "bold",
                  }}
                >
                  Features Listing
                </div>
                <div
                  style={{
                    fontSize: "1.3rem",
                    color: "rgba(227, 46, 46, 0.85)",
                    cursor: "pointer",
                  }}
                >
                  <Link
                    style={{
                      fontSize: "1.3rem",
                      color: "rgba(227, 46, 46, 0.85)",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                    to="/features"
                  >
                    See All
                  </Link>
                </div>
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
                className="mySwiper flex flex-space"
              >
                {element.map((index) => (
                  <SwiperSlide key={index}>
                    <SwiperCard index={index} key={index}></SwiperCard>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="container pdb-10">
            <div className="flex flex-wrap flex-space mgt-10">
              <div className="col-3 our-service mgb-10">
                <div className="service-header">
                  <ion-icon
                    style={{
                      fontSize: "5rem",
                      color: "rgba(227, 46, 46, 0.85)",
                    }}
                    name="home-outline"
                  ></ion-icon>
                </div>
                <div
                  className="service-body"
                  style={{
                    fontSize: "2rem",
                    fontWeight: "600",
                  }}
                >
                  Buy Property
                </div>
                <div
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.4rem",
                    fontWeight: "400",
                  }}
                >
                  Find your place with an immersive photo experience and the
                  most listings, including things you won’t find anywhere else.
                </div>
                <div className="service-footer">
                  <button className="btn hover">Search</button>
                </div>
              </div>
              <div className="col-3 our-service mgb-10">
                <div className="service-header">
                  <ion-icon
                    style={{
                      fontSize: "5rem",
                      color: "rgba(227, 46, 46, 0.85)",
                    }}
                    name="home-outline"
                  ></ion-icon>
                </div>
                <div
                  className="service-body"
                  style={{
                    fontSize: "2rem",
                    fontWeight: "600",
                  }}
                >
                  Sell Property
                </div>
                <div
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.4rem",
                    fontWeight: "400",
                  }}
                >
                  No matter what path you take to sell your home, we can help
                  you navigate a successful sale.
                </div>
                <div className="service-footer">
                  <button className="btn hover">Sell</button>
                </div>
              </div>
              <div className="col-3 our-service mgb-10">
                <div className="service-header">
                  <ion-icon
                    style={{
                      fontSize: "5rem",
                      color: "rgba(227, 46, 46, 0.85)",
                    }}
                    name="home-outline"
                  ></ion-icon>
                </div>
                <div
                  className="service-body"
                  style={{
                    fontSize: "2rem",
                    fontWeight: "600",
                  }}
                >
                  Rent Property
                </div>
                <div
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.4rem",
                    fontWeight: "400",
                  }}
                >
                  We’re creating a seamless online experience – from shopping on
                  the largest rental network, to applying, to paying rent.
                </div>
                <div className="service-footer">
                  <button className="btn hover">Find</button>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="flex flex-column recent-list mgt-10 pdb-10">
              <div className="flex flex-space">
                <div
                  style={{
                    fontSize: "1.8rem",
                    color: "rgba(227, 46, 46, 0.85)",
                    fontWeight: "bold",
                  }}
                >
                  Recent Listing
                </div>
                <div
                  style={{
                    fontSize: "1.3rem",
                    color: "rgba(227, 46, 46, 0.85)",
                    cursor: "pointer",
                  }}
                >
                  <Link
                    style={{
                      fontSize: "1.3rem",
                      color: "rgba(227, 46, 46, 0.85)",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                    to="/Recent Post"
                  >
                    See All
                  </Link>
                </div>
              </div>
              <div
                className="flex flex-space card-responsive mgb-10"
                style={{ overflow: "hidden" }}
              >
                {element.map((index) => (
                  <Card index={index}></Card>
                ))}
              </div>
              <div className="flex flex-center ">
                {" "}
                <button className="btn hover">Load More</button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="flex flex-column recent-list mgt-10 pdb-10">
              <div className="flex flex-space">
                <div
                  style={{
                    fontSize: "1.8rem",
                    color: "rgba(227, 46, 46, 0.85)",
                    fontWeight: "bold",
                  }}
                >
                  Rent Listing
                </div>
                <div
                  style={{
                    fontSize: "1.3rem",
                    color: "rgba(227, 46, 46, 0.85)",
                    cursor: "pointer",
                  }}
                >
                  <Link
                    style={{
                      fontSize: "1.3rem",
                      color: "rgba(227, 46, 46, 0.85)",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                    to="/Recent Post"
                  >
                    See All
                  </Link>
                </div>
              </div>
              <div
                className="flex flex-space card-responsive mgb-10 "
                style={{ overflow: "hidden" }}
              >
                {element.map((index) => (
                  <Card index={index}></Card>
                ))}
              </div>
              <div className="flex flex-center ">
                {" "}
                <button className="btn hover">Load More</button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="flex flex-column recent-list mgt-10 pdb-10">
              <div className="flex flex-space">
                <div
                  style={{
                    fontSize: "1.8rem",
                    color: "rgba(227, 46, 46, 0.85)",
                    fontWeight: "bold",
                  }}
                >
                  Sell Listing
                </div>
                <div
                  style={{
                    fontSize: "1.3rem",
                    color: "rgba(227, 46, 46, 0.85)",
                    cursor: "pointer",
                  }}
                >
                  <Link
                    style={{
                      fontSize: "1.3rem",
                      color: "rgba(227, 46, 46, 0.85)",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                    to="/Recent Post"
                  >
                    See All
                  </Link>
                </div>
              </div>
              <div
                className="flex flex-space card-responsive mgb-10 "
                style={{ overflow: "hidden" }}
              >
                {element.map((index) => (
                  <Card index={index}></Card>
                ))}
              </div>
              <div className="flex flex-center ">
                {" "}
                <button className="btn hover">Load More</button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="flex flex-space text-center primary-color mgt-10 pdt-10 pdb-10">
              <div className="col-4 tag-filter flex flex-column">
                <div style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
                  head
                </div>
                <div>body</div>
              </div>
              <div className="col-4 tag-filter flex flex-column">
                <div style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
                  head
                </div>
                <div>body</div>
              </div>
              <div className="col-4 tag-filter flex flex-column">
                <div style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
                  head
                </div>
                <div>body</div>
              </div>
              <div className="col-4 tag-filter flex flex-column">
                <div style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
                  head
                </div>
                <div>body</div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="flex mgb-10 pdb-10">
              <div className="col-2  house-type flex flex-column  ">
                <div
                  style={{ fontSize: "1.6rem", fontWeight: "bold" }}
                  className="primary-color text-center  pdt-10"
                >
                  List of House For Different Purpose
                </div>
                <div className="flex justify-center mgt-10">
                  <ul style={{ margin: "0", padding: "0" }}>
                    <li>office</li>
                    <li>general</li>
                    <li>appartment</li>
                    <li>genral</li>
                  </ul>
                </div>
              </div>
              <div className="col-2">
                <img style={{ width: "100%" }} src={search} alt="search"></img>
              </div>
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
