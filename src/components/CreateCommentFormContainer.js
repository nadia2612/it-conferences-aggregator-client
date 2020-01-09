import React from "react";
import { connect } from "react-redux";
import { createComment } from "../commentDetails/action";
import CommentForm from "./CommentForm";
import { loadConference } from "../conferenceDetails/action";

class CreateCommentFormContainer extends React.Component {
  state = {
    text: ""
    
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.props, ":PROPS FROM CREATE Comment");
    this.props
      .createComment(
        this.props.user.jwt,
        this.props.conference.id,
        this.state
      )

      .then(() =>
        this.setState({
          text: ""
        })
      )
      .then(() => {
        this.props.loadConference(
          Number(this.props.conference.id),
         
        );
      });
  };

  render() {
    return (
      <CommentForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUser,
  conference:state.conference
});

export default connect(mapStateToProps, { createComment, loadConference})(
  CreateCommentFormContainer
);
