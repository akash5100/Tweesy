import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import useStyles from "./styles";
import Input from "./Input";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setSignUp] = useState(false);
  const classes = useStyles();
  const handleSubmit = () => {};
  const handleChange = () => {};

  const handleShowPassword = () =>
    setShowPassword((previousState) => !previousState);

  const switchMode = () => {
    setSignUp((previousState) => !previousState);
    handleShowPassword(false);
  };

  return (
    <Container component="main" maxWidth={"xs"}>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography variant="h5">{isSignup ? `Sign up` : `Sign in`}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="Password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Confirm Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justify="flex-end">
            <Grid Item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account: Sign in"
                  : "Dont Have an account: Sign up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
