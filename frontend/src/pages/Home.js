import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Nav from "../component/Nav";
import "./home.scss";
import search from "../images/search.jpg";
import Signin from "../component/Signin";
import Card from "../component/Card";

export default function Home() {
  const [OpenModel, setOpenModel] = useState(false);
  const element = [1, 2, 3, 4, 5];
  return (
    <div className="containers">
      {OpenModel && <Signin closeModel={setOpenModel}></Signin>}
      <header>
        <Nav openModel={setOpenModel}></Nav>
      </header>
      <main>
        <div>
          <div className="main-top ">
            {OpenModel ? (
              ""
            ) : (
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
            )}
            <img className="search-img" src={search} alt="searchimg"></img>{" "}
          </div>
          <div className="container">
            <div className="flex flex-column features-list">
              <div className="flex flex-space">
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
              <div className="flex flex-wrap justify-center">
                {element.map((index) => (
                  <Card index={index}></Card>
                ))}
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
