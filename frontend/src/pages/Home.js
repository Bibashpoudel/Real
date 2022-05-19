import React, { useState } from "react";
import Footer from "../component/Footer";
import Nav from "../component/Nav";
import "./home.scss";
import search from "../images/search.jpg";
import Signin from "../component/Signin";

export default function Home() {
  const [OpenModel, setOpenModel] = useState(false);
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
          <div className="container">main sections</div>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
