import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="container" style={{ marginTop: "3em" }}>
      <h1>Create a free account</h1>
      <div className="form" action="/userprofile">
        <form className="signup" action="/userprofile">
          <input
            className="form-fields form-control"
            name="fullname"
            id="fullname"
            placeholder="Enter Full Name"
            required
          />

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
            placeholder="Enter Password (Min 8 characters)"
            minLength="8"
            required
          />
          <input
            className="form-fields form-control"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Re-type Password"
            required
          />
          <div>
            <input
              type="checkbox"
              id="terms"
              name="terms"
              value="terms"
              required
            />
            <label for="terms" style={{ paddingLeft: "0.5em" }}>
              I agree to the <Link to="/unbuilt">Terms of Use</Link> and{" "}
              <Link to="/unbuilt">Private Policy</Link>
            </label>
          </div>
          <button
            type="submit"
            id="submit"
            name="submit"
            class="btn btn-primary"
            style={{ marginTop: "1em", width: "100%" }}
          >
            SignUp
          </button>
        </form>
        <p style={{ paddingTop: "1em" }}>
          Already a member? <Link to="/LogIn">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
