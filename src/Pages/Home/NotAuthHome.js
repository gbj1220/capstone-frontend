import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { callRecipeApiActionCreator } from "../../state-management/searchState";
import IndividualCards from "../IndividualCards/IndividualCards";
import {
  Button,
  TextField,
  ThemeProvider,
  createTheme,
  makeStyles,
} from "@material-ui/core";

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

export default function NotAuthHome() {
  // material-ui object being set to a variable to be used to alter css in material-ui
  const classes = useStyles();

  // setting the useDispatch function to a variable to be used to call our action handler
  const dispatch = useDispatch();

  // setting an initial state for the usrInput
  const [usrInput, setUsrInput] = useState("");

  const theme = createTheme({
    palette: {
      primary: {
        main: "#595959",
      },
    },
  });

  /* returning a TextField with a button underneath so that a non-authorized
     user can search for a recipe */
  return (
    <div style={{ textAlign: "center", backgroundColor: "#99cccc" }}>
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
            onChange={(event) => setUsrInput(event.target.value)}
            style={{
              backgroundColor: "#FFFFFF",
              border: "black solid 1px",
              marginTop: "10%",
            }}
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
    </div>
  );
}
