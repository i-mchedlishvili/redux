import {
  Box,
  List,
  ListItem,
  makeStyles,
  Button,
  CardMedia,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import "../../App.css";
import Image from "../../images/header-image.jpg";
import { Link, Redirect } from "react-router-dom";

function Header() {
  const useStyles = makeStyles({
    flexHeader: {
      display: "flex",
      alignItems: "center",
      position: "fixed",
      right: "2%",
    },
  });

  const classes = useStyles();

//   function header() {
//     if(localStorage.hasOwnProperty("auth")) {
//       document.getElementById("asd").style.display = "none"; 
//     } else {
//       document.getElementById("asd").style.display = "block"; 
//     }
//   }
// header();
  return (
    <div className="App">
      <Box className="header-items">
        <List className={classes.flexHeader}>
          <p className="header-logo">MDB</p>
          <ShoppingCartIcon />
          <ListItem>
            <Link to="/admin">
              {" "}
              <Button>Admin Panel</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Button>Shop</Button>
          </ListItem>
          <ListItem>
            <Button>Contact</Button>
          </ListItem>
          <ListItem>
            <Button>
              <Link to="/signIn"> Sign in </Link>
            </Button>
          </ListItem>
          <ListItem>
            <Button>
              <Link to="/signin" onClick={() => {localStorage.removeItem("auth")}}>Logout</Link>
            </Button>
          </ListItem>
          <ListItem>
            <Button className="sign-up-but">
              <Link to="/register">SIGN UP</Link>
            </Button>
          </ListItem>
        </List>
        <Box className="shopCont">
          <p>Shop</p>
        </Box>
        <CardMedia component="img" height="400" width="100" image={Image} />
      </Box>
    </div>
  );
}

export default Header;
