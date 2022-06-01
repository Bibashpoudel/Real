import React, { useState } from "react";
import MultiRangeSlider from "./multislider/MultiRangeSlider";
import "./signin.scss";
export default function MobFilter({ closeFilter }) {
  return (
    <div className="model-background mgt--8 sm">
      <div className="model-container wd-30">
        <button className="closebtn flex" onClick={() => closeFilter(false)}>
          X
        </button>
        <div className="flex flex-column pd-5">
          <div>
            <h2 style={{ color: "rgba(227, 46,46,.8" }}>
              Find Suitable Place for Your
            </h2>
          </div>

          <form>
            <div className="flex pd-10">
              <div className="flex ">
                <label style={{ display: "flex", alignItems: "center" }}>
                  Buy
                </label>
                <input type="radio"></input>
              </div>
              <div className="flex ">
                <label style={{ display: "flex", alignItems: "center" }}>
                  Rent
                </label>
                <input type="radio"></input>
              </div>
            </div>
          </form>
          <div></div>
        </div>
        <hr style={{ width: "99.5%", float: "left" }}></hr>
        <div className="flex flex-column pd-5">
          <div>
            <h2 style={{ color: "rgba(227, 46,46,.8" }}>Property Type</h2>
          </div>

          <form>
            <div className="flex flex-column pd-10">
              <div className="flex mgt-3">
                <input type="radio"></input>
                <label style={{ display: "flex", alignItems: "center" }}>
                  House
                </label>
              </div>
              <div className="flex mgt-3">
                <input type="radio"></input>
                <label style={{ display: "flex", alignItems: "center" }}>
                  Land
                </label>
              </div>
              <div className="flex mgt-3">
                <input type="radio"></input>
                <label style={{ display: "flex", alignItems: "center" }}>
                  Flat
                </label>
              </div>
              <div className="flex mgt-3">
                <input type="radio"></input>
                <label style={{ display: "flex", alignItems: "center" }}>
                  Appartment
                </label>
              </div>
              <div className="flex mgt-3">
                <input type="radio"></input>
                <label style={{ display: "flex", alignItems: "center" }}>
                  Single Room
                </label>
              </div>
            </div>
          </form>
          <div></div>
        </div>
        <hr style={{ width: "99.5%", float: "left" }}></hr>
        <div className="flex flex-column pd-5">
          <div>
            <h2 style={{ color: "rgba(227, 46,46,.8" }}>
              Find Suitable Place for Your
            </h2>
          </div>

          <form>
            <div className="flex flex-column pd-10">
              <div className="flex mgt-3 ">
                <input type="radio"></input>
                <label style={{ display: "flex", alignItems: "center" }}>
                  Resedent
                </label>
              </div>
              <div className="flex mgt-3">
                <input type="radio"></input>
                <label style={{ display: "flex", alignItems: "center" }}>
                  Commercial
                </label>
              </div>
              <div className="flex mgt-3">
                <input type="radio"></input>
                <label style={{ display: "flex", alignItems: "center" }}>
                  Single Family House
                </label>
              </div>
              <div className="flex mgt-3">
                <input type="radio"></input>
                <label style={{ display: "flex", alignItems: "center" }}>
                  Office
                </label>
              </div>
              <div className="flex mgt-3">
                <input type="radio"></input>
                <label style={{ display: "flex", alignItems: "center" }}>
                  Store Shop
                </label>
              </div>
              <div className="flex mgt-3">
                <input type="radio"></input>
                <label style={{ display: "flex", alignItems: "center" }}>
                  Godown
                </label>
              </div>
            </div>
          </form>
          <div></div>
        </div>
        <hr style={{ width: "99.5%", float: "left" }}></hr>
        <div className="flex flex-column pd-5">
          <div className="flex flex-column pd-5">
            <div>
              <h2 style={{ color: "rgba(227, 46,46,.8" }}>Price Range</h2>
            </div>
            <MultiRangeSlider
              min={0}
              max={30000}
              onChange={({ min, max }) =>
                console.log(`min = ${min}, max = ${max}`)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
