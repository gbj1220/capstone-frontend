import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';

import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import UsersRecipes from '../components/UsersRecipes/UsersRecipes';

export default function MainRouter() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/login'>
					<Login />
				</Route>
				<Route exact path='/'>
					<SignUp />
				</Route>
				<Route exact path='/users-recipes'>
					<UsersRecipes />
				</Route>
			</Switch>
		</div>
	);
}
