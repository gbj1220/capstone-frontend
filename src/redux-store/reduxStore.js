import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  reducer as signUpReducer,
  initialState as signUpState,
} from "../state-management/signUpState";
import {
  reducer as loginReducer,
  initialState as loginState,
} from "../state-management/loginState";

import {
  reducer as userSearchReducer,
  initialState as userSearchState,
} from "../state-management/searchState";

import {
  reducer as saveRecipeReducer,
  initialState as saveRecipeState,
} from "../state-management/recipeState";

import {
  reducer as favoriteRecipesReducer,
  initialState as favoriteRecipeState,
} from "../state-management/favoriteRecipesState";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  signUp: signUpState,
  login: loginState,
  userSearch: userSearchState,
  savedRecipes: saveRecipeState,
  favoriteRecipes: favoriteRecipeState,
};

const rootReducer = combineReducers({
  signUp: signUpReducer,
  login: loginReducer,
  userSearch: userSearchReducer,
  mostRecentlySavedRecipe: saveRecipeReducer,
  favoriteRecipes: favoriteRecipesReducer,
});

const reduxStore = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default reduxStore;
