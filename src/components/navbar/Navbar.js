import React from "react";
import { Link } from "react-router-dom";
import "./navbarStyles.css";
import SvgIcon from "@material-ui/core/SvgIcon";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { useStyles } from './style'



function HomeIcon(props) {
  return (
    <SvgIcon {...props} style={{ color: "white" }}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function Navbar(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="navbar">
        <Link to="/conference" className={classes.homeButton}>
          <HomeIcon color="primary" fontSize="large" />
        </Link>

        {!props.user.name && (
          <Link style={{ color: "white" }} to="/login">
            {" "}
            LOGIN
          </Link>
        )}
        {props.user.name && (
          <>
            <Chip
              size="small"
              icon={<FaceIcon />}
              className={classes.chip}
              label={props.user.name}
              clickable
              color="primary"
              onClick={handleClick}
              
            />
            <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
              style={{ color: "black" }}
            >
              <MenuItem onClick={handleClose}>
                <Link style={{ color: "black" }} to="/favorite">
                  My favorites
                </Link>
              </MenuItem>
              <MenuItem onClick={props.onClick}>
                <Link style={{ color: "black" }} to="/">
                  Logout
                </Link>
              </MenuItem>
            </Menu>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
