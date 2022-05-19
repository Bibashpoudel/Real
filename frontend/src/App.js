import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  });

  function scrollFunction() {
    let mybutton = document.getElementById("btn-back-to-top");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
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
    <div className="App">
      <ion-icon
        id="btn-back-to-top"
        onClick={() => backToTop()}
        name="arrow-up-circle"
      ></ion-icon>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
