import React from "react";
import { Link } from "react-router-dom";
import "../navbarStyles.css";
import { makeStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';



const useStyles = makeStyles(theme => ({
  homeButton: {
    paddingTop: "1%",
    position: "absolute",
    left: 0,
    top: "3px"
  }, root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));




  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
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

        {!props.user.name && <Link to="/login"> LOGIN</Link>}
        {props.user.name && (
          <>
           <Chip
           size="small"
           icon={<FaceIcon />}
           label={props.user.name}
           clickable
           color="primary"
           onClick={handleClick}
           deleteIcon={<DoneIcon />}
         />
         
        {/* <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        Open with fade transition
        </Button> */}
        <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
        <MenuItem onClick={handleClose}>My favourites</MenuItem>
        <MenuItem onClick={props.onClick} ><Link to="/">LOGOUT</Link></MenuItem>
      </Menu>
      </>

          // <p className="navbar-username">LOGGED IN AS: {props.user.name}</p>
        )}

        {/* {props.user.name && (
          <div className="navbar-logout" onClick={props.onClick}>
            <Link to="/">LOGOUT</Link>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default Navbar;
