import axios from 'axios';

//creating an action and assigning it to something as a reminder
export const CALL_RECIPE_API = 'codeImmersives/callRecipeApi';

//creating an initialState for searchState to utilize
export const initialState = {
	searchedString: null,
	recipe: null,
	label: null,
};

export const callRecipeApiActionCreator = (usrInput) => async (dispatch) => {
	try {
		const response = await axios.post(
			'http://localhost:4000/users/get-recipe-data',
			{
				usrInput,
			}
		);

		const searchedString = response.data.data.q;
		const data = response.data.data;
		const hits = response.data.data.hits;

		console.log(`====== DATA ======`);
		console.log(data);
		console.log(`====== HITS ======`);
		console.log(hits);

		//looping through all the the hits
		for (let hit of hits) {
			const foodRecipe = hit.recipe;
			console.log(`====== RECIPES ======`);
			console.log(foodRecipe);
			const recipeLabel = foodRecipe.label;
			console.log(`====== LABEL ======`);
			console.log(recipeLabel);
			//looping through foodRecipe in order to get the label, image, etc...
			dispatch({
				type: CALL_RECIPE_API,
				payload: {
					searchedString: searchedString,
					recipe: foodRecipe,
					label: recipeLabel,
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
				searchedString: action.payload.searchedString,
				recipe: action.payload.recipe,
				label: action.payload.label,
			};
		default:
			return state;
	}
};
