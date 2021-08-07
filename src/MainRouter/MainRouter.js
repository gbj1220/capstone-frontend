import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../components/Login/Login';
import SignUp from '../components/Login/Login';
import UsersRecipes from '../components/UsersRecipes/UsersRecipes';

export default function MainRouter() {
	return (
		<div>
			<Router>
				<Switch>
					<Route>
						<Login />
					</Route>
					<Route>
						<SignUp />
					</Route>
					<Route>
						<UsersRecipes />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}
