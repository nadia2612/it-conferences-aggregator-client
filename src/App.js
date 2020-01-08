import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginContainer from "./components/LoginContainer";
import SignupContainer from "./components/SignupContainer";
import NavbarContainer from "./components/NavbarContainer";
import ConferencesListContainer from "./components/ConferencesListContainer";
import Footer from "./components/Footer";


import "./App.css";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavbarContainer />
        <Switch>
          <Route path="/conference" exact component={ConferencesListContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/signup" component={SignupContainer} />
         
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default connect()(App);
