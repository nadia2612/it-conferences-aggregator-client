import React from "react";
import { loadConferences } from "../conferencesList/action";
import { connect } from "react-redux";
import ConferencesList from "./ConferencesList";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

class ConferencesListContainer extends React.Component {
  state = {
    offset: 0,
    limit: 9
  };

  componentDidMount() {
    this.props.loadConferences(this.state.offset, this.state.limit);
  }
  paginationNext() {
    this.setState({ offset: this.state.offset + 9 }, () => {
      this.props.loadConferences(this.state.offset, this.state.limit);
    });
  }

  paginationPrev() {
    this.state.offset > 0
      ? this.setState({ offset: this.state.offset - 9 }, () => {
          this.props.loadConferences(this.state.offset, this.state.limit);
        })
      : this.setState({ offset: 0 });
  }
  render() {
    const loading = this.props.conferences == null;

    return (
      <>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <ConferencesList
            conferences={this.props.conferences}
            paginationPrev={this.paginationPrev}
            paginationNext={this.paginationNext}
          />
        )}
        <ButtonGroup
          style={{
            boxShadow: "none",
            margin: "20px",
            justifyContent: "center"
          }}
          variant="contained"
          aria-label="contained primary button group"
        >
          <Button onClick={() => this.paginationPrev()}> PREV </Button>
          <Button onClick={() => this.paginationNext()}> NEXT </Button>
        </ButtonGroup>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    conferences: state.conferences
  };
};
export default connect(mapStateToProps, { loadConferences })(ConferencesListContainer);
