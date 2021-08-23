import Axios from '../components/Axios/Axios';

export const SAVE_RECIPE = 'codeImmersives/saveRecipe';

export const initialState = {
	label: null,
	recipeLink: null,
};

export const saveRecipeActionCreator =
	(label, recipeLink) => async (dispatch, getState) => {
		console.log(`====== saveRecipeActionCreator Ran ======`);
		try {
			const currentState = getState();
			const jwtToken = currentState.login.jwtToken;

			const response = await Axios.post(
				'/users/save-recipe',
				{
					label,
					recipeLink,
				},

				{
					headers: {
						authorization: `Bearer ${jwtToken}`,
					},
				}
			);
			// console.log(`====== response ======`);
			// console.log(response);
			// console.log(`====== response.data ======`);
			console.log(response.data.newSavedRecipe);
			dispatch({
				type: SAVE_RECIPE,
				payload: {
					label: response.data.newSavedRecipe.label,
					recipeLink: response.data.newSavedRecipe.recipeLink,
				},
			});
		} catch (error) {
			console.log(error);
		}
	};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_RECIPE:
			return {
				...state,
				label: action.payload.label,
				recipeLink: action.payload.recipeLink,
			};
		default:
			return state;
	}
};
