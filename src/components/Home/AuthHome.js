import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createTheme,
  makeStyles,
  Button,
  TextField,
  ThemeProvider,
  Box,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import { callRecipeApiActionCreator } from "../../state-management/searchState";

import IndividualCards from "../IndividualCards/IndividualCards";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50%",
      maxWidth: "700px",
    },
  },
  submitBtn: {
    width: "150px",
  },
}));

const AuthHome = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const usrToken = useSelector((state) => state.login.jwtToken);

  const [usrInput, setUsrInput] = useState("");

  const theme = createTheme({
    palette: {
      primary: {
        main: "#595959",
      },
    },
  });

  useEffect(() => !usrToken && navigate("/login"));

  return (
    <div
      style={{ textAlign: "center", backgroundColor: "#99cccc" }}
      onSubmit={(event) => event.preventDefault()}
    >
      <ThemeProvider theme={theme}>
        <form
          className={classes.root}
          noValidate
          autoComplete='off'
          onSubmit={(event) => event.preventDefault()}
        >
          <TextField
            id='outlined-basic'
            label='Outlined'
            variant='outlined'
            style={{
              backgroundColor: "#FFFFFF",
              border: "black solid 1px",
              marginTop: "10%",
            }}
            onChange={(event) => setUsrInput(event.target.value)}
          />
          <br />

          <Button
            className={classes.submitBtn}
            variant='contained'
            color='primary'
            type='submit'
            onClick={() => dispatch(callRecipeApiActionCreator(usrInput))}
          >
            Submit
          </Button>
        </form>
      </ThemeProvider>
      <div>
        <IndividualCards />
      </div>
      <Box display='flex' justifyContent='space-evenly'>
        <Button variant='contained' color='#ffffff'>
          Previous
        </Button>
        <Button variant='contained' color='#ffffff'>
          Next
        </Button>
      </Box>
    </div>
  );
};
export default AuthHome;
