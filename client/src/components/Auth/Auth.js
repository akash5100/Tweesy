import React, { useState } from "react";
import { Avatar, Button, Paper, Grid, Typography, Container } from "@material-ui/core";
import useStyles from "./styles";
import Input from "./Input";

const Auth = () => {
  const [ShowPassword, setShowPassword] = useState(false);
  const isSignup = false;
  const classes = useStyles();
  const handleSubmit = () => {};
  const handleChange = () => {};
  const handleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <Container component="main" maxWidth={"xs"}>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography variant="h5">{isSignup ? `Sign up` : `Sign in`}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
              </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={ShowPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
            {isSignup && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" />}
          </Grid>
          <Button className={classes.submit} variant="contained" fullWidth type="submit" color="primary">
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
