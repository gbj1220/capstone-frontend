import { createStore, compose, applyMiddleware } from 'redux';
import {
	reducer,
	initialState as logInInitialState,
} from '../state-management/loginState';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
	logIn: logInInitialState,
};

export const reduxStore = createStore(
	reducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);
