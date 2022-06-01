import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
import "./signin.scss";

export default function Nav({ openModel }) {
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  });

  function scrollFunction() {
    let mybutton = document.querySelector(".full-container");
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.borderBottom = "0.1rem solid #c0c0c0";
      mybutton.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
    } else {
      mybutton.style.borderBottom = "0";
      mybutton.style.boxShadow = "none";
    }
  }

  return (
    <div
      className="full-container"
      style={{ position: "fixed", zIndex: "10000000" }}
    >
      <div
        className="container flex flex-space"
        style={{ marginTop: "1.5rem" }}
      >
        <div className="left-nav flex flex-wrap">
          <div
            className="brand"
            style={{ fontSize: "1.6rem", fontWeight: "bold" }}
          >
            Real State
          </div>
          <div
            className="menu-item flex "
            style={{ fontSize: "1.3rem", fontWeight: "500" }}
          >
            <div>House</div>
            <div>Land</div>
            <div>Buy</div>
            <div>Rent</div>
          </div>
        </div>
        <div
          className="right-nav flex"
          style={{ fontSize: "1.3rem", fontWeight: "500" }}
        >
          {/* <div style={{ padding: "0.5rem" }}>
            <ion-icon
               style={{ color: "rgba(227, 46, 46, 0.85)", fontSize: "2.5rem" }}
              name="search-outline"
            ></ion-icon>
          </div> */}
          <div className="select-option">
            <select>
              <option>Chitwan</option>
              <option>Kathmandu</option>
              <option>Hetuda</option>
            </select>
          </div>
          <div>
            <button className=" btn hover">Sell</button>
          </div>
          <div>
            <button className=" btn primary" onClick={() => openModel(true)}>
              Login
            </button>
          </div>
        </div>
        <div className="mov-right-nav ">
          <div className="select-option">
            <select>
              <option>Chitwan</option>
              <option>Kathmandu</option>
              <option>Hetuda</option>
            </select>
          </div>{" "}
          <ion-icon
            style={{
              fontSize: "4rem",
              fontWeight: "700",
              color: "rgba(227, 46, 46, 0.85)",
            }}
            name="menu-outline"
          ></ion-icon>
        </div>
      </div>
      <div
        className="container mob-menu-item flex "
        style={{ fontSize: "1.3rem", fontWeight: "500" }}
      >
        <div>
          <Link to="/property">House</Link>
        </div>
        <div>Land</div>
        <div>Buy</div>
        <div>Rent</div>
      </div>
    </div>
  );
}
