import React, { useEffect, useState } from 'react';
import { callRecipeApiActionCreator } from '../../state-management/searchState';
import { useDispatch, useSelector } from 'react-redux';
import { createTheme, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router';
import { Button, TextField, ThemeProvider } from '@material-ui/core';

import IndividualCards from '../../components/IndividualCards/IndividualCards';

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

    useEffect(() => {
        !usrToken && history.push('/login');
    });

    return (
        <div
            style={{ textAlign: 'center' }}
            onSubmit={(e) => e.preventDefault()}
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
                        onChange={(event) => setUsrInput(event.target.value)}
                    />
                    <br />

                    <Button
                        className={classes.submitBtn}
                        variant='contained'
                        color='primary'
                        onClick={() =>
                            dispatch(callRecipeApiActionCreator(usrInput))
                        }
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
