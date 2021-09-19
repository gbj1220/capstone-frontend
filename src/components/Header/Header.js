import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesActionCreator } from '../../state-management/favoriteRecipesState';
import { createTheme, makeStyles } from '@material-ui/core/styles';
import { logoutActionCreator } from '../../state-management/loginState';
import { ThemeProvider } from '@material-ui/styles';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import React from 'react';

const theme = createTheme({
    palette: {
        primary: {
            main: '#505050',
        },
    },
});

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    title: {
        color: '#78FFF1',
        border: '2px solid #78FFF1',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    goToSignUpBtn: {
        color: '#78FFF1',
        border: '2px solid #78FFF1',
        marginRight: '5px',
    },
    favorites_btn: {
        color: '#78FFF1',
        border: '2px solid #78FFF1',
        marginRight: '5px',
    },
    logout_btn: {
        color: '#78FFF1',
        border: '2px solid #78FFF1',
    },
    logInBtn: {
        color: '#78FFF1',
        border: '2px solid #78FFF1',
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    const usrToken = useSelector((state) => state.login.jwtToken);

    const dispatch = useDispatch();

    const history = useHistory();

    const checkIfAuth = () => {
        return usrToken ? (
            <div className={classes.root}>
                <ThemeProvider theme={theme}>
                    <AppBar position='static'>
                        <Toolbar className={classes.toolbar}>
                            <Button
                                className={classes.title}
                                onClick={() => history.push('/home')}
                            >
                                Recipe Finder
                            </Button>
                            <div className={classes.twoButtons}>
                                <Button
                                    className={classes.favorites_btn}
                                    onClick={() =>
                                        dispatch(getRecipesActionCreator()) &&
                                        history.push('/favorites')
                                    }
                                >
                                    Favorites
                                </Button>
                                <Button
                                    className={classes.logout_btn}
                                    onClick={() =>
                                        dispatch(logoutActionCreator) &&
                                        history.push('/')
                                    }
                                >
                                    Logout
                                </Button>
                            </div>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
            </div>
        ) : (
            <div className={classes.root}>
                <ThemeProvider theme={theme}>
                    <AppBar position='static'>
                        <Toolbar className={classes.toolbar}>
                            <Button
                                className={classes.title}
                                onClick={() => history.push('/guest-search')}
                            >
                                Recipe Finder
                            </Button>
                            <div>
                                <Button
                                    className={classes.goToSignUpBtn}
                                    onClick={() => history.push('/sign-up')}
                                >
                                    Sign Up
                                </Button>
                                <Button
                                    className={classes.logInBtn}
                                    onClick={() => history.push('/login')}
                                >
                                    Login
                                </Button>
                            </div>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
            </div>
        );
    };
    return checkIfAuth();
}
