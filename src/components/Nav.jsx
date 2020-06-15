import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsPlusCircle } from "react-icons/bs";
import { FaHome } from "react-icons/fa";

class Nav extends Component {
  render() {
    return (
      <nav>
        <h3 style={{ listStyle: "none" }}>
          <Link to="/" exact>
            <li>
              <FaHome /> RideShare
            </li>
          </Link>
        </h3>
        <ul className="nav-links">
          <Link to="/unbuilt">
            <li>
              <BsSearch /> Find a ride
            </li>
          </Link>
          <Link to="/unbuilt">
            <li>
              <BsPlusCircle /> Offer a ride
            </li>
          </Link>
          <Link to="/LogIn">
            <li>LogIn</li>
          </Link>
          <Link to="/SignUp">
            <li>SignUp</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
