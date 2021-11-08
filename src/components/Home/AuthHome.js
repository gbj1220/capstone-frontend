import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createTheme, makeStyles, Button, TextField, ThemeProvider,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { callRecipeApiActionCreator } from '../../state-management/searchState';

import IndividualCards from '../IndividualCards/IndividualCards';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50%',
      maxWidth: '700px',
    },
  },
  submitBtn: {
    width: '150px',
  },
}));

export default function AuthHome() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const history = useHistory();

  const usrToken = useSelector((state) => state.login.jwtToken);

  const [usrInput, setUsrInput] = useState('');

  const theme = createTheme({
    palette: {
      primary: {
        main: '#595959',
      },
    },
  });

  useEffect(() => !usrToken && history.push('/login'));

  return (
    <div
      style={{ textAlign: 'center', backgroundColor: '#99cccc' }}
      onSubmit={(e) => e.preventDefault()}
    >
      <ThemeProvider theme={theme}>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={(event) => event.preventDefault()}
        >
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            style={{ backgroundColor: '#ffffff', border: 'black solid 1px', marginTop: '75px' }}
            onChange={(event) => setUsrInput(event.target.value)}
          />
          <br />

          <Button
            className={classes.submitBtn}
            variant="contained"
            color="primary"
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
