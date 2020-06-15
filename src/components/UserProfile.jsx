import React, { Component } from "react";
import "../styles/UserProfile.css";
import { Img } from "react-image";
import { Link } from "react-router-dom";

class UserProfile extends Component {
  state = {};

  render() {
    return (
      <div className="container user-profile">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <Img src={require("../images/solitary.jpeg")} alt="" />
              <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h3>Your personal information</h3>
              <div className="row" style={{ marginTop: "3em" }}>
                <div className="col-md-4">
                  <label>Username:</label>
                </div>
                <div className="col-md-6">
                  <p>user_id</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <label>Name:</label>
                </div>
                <div className="col-md-6">
                  <p>User Name</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <label>Email:</label>
                </div>
                <div className="col-md-6">
                  <p>user@dal.ca</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <label>Phone:</label>
                </div>
                <div className="col-md-6">
                  <p>123 456 7890</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <label>Bio:</label>
                </div>
                <div className="col-md-6">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque interdum rutrum sodales. Nullam mattis
                    fermentum libero, non volutpat. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Pellentesque interdum rutrum
                    sodales. Nullam mattis fermentum libero, non volutpat.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <Link to="/EditProfile">
              <input
                type="submit"
                className="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
