import { createStore, compose, applyMiddleware } from 'redux';
import {
	reducer,
	initialState as logInState,
} from '../state-management/loginState';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
	logInState,
};

export const reduxStore = createStore(
	reducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);
