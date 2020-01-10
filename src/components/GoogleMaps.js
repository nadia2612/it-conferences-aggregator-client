import React from "react";
import GoogleMapReact from "google-map-react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import ConferenceMarker from "./ConferenceMarker";

export default function GoogleMaps(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <div style={{ height: "400px", width: "100%", margin:"10px"}}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyA40x4q - YtnCHibRSg98aJToojvkoVsQP8"
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
