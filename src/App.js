import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginContainer from "./components/LoginContainer";
import SignupContainer from "./components/SignupContainer";
import NavbarContainer from "./components/NavbarContainer";
// import EventsListContainer from "./components/EventsListContainer";
import Footer from "./components/Footer";
// import EventDetailsContainer from "./components/EventDetailsContainer";
// import CreateEventFormContainer from "./components/CreateEventFormContainer";
// import TicketDetailsContainer from "./components/TicketDetailsContainer";
// import CreateTicketFormContainer from "./components/CreateTicketFormContainer";
// // import CreateCommentFormContainer from "./components/CreateCommentFormContainer"

import "./App.css";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavbarContainer />
        <Switch>
          {/* <Route path="/event" exact component={EventsListContainer} /> */}
          <Route path="/login" component={LoginContainer} />
          <Route path="/signup" component={SignupContainer} />
          {/* <Route path="/event/create" component={CreateEventFormContainer} />
          <Route
            path="/event/:eventId/ticket/create"
            component={CreateTicketFormContainer}
          />
          <Route
            path="/event/:eventId/ticket/:id"
            component={TicketDetailsContainer}
          />
          <Route path="/event/:id" component={EventDetailsContainer} /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default connect()(App);
