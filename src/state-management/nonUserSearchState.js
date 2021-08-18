import Axios from '../components/Axios/Axios';

//creating an action and assigning it to something as a reminder
export const CALL_RECIPE_API = 'codeImmersives/callRecipeApi';

//creating an initialState for searchState to utilize
export const initialState = {
	ingredientList: null,
	searchedString: null,
	recipe: null,
	label: null,
	uri: null,
};

export const callRecipeApiActionCreator = (usrInput) => async (dispatch) => {
	try {
		const response = await Axios.post('/users/get-recipe-data', {
			usrInput,
		});

		const searchedString = response.data.data.q;
		const hits = response.data.data.hits;

		//looping through all the the hits
		for (let hit of hits) {
			const recipeIngredientList = hit.recipe.ingredientLines;
			const recipeLabel = hit.recipe.label;
			const recipeURI = hit.recipe.uri;
			const foodRecipe = hit.recipe;

			//looping through foodRecipe in order to get the label, image, etc...
			dispatch({
				type: CALL_RECIPE_API,
				payload: {
					ingredientList: recipeIngredientList,
					searchedString: searchedString,
					recipe: foodRecipe,
					label: recipeLabel,
					uri: recipeURI,
				},
			});
		}
	} catch (error) {
		console.log(error);
	}
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CALL_RECIPE_API:
			return {
				ingredientList: action.payload.ingredientList,
				searchedString: action.payload.searchedString,
				recipe: action.payload.recipe,
				label: action.payload.label,
				uri: action.payload.uri,
			};
		default:
			return state;
	}
};
