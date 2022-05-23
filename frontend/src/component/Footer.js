import React from "react";

export default function Footer() {
  return (
    <div className="full-container">
      <div style={{ backgroundColor: "rgba(229, 229, 229, .4)" }}>
        <div className="container">
          <div
            className="flex flex-space footer-top"
            style={{ backgroundColor: "red" }}
          >
            <div className="col-4 ">one</div>
            <div className="col-4">one</div>
            <div className="col-4">one</div>
            <div className="col-4">one</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div>second footer</div>
      </div>
    </div>
  );
}
