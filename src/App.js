import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginContainer from "./components/LoginContainer";
import SignupContainer from "./components/SignupContainer";
import NavbarContainer from "./components/NavbarContainer";
import MainContainer from "./components/MainContainer";
import ConferenceDetailsContainer from "./components/ConferenceDetailsContainer";
import Footer from "./components/Footer";


import "./App.css";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavbarContainer />
        <Switch>
          <Route path="/conference" exact component={MainContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/signup" component={SignupContainer} />
          <Route path="/conference/:id" component={ConferenceDetailsContainer} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default connect()(App);
