import React, { useState } from 'react';
import { callRecipeApiActionCreator } from '../../state-management/nonUserSearchState';
import { useDispatch } from 'react-redux';
import { Button, TextField, ThemeProvider } from '@material-ui/core';
import { createTheme, makeStyles } from '@material-ui/core';
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

export default function NotAuthHome() {
    //material-ui object being set to a variable to be used to alter css in material-ui
    const classes = useStyles();

    //setting the useDispatch function to a variable to be used to call our action handler
    const dispatch = useDispatch();

    //setting an initial state for the usrInput
    const [usrInput, setUsrInput] = useState('');
    const [clickedSubmit, setClickedSubmit] = useState('false');

    const theme = createTheme({
        palette: {
            primary: {
                main: '#595959',
            },
        },
    });

    //returning a TextField with a button underneath so that a non-authorized user can search for a recipe
    return (
        <div style={{ textAlign: 'center' }}>
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
                        type='submit'
                        className={classes.submitBtn}
                        variant='contained'
                        color='primary'
                        onClick={() =>
                            dispatch(callRecipeApiActionCreator(usrInput)) &&
                            setClickedSubmit(true)
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
