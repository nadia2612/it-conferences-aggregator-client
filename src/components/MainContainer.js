import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import MapsContainer from "./maps/MapsContainer";
import ConferenceListContainer from "./conferencesList/ConferencesListContainer";

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
            color:"white",
            backgroundColor:"rgb(154, 193, 195)",
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
