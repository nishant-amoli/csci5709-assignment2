import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="list-unstyled">
              <li>
                <Link to="/unbuilt">Help</Link>
              </li>
              <li>
                <Link to="/unbuilt">About Us</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-unstyled">
              <li>
                <Link to="/unbuilt">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="/unbuilt">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <p>
          Made with <FaHeart style={{ color: "red" }} /> at DAL
        </p>
        <div className="row">
          <p className="col-sm">RideShare, {new Date().getFullYear()} &copy;</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
