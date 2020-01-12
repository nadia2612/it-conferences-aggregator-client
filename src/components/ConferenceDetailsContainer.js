import React from "react";
import { connect } from "react-redux";
import ConferenceDetails from "./ConferenceDetails";
import CreateCommentFormContainer from "./CreateCommentFormContainer";
import { loadConference } from "../conferenceDetails/action";
import Container from "@material-ui/core/Container";
import { postLike, deleteLike } from "../favorite/action";

class ConferenceDetailsContainer extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.props
      .loadConference(Number(this.props.match.params.id))
      .then(() => this.setState({ loading: false }));
  }
  addLike = event => {
    event.preventDefault();
    this.props
      .postLike(this.props.user.jwt, this.props.conference.id)
      .then(() => {
        this.props.loadConference(Number(this.props.match.params.id));
      });
  };
  
  deleteLike = event => {
    event.preventDefault();
    this.props
      .deleteLike(this.props.user.jwt, this.props.conference.id)
      .then(() => {
        this.props.loadConference(Number(this.props.match.params.id));
      });
  };

  render() {
    const { loading } = this.state;

    return (
      <>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <Container component="main">
            <ConferenceDetails
              conference={this.props.conference}
              history={this.props.history}
              addLike={this.addLike}
              deleteLike={this.deleteLike}
              user={this.props.user}
            />
            <CreateCommentFormContainer />
          </Container>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  conference: state.conference,
  user: state.currentUser
});

export default connect(mapStateToProps, {
  loadConference,
  postLike,
  deleteLike
})(ConferenceDetailsContainer);
