import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect } from "react";
import Property from "./pages/Property";
import "./style.css";
import DetailsPage from "./pages/DetailsPage";

function App() {
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  });

  function scrollFunction() {
    let mybutton = document.getElementById("btn-back-to-top");
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      console.log(document.body.scrollTop);
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <>
      <ion-icon
        id="btn-back-to-top"
        onClick={() => backToTop()}
        name="arrow-up-circle"
      ></ion-icon>
      <Router>
        <Routes>
          <Route path="/details" element={<DetailsPage />}></Route>
          <Route path="/property" element={<Property />}></Route>
          <Route path="/" exact element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
