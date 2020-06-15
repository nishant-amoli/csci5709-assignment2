import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import HomePage from "./components/HomePage";
import UserProfile from "./components/UserProfile";
import EditProfile from "./components/EditProfile";
import UnMapped from "./components/UnMapped";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/userprofile" component={UserProfile} />
          <Route path="/editprofile" component={EditProfile} />
          <Route path="/unbuilt" component={UnMapped} />
          <Route path="/*" component={WrongEndPoints} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

function WrongEndPoints() {
  return (
    <div className="container" style={{ marginTop: "3em" }}>
      <h1>404 : Page not found</h1>
      <p>The page you are looking for was not found</p>
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
export default App;
