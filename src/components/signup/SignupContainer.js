import React, { Component } from "react";
import Signup from "./Signup";
import { connect } from "react-redux";
import { signUp } from "../../login/action";


class SignupContainer extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.dispatch(
      signUp(
        this.state.name,
        this.state.email,
        this.state.password,
        this.props.history.push
      )
    )
  };

  render() {
    return <Signup onChange={this.onChange} onSubmit={this.onSubmit} />;
  }
}

export default connect(()=>({}))(SignupContainer);
