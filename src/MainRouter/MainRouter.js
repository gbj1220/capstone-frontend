import React from 'react';
import { createTheme } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

const FavoriteRecipes = React.lazy(() =>
    import('../components/FavoriteRecipes/FavoriteRecipes')
);

const NotAuthHome = React.lazy(() => import('../components/Home/NotAuthHome'));
const ErrorPage = React.lazy(() => import('../components/ErrorPage/ErrorPage'));
const AuthHome = React.lazy(() => import('../components/Home/AuthHome'));
const SignUp = React.lazy(() => import('../components/SignUp/SignUp'));
const Header = React.lazy(() => import('../components/Header/Header'));
const Footer = React.lazy(() => import('../components/Footer/Footer'));
const Login = React.lazy(() => import('../components/Login/Login'));
const ErrorPage2 = React.lazy(() =>
    import('../components/ErrorPage/ErrorPage')
);

export default function MainRouter() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#505050',
                secondary: '#ffff8ff',
            },
        },
    });

    return (
        <>
            <Header />
            <Switch>
                <Route exact path='/favorites' component={FavoriteRecipes} />
                <Route exact path='/sign-up' component={SignUp} />
                <Route exact path='/error2' component={ErrorPage2} />
                <Route exact path='/guest-search' component={NotAuthHome} />
                <Route exact path='/error' component={ErrorPage} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/home' component={AuthHome} />
                <Route exact path='/' component={Login} />
            </Switch>
            <Footer />
        </>
    );
}
