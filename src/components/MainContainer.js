import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import MapsContainer from "./MapsContainer";
import ConferenceListContainer from "./ConferencesListContainer";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
export default function MainContainer() {
  const [state, setState] = React.useState({
    checked: true
  });

  const handleChange = something => event => {
    console.log(event, "event");
    setState({ ...state, [something]: event.target.checked });
  };
  console.log(state, "State");
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={state.checked}
                  onChange={handleChange("checked")}
                  value="checked"
                  color="primary"
                />
              }
              label="Map view"
            />
            {!state.checked ? <ConferenceListContainer /> : <MapsContainer />}
          </FormGroup>
        </Container>
      </React.Fragment>
    </>
  );
}
