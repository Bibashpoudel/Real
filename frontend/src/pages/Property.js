import React, { useState } from "react";
import Footer from "../component/Footer";
import Nav from "../component/Nav";
import Signin from "../component/Signin";
import "./property.scss";

export default function Property() {
  const [OpenModel, setOpenModel] = useState(false);
  const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
  let priceGap = 1000;
  priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "input-min") {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });
  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    });
  });
  return (
    <div className="containers">
      {OpenModel && <Signin closeModel={setOpenModel}></Signin>}
      <header>
        <Nav openModel={setOpenModel}></Nav>
      </header>
      <main className="mgb-10">
        <div className="container">
          <div className="flex">
            <div className="flex flex-column left-section">
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
                  <div class="price-input">
                    <div class="field">
                      <span>Min</span>
                      <input
                        type="number"
                        class="input-min"
                        value="2500"
                      ></input>
                    </div>
                    <div class="separator">-</div>
                    <div class="field">
                      <span>Max</span>
                      <input
                        type="number"
                        class="input-max"
                        value="7500"
                      ></input>
                    </div>
                  </div>
                  <div class="slider">
                    <div class="progress"></div>
                  </div>
                  <div class="range-input">
                    <input
                      type="range"
                      class="range-min"
                      min="0"
                      max="10000"
                      value="2500"
                      step="100"
                    ></input>
                    <input
                      type="range"
                      class="range-max"
                      min="0"
                      max="10000"
                      value="7500"
                      step="100"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-section">Two</div>
          </div>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
