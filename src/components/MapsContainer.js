import React from "react";
import { loadConferences } from "../conferencesList/action";
import { connect } from "react-redux";
import GoogleMaps from "./GoogleMaps";

class MapsContainer extends React.Component {
  state = {
    search: "",
    center: {
      lat: 52.3791316,
      lng: 4.8980833
    },
    zoom: 5
  };

  componentDidMount() {
    this.props.loadConferences({ search: this.state.search });
  }
  style = {
    height: "700px",
    width: "100%",
    marginTop: "20px",
    margin: "10px",
    display: "flex",
    minWidth: "fit-content",
    flexWrap: "wrap",
    flexDirecton: "column",
    borderStyle: "solid",
    borderRadius: "4px"
  };
  render() {
    const loading = this.props.conferences == null;

    return (
      <div style={{ marginTop: "30px" }}>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <GoogleMaps
            style={this.style}
            conferences={this.props.conferences}
            center={this.state.center}
            zoom={this.state.zoom}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    conferences: state.conferences
  };
};
export default connect(mapStateToProps, { loadConferences })(MapsContainer);
