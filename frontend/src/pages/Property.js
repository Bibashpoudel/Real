import React, { useState } from "react";
import Card from "../component/Card";
import Footer from "../component/Footer";
import Nav from "../component/Nav";
import Signin from "../component/Signin";
import "./property.scss";
import "../component/listcard.scss";
import ListCard from "../component/ListCard";
import MultiRangeSlider from "../component/multislider/MultiRangeSlider.js";
import MobFilter from "../component/MobFilter";
export default function Property({ openFilter }) {
  const [OpenModel, setOpenModel] = useState(false);
  const [OpenFilter, setOpenFilter] = useState(false);
  const [ListView, setListView] = useState(false);
  const element = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="containers">
      {OpenModel && <Signin closeModel={setOpenModel}></Signin>}
      {OpenFilter && <MobFilter closeFilter={setOpenFilter}></MobFilter>}
      <header>
        <Nav openModel={setOpenModel}></Nav>
      </header>
      <main className="mgb-10">
        <div className="container">
          <div className="flex property-list">
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
                  <MultiRangeSlider
                    min={0}
                    max={30000}
                    onChange={({ min, max }) =>
                      console.log(`min = ${min}, max = ${max}`)
                    }
                  />
                  {/* <div class="price-input">
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
                  </div> */}
                </div>
              </div>
            </div>

            <div className="right-section flex flex-column">
              <div className="mob-filter mgb-10">
                <button
                  className="btn primary"
                  onClick={() => setOpenFilter(true)}
                >
                  Apply Filter
                </button>
              </div>
              <div>
                <div className="flex flex-space">
                  <div>Filter Apply</div>
                  <div>
                    <select>
                      <option>latest</option>
                      <option>latest</option>
                      <option>latest</option>
                      <option>latest</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-space flex-wrap align-center mgt-10">
                  <div>Showing 29099 results as per your search criteria</div>
                  <div>
                    <input type="text"></input>
                  </div>

                  <div className="flex">
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => setListView(true)}
                    >
                      {ListView ? (
                        <ion-icon
                          style={{
                            fontSize: "3rem",
                            color: "rgba(227,46,46,.8)",
                          }}
                          name="list-outline"
                        ></ion-icon>
                      ) : (
                        <ion-icon
                          style={{ fontSize: "3rem" }}
                          name="list-outline"
                        ></ion-icon>
                      )}
                    </div>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => setListView(false)}
                    >
                      {ListView ? (
                        <ion-icon
                          style={{ fontSize: "3rem" }}
                          name="grid-outline"
                        ></ion-icon>
                      ) : (
                        <ion-icon
                          style={{
                            fontSize: "3rem",
                            color: "rgba(227,46,46,.8)",
                          }}
                          name="grid-outline"
                        ></ion-icon>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <hr style={{ width: "100%" }}></hr>
              {ListView ? (
                <div className="Grid-view flex flex-column">
                  {element.map((index) => (
                    <ListCard index={index}></ListCard>
                  ))}
                </div>
              ) : (
                <div className="list-view flex flex-wrap flex-space">
                  {element.map((index) => (
                    <Card index={index}></Card>
                  ))}
                </div>
              )}
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
