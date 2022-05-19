import React from "react";
import Footer from "../component/Footer";
import Nav from "../component/Nav";
import "./home.scss";
import search from "../images/search.jpg";

export default function Home() {
  return (
    <div className="containers">
      <header>
        <Nav></Nav>
      </header>
      <main>
        <div>
          <div>
            {" "}
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
