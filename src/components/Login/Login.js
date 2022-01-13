import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  CssBaseline,
  TextField,
  Typography,
} from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logInActionCreator } from "../../state-management/loginState";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    height: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errMsg: {
    color: "red",
  },
}));

export default function Login() {
  const classes = useStyles();

  const dispatch = useDispatch();

  // setting a variable to use the useNavigate hook
  const navigate = useNavigate();

  // grabbing jwtToken from the redux login state
  const jwtToken = useSelector((state) => state.login.jwtToken);
  const errMsg = useSelector((state) => state.login.error.msg);

  // setting states for username and password to grab the users input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // make a function to check users username against their password

  useEffect(() => {
    if (jwtToken) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [jwtToken]);

  return (
    <Box container component='main' className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Box mt={10}>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
        </Box>

        <div className={classes.errMsg}>
          {errMsg && errMsg.length > 0 ? <h4>{errMsg}</h4> : null}
        </div>
        <Box>
          <form
            className={classes.form}
            noValidate
            onSubmit={(event) => event.preventDefault()}
          >
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='username'
              label='Username'
              name='username'
              autoComplete='username'
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              color='primary'
              type='submit'
              fullWidth
              variant='contained'
              className={classes.submit}
              onClick={() => dispatch(logInActionCreator(username, password))}
            >
              Sign In
            </Button>

            <Box container />
          </form>
        </Box>
      </div>
    </Box>
  );
}
