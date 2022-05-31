import React from "react";

import search from "../images/search.jpg";
export default function ListCard() {
  return (
    <div className="list-card flex bll-5 mgb-10">
      <div className="image">
        <img className="img list" src={search} alt="house"></img>
      </div>
      <div className="list-card-details flex-column wd-100 pd-10">
        <div className="property-foricon-2" id="flag">
          <span>Sell</span>
        </div>
        <div className="mgb-10">Titile</div>
        <div className="flex flex-space">
          <div
            className="address flex flex-center"
            style={{
              fontSize: "1.1rem",
            }}
          >
            {" "}
            <ion-icon
              style={{
                color: "grey",
                fontSize: "1.3rem",
              }}
              name="location-outline"
            ></ion-icon>
            kalanki, kathmandu opposite to makalu petrol pump
          </div>
        </div>
        <div className="flex flex-space mgt-10 align-center">
          <div>Rs 3000 per month</div>
          <div className="map flex align-center">
            <div style={{ color: "grey", fontSize: "0.7rem" }}>View on map</div>
            <ion-icon
              style={{
                color: "rgba(227, 46, 46, 0.85)",
                fontSize: "2rem",
              }}
              name="location-outline"
            ></ion-icon>
          </div>
        </div>
        <div className="mgt-10 mgb-10">
          JJDHJHFJHDFJHFJHDJFHjhfjdhjfhkshdjkfjfbdjjfhgjhjhj
        </div>
        <div className="flex flex-around">
          <div className="flex flex-column flex-center">
            <div>Bed</div>
            <div>2</div>
          </div>
          <div className="flex flex-column flex-center">
            <div>Bed</div>
            <div>2</div>
          </div>
          <div className="flex flex-column flex-center">
            <div>Bed</div>
            <div>2</div>
          </div>
          <div className="flex flex-column flex-center">
            <div>Bed</div>
            <div>2</div>
          </div>
        </div>
      </div>
    </div>
  );
}
