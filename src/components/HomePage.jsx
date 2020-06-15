import React from "react";
import { Img } from "react-image";
import Footer from "./Footer";

function HomePage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Img
            src={require("../images/travel.jpg")}
            width="500"
            fluid
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Smart</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="col">
          <h2>Easy to use</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="col">
          <h2>No hassle</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
