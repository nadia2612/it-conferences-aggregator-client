import React from "react";
import GoogleMapReact from "google-map-react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import ConferenceMarker from "../conferenceMarker/ConferenceMarker";

export default function GoogleMaps(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <div style={props.style}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_API_KEY
            }}
            yesIWantToUseGoogleMapApiInternals
            defaultCenter={props.center}
            defaultZoom={props.zoom}
          >
            {props.conferences.map(conference => (
              <ConferenceMarker
                key={conference.id}
                lat={conference.location.lat}
                lng={conference.location.lng}
                conference={conference}
              />
            ))}
          </GoogleMapReact>
        </div>
      </Container>
    </React.Fragment>
  );
}
