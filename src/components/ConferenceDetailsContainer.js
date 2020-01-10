import React from "react";
import { connect } from "react-redux";
import ConferenceDetails from "./ConferenceDetails";
import CreateCommentFormContainer from "./CreateCommentFormContainer";
import { loadConference } from "../conferenceDetails/action";
import Container from "@material-ui/core/Container";

class ConferenceDetailsContainer extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.props
      .loadConference(Number(this.props.match.params.id))
      .then(() => this.setState({ loading: false }));
  }

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
            />
            <CreateCommentFormContainer />
          </Container>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  conference: state.conference
});

export default connect(mapStateToProps, { loadConference })(
  ConferenceDetailsContainer
);
