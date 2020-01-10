import React from "react";
import { loadConferences } from "../conferencesList/action";
import { connect } from "react-redux";
import GoogleMaps from "./GoogleMaps";

class MapsContainer extends React.Component {
  state = {
    offset: 0,
    limit: 999,
    search: "",
    center: {
      lat: 52.3791316,
      lng: 4.8980833
    },
    zoom: 5
  };

  componentDidMount() {
    const { conferences } = this.props;
    console.log(this.state.limit,"LIMIT M", this.state.offset, "OffsetM")
    if (!conferences || conferences.length === 0) {
      this.props.loadConferences(
        this.state.offset,
        this.state.limit,
        this.state.search
      );
    }
  }
 

  

  render() {
    const loading = this.props.conferences == null;

    return (
      <>
        {loading ? (
          <p>Loading ...</p>
        ) : (
        
            
            <GoogleMaps
              conferences={this.props.conferences}
              center={this.state.center}
              zoom={this.state.zoom}
            />
        
        )}
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
  MapsContainer
);
