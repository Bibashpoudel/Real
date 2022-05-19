import React from "react";
import "./nav.scss";

export default function Nav() {
  return (
    <div className="full-container">
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
          <div style={{ padding: "0.5rem" }}>
            <ion-icon
              style={{ color: "rgba(227, 46, 46, 0.85)", fontSize: "2.5rem" }}
              name="search-outline"
            ></ion-icon>
          </div>
          <div>
            <button className=" btn hover">Sell</button>
          </div>
          <div>
            <button className=" btn primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
