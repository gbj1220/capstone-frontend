import React from 'react';
import FavoriteRecipes from '../components/FavoriteRecipes/FavoriteRecipes';
import ErrorPage2 from '../components/ErrorPage/ErrorPage2';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import NotAuthHome from '../components/Home/NotAuthHome';
import AuthHome from '../components/Home/AuthHome';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SignUp from '../components/SignUp/SignUp';
import Login from '../components/Login/Login';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core';

import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function MainRouter() {
	const theme = createTheme({
		palette: {
			primary: {
				main: '#505050',
			},
		},
	});

	return (
		<>
			<Header />
			<ToastContainer />
			<Switch>
				<ThemeProvider theme={theme}>
					<Route exact path='' />
					<Route
						exact
						path='/favorites'
						component={FavoriteRecipes}
					/>
					<Route exact path='/error2' component={ErrorPage2} />
					<Route exact path='/error' component={ErrorPage} />
					<Route exact path='/sign-up' component={SignUp} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/home' component={AuthHome} />
					<Route exact path='/' component={NotAuthHome} />
				</ThemeProvider>
			</Switch>
			<Footer />
		</>
	);
}
