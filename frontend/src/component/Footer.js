import React from "react";
import "./footer.scss";
import instagram from "../images/instagram-logo.png";

export default function Footer() {
  return (
    <div className="full-container">
      <div style={{ backgroundColor: "rgba(229, 229, 229, .4)" }}>
        <div className="container">
          <div className="flex flex-space footer-top">
            <div className="col-4 flex flex-column">
              <div className="footer-header">Get to Know us</div>
              <div className="footer-body flex flex-column">
                <div>Career</div>
                <div>Blog</div>
                <div>About Us</div>
              </div>
            </div>
            <div className="col-4 flex flex-column">
              <div className="footer-header">Help</div>
              <div className="footer-body flex flex-column">
                <div>Contact Us</div>
                <div>Account</div>
                <div>FAQs</div>
              </div>
            </div>
            <div className="col-4 flex flex-column ">
              <div className="footer-header">Follow Us</div>
              <div className="flex">
                <div className="pd-5">
                  <ion-icon
                    style={{ fontSize: "3rem", color: "#3b5998" }}
                    name="logo-facebook"
                  ></ion-icon>
                </div>
                <div className="pd-5">
                  <img
                    style={{ width: "2.9rem" }}
                    src={instagram}
                    alt="instagram"
                  ></img>
                </div>
                <div className="pd-5">
                  <ion-icon
                    style={{ fontSize: "3rem", color: "red" }}
                    name="logo-youtube"
                  ></ion-icon>
                </div>
              </div>
            </div>
            <div className="col-4 flex flex-column align-center">
              <div className="footer-header">Subscribe for News Letter</div>
              <div className="footer-body flex flex-column align-center">
                <div
                  className="text-center"
                  style={{ fontSize: "0.9rem", color: "grey" }}
                >
                  Subscribe to get information about house and other properties.
                </div>
                <div className="newsletter">
                  <input type="text" placeholder="Email Address"></input>
                </div>
                <div className="btn-newsletter">
                  <button className="btn primary ">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div>second footer</div>
      </div>
    </div>
  );
}
