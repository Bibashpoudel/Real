import React from "react";
import search from "../images/search.jpg";
import "./card.scss";

export default function Card(props) {
  return (
    <div
      className={`col-12 card-box flex flex-column btr-5 bbr-5 card-responsive-${props.index} mgb-10`}
    >
      <div className="col-12">
        <div className="card-header">
          <div className="types flex flex-column  ">
            <div className="type-box ">RESEDENTAL</div>
            <div className="price-box ">Price</div>
          </div>
          <div className="property-foricon flex">
            <div className="rectangel">Sell</div>
          </div>
          <img className="card-img btr-5 " src={search} alt="search"></img>
        </div>
        <div className="card-body flex flex-space">
          <div
            className="address"
            style={{
              fontSize: "1.1rem",
            }}
          >
            {" "}
            kalanki, kathmandu opposite to makalu petrol pump
          </div>
          <div className="map">
            <ion-icon
              style={{
                color: "rgba(227, 46, 46, 0.85)",
                fontSize: "2rem",
              }}
              name="location-outline"
            ></ion-icon>
          </div>
        </div>
        <hr
          style={{
            width: "95%",
            height: "0",
            borderWidth: ".0009rem",
          }}
        ></hr>
        <div className="card-footer flex flex-cloumn flex-around">
          <div className="flex flex-column">
            <div> Bed</div>
            <div>2</div>
          </div>
          <div className="flex flex-column">
            <div> Bed</div>
            <div>2</div>
          </div>
          <div className="flex flex-column">
            <div> Bed</div>
            <div>2</div>
          </div>
          <div className="flex flex-column">
            <div> Bed</div>
            <div>2</div>
          </div>
        </div>
      </div>
    </div>
  );
}
