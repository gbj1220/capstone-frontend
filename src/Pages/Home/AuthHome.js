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

import IndividualCards from "../../components/IndividualCards/IndividualCards";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50%",
      maxWidth: "700px",
    },
  },
}));

export default function AuthHome() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usrToken = useSelector((state) => state.login.jwtToken);
  const [usrInput, setUsrInput] = useState("");

  useEffect(() => !usrToken && navigate("/login"));

  return (
    <Box textAlign='center' onSubmit={(event) => event.preventDefault()}>
      <form
        className={classes.root}
        noValidate
        autoComplete='off'
        onSubmit={(event) => event.preventDefault()}
      >
        <TextField
          id='outlined-basic'
          label='Search For A Recipe'
          variant='outlined'
          style={{
            backgroundColor: "#FFFFFF",
            border: "black solid 1px",
            marginTop: "5%",
          }}
          onChange={(event) => setUsrInput(event.target.value)}
        />
        <br />

        <Button
          className={classes.submitBtn}
          variant='contained'
          color='primary'
          type='submit'
          style={{ width: "150px", marginBottom: "5%" }}
          onClick={() => dispatch(callRecipeApiActionCreator(usrInput))}
        >
          Submit
        </Button>
      </form>

      <div>
        <IndividualCards />
      </div>
    </Box>
  );
}
