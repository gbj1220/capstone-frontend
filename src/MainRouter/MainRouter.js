import React from 'react';
import UsersRecipes from '../components/UsersRecipes/UsersRecipes';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import NotAuthHome from '../components/Home/NotAuthHome';
import AuthHome from '../components/Home/AuthHome';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SignUp from '../components/SignUp/SignUp';
import Login from '../components/Login/Login';

import { Route, Switch } from 'react-router-dom';

export default function MainRouter() {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path='/users-recipes' component={UsersRecipes} />
				<Route exact path='/error' component={ErrorPage} />
				<Route exact path='/sign-up' component={SignUp} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/home' component={AuthHome} />
				<Route exact path='/' component={NotAuthHome} />
			</Switch>
			<Footer />
		</>
	);
}
