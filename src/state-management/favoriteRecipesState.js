import Axios from '../components/Axios/Axios';

export const GET_RECIPES = 'codeImmersives/getRecipe';

export const initialState = {
	mainData: {
		favoriteRecipes: [
			{
				label: null,
				recipeLink: null,
				image: null,
			},
		],
	},
};

export const getRecipesActionCreator = () => async (dispatch, getState) => {
	try {
		const currentState = getState();
		const jwtToken = currentState.login.jwtToken;

		const response = await Axios.get('/users/get-recipes', {
			headers: { authorization: `Bearer ${jwtToken}` },
		});
		dispatch({
			type: GET_RECIPES,
			payload: {
				response: response.data.recipes,
			},
		});
	} catch (error) {
		console.log(error);
	}
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_RECIPES:
			return {
				...state,
				mainData: {
					favoriteRecipes: action.payload.response,
				},
			};
		default:
			return state;
	}
};
