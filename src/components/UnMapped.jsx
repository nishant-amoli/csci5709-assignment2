import React from "react";
import { FaRegSmileBeam } from "react-icons/fa";
import { Link } from "react-router-dom";

function UnMapped() {
  return (
    <div className="container" style={{ marginTop: "3em" }}>
      <h1>Under Construction</h1>
      <p style={{ marginTop: "2em" }}>
        Hello! The page you are looking for is not yet built. The only pages
        that are currently accessible are{" "}
        <Link to="/" exact>
          Home Page
        </Link>
        , <Link to="/signup"> SignUp</Link>, <Link to="/login"> LogIn</Link>,
        <Link to="/userprofile"> User Profile</Link>, and{" "}
        <Link to="editprofile"> Edit Profile</Link>. I hope you have a wonderful
        day! <FaRegSmileBeam />
      </p>
      <p style={{ paddingTop: "1em" }}>
        Go to{" "}
        <Link to="/" exact>
          {" "}
          HomePage{" "}
        </Link>
      </p>
    </div>
  );
}

export default UnMapped;
