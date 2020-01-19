import React, { Component } from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { sendLogin } from "../../login/action";


class LoginContainer extends Component {
  state = {
    email: "",
    password: "",
    id: "",
    name: ""
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.sendLogin(
      this.state.email,
      this.state.password,
      this.state.id,
      this.state.name,
      this.props.history.push
    )
  };
  render() {
    return <Login onChange={this.onChange} onSubmit={this.onSubmit} />;
  }
}
export default connect(() => ({}), { sendLogin })(LoginContainer);
