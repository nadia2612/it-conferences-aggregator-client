import React from "react";
import { loadConferences } from "../conferencesList/action";
import { connect } from "react-redux";
import ConferencesList from "./ConferencesList";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SearchBar from "./SearchBar";
import GoogleMaps from "./GoogleMaps";
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

  componentDidMount() {
    const { conferences } = this.props;
    if (!conferences || conferences.length === 0) {
      this.props.loadConferences(
        this.state.offset,
        this.state.limit,
        this.state.search
      );
    }
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

  onChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.state.search);
    this.props.loadConferences(
      this.state.offset,
      this.state.limit,
      this.state.search
    );
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
            />
            <GoogleMaps
              conferences={this.props.conferences}
              center={this.state.center}
              zoom={this.state.zoom}
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
    conferences: state.conferences
  };
};
export default connect(mapStateToProps, { loadConferences })(
  ConferencesListContainer
);
