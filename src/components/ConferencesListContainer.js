import React from "react";
import { loadConferences } from "../conferencesList/action";
import { connect } from "react-redux";
import ConferencesList from "./ConferencesList";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SearchBar from "./SearchBar";
class ConferencesListContainer extends React.Component {
  state = {
    offset: 0,
    limit: 9,
    search: "",
    center: {
      lat: 52.3791316,
      lng: 4.8980833
    },
    zoom: 5
  };

  reLoadConferences() {
    const { offset, limit, search } = this.state;
    this.props.loadConferences({ offset, limit, search });
  }

  componentDidMount() {
    this.reLoadConferences();
  }

  paginationNext() {
    this.setState({ offset: this.state.offset + this.state.limit }, () => {
      this.reLoadConferences();
    });
  }

  paginationPrev() {
    this.state.offset > 0
      ? this.setState({ offset: this.state.offset - this.state.limit }, () => {
          this.reLoadConferences();
        })
      : this.setState({ offset: 0 });
  }

  onChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.reLoadConferences();
  };

  render() {
    const loading = this.props.conferences == null;

    return (
      <>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <>
            <SearchBar
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              values={this.state}
            />
            <ConferencesList
              conferences={this.props.conferences}
              paginationPrev={this.paginationPrev}
              paginationNext={this.paginationNext}
              addLike={this.addLike}
            />
          </>
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
    user: state.currentUser,
    conferences: state.conferences
  };
};

export default connect(mapStateToProps, {
  loadConferences
})(ConferencesListContainer);
