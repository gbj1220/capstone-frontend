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

    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    goToSignUpBtn: {
        color: 'white',
    },
    logInBtn: {
        color: 'white',
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    const token = useSelector((state) => state.login.jwtToken);

    const dispatch = useDispatch();

    const history = useHistory();

    const checkIfAuth = () => {
        return token ? (
            <div className={classes.root}>
                <ThemeProvider theme={theme}>
                    <AppBar position='static'>
                        <Toolbar className={classes.toolbar}>
                            <Typography
                                variant='h6'
                                className={classes.title}
                                onClick={() => history.push('/home')}
                            >
                                Recipe Finder
                            </Typography>
                            <div className={classes.twoButtons}>
                                <Link to='/favorites'>
                                    <Button
                                        className={classes.logOutBtn}
                                        onClick={() =>
                                            dispatch(getRecipesActionCreator())
                                        }
                                    >
                                        Favorites
                                    </Button>
                                </Link>
                                <Link to='/'>
                                    <Button
                                        className={classes.logOutBtn}
                                        onClick={() =>
                                            dispatch(logoutActionCreator)
                                        }
                                    >
                                        Logout
                                    </Button>
                                </Link>
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
                            <Typography
                                variant='h6'
                                className={classes.title}
                                onClick={() => history.push('/guest-search')}
                            >
                                Recipe Finder
                            </Typography>
                            <div>
                                <Link to='/sign-up'>
                                    <Button className={classes.goToSignUpBtn}>
                                        Sign Up
                                    </Button>
                                </Link>
                                <Link to='/login'>
                                    <Button className={classes.logInBtn}>
                                        Login
                                    </Button>
                                </Link>
                            </div>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
            </div>
        );
    };
    return checkIfAuth();
}
