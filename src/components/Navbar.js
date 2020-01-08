import React from "react";
import { Link } from "react-router-dom";
import "../navbarStyles.css";
import { makeStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";

const useStyles = makeStyles(theme => ({
  homeButton: {
    paddingTop: "1%",
    position: "absolute",
    left: 0,
    top: "3px"
  }
}));
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function Navbar(props) {
  const classes = useStyles();

  return (
    <div>
      <div className="navbar">
        <Link to="/event" className={classes.homeButton}>
          <HomeIcon color="primary" fontSize="large" />
        </Link>

        {!props.user.name && <Link to="/login"> LOGIN</Link>}
        {props.user.name && (
          <p className="navbar-event">
            <Link to="/event/create">CREATE NEW EVENT</Link>
          </p>
        )}
        {props.user.name && (
          <p className="navbar-username">LOGGED IN AS: {props.user.name}</p>
        )}

        {props.user.name && (
          <div className="navbar-logout" onClick={props.onClick}>
            <Link to="/">LOGOUT</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
