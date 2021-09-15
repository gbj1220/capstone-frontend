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
} from '../state-management/searchState';

import {
    reducer as saveRecipeReducer,
    initialState as saveRecipeState,
} from '../state-management/recipeState';

import {
    reducer as favoriteRecipesReducer,
    initialState as favoriteRecipeState,
} from '../state-management/favoriteRecipesState';

import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    signUp: signUpState,
    login: loginState,
    nonUserSearch: nonUserSearchState,
    savedRecipes: saveRecipeState,
    favoriteRecipes: favoriteRecipeState,
};

const rootReducer = combineReducers({
    signUp: signUpReducer,
    login: loginReducer,
    nonUserSearch: nonUserSearchReducer,
    mostRecentlyAddedRecipe: saveRecipeReducer,
    favoriteRecipes: favoriteRecipesReducer,
});

export const reduxStore = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);
