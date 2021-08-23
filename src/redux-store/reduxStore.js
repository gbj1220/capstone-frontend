import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import {
	reducer as signUpReducer,
	initialState as signUpState,
} from '../state-management/signUpState';
import {
	reducer as loginReducer,
	initialState as loginState,
} from '../state-management/loginState';

import {
	reducer as nonUserSearchReducer,
	initialState as nonUserSearchState,
} from '../state-management/nonUserSearchState';

import {
	reducer as saveRecipeReducer,
	initialState as saveRecipeState,
} from '../state-management/recipeState';

import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
	signUp: signUpState,
	login: loginState,
	nonUserSearch: nonUserSearchState,
	savedRecipes: saveRecipeState,
};

const rootReducer = combineReducers({
	signUp: signUpReducer,
	login: loginReducer,
	nonUserSearch: nonUserSearchReducer,
	savedRecipes: saveRecipeReducer,
});

export const reduxStore = createStore(
	rootReducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);
