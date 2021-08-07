import { createStore, compose, applyMiddleware } from 'redux';
import { reducer } from '../components/Login/Login';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
	user: {
		id: 1,
		username: 'Greg',
		email: '1@1.com',
	},
};

export const reduxStore = createStore(
	reducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);
