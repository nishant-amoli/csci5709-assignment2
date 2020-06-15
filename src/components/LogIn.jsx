import React from "react";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <div className="container" style={{ marginTop: "3em" }}>
      <h1>Already a member? Sign In</h1>
      <div className="form">
        <form className="signup" action="/userprofile">
          <input
            className="form-fields form-control"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email Address"
            required
          />
          <input
            className="form-fields form-control"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            required
          />
          <button
            type="submit"
            id="submit"
            name="submit"
            class="btn btn-primary"
            style={{ marginTop: "1em", width: "100%" }}
          >
            LogIn
          </button>
        </form>
        <p style={{ paddingTop: "1em" }}>
          Not a member yet? <Link to="/SignUp">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
