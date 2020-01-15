import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import MapsContainer from "./MapsContainer";
import ConferenceListContainer from "./ConferencesListContainer";

export default function MainContainer() {
  const [state, setState] = React.useState({
    checked: false
  });

  const handleChange = something => event => {
    setState({ ...state, [something]: event.target.checked });
  };

  return (
    <>
      <FormGroup style={{ alignContent: "fit-content" }}>
        <FormControlLabel
          style={{
            backgroundColor: "#b0b1b1",
            marginRight: "0px",
            display: " list-item"
          }}
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
    </>
  );
}
