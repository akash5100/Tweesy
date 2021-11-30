import React, { useState, useEffect } from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { withrouter } from "react-router";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  // useEffect(() => {
  //   const token = user?.token;

  //   setUser(JSON.parse(localStorage.getItem("profile")));
  // }, []);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div>
        <Typography
          className={classes.heading}
          variant="h2"
          align="center"
          component={Link}
          to="/"
        >
          Tweesy
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            ></Avatar>
            <Typography variant="h6" className={classes.userName}></Typography>
            <Button
              variant="contained"
              color="secondary"
              //   onClick={}
              className={classes.logout}
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
