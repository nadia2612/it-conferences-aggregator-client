import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginContainer from "./components/LoginContainer";
import SignupContainer from "./components/SignupContainer";
import NavbarContainer from "./components/NavbarContainer";
import MainContainer from "./components/MainContainer";
import ConferenceDetailsContainer from "./components/ConferenceDetailsContainer";
import Footer from "./components/Footer";
import FavoritesListContainer from "./components/FavoritesListContainer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavbarContainer />
      <Switch>
        <Route path="/conference" exact component={MainContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignupContainer} />
        <Route path="/conference/:id" component={ConferenceDetailsContainer} />
        <Route path="/favorite" component={FavoritesListContainer} />
        <Redirect from="/" to="/conference" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
