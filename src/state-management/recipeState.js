import Axios from '../components/Axios/Axios';

export const SAVE_RECIPE = 'codeImmersives/saveRecipe';

export const initialState = {
	title: [],
	link: [],
};

const jwtToken = localStorage.getItem('jwtToken');

export const saveRecipeActionCreator =
	(label, recipeLink) => async (dispatch, getState) => {
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

			dispatch({
				type: SAVE_RECIPE,
				payload: {
					response,
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
				title: [action.payload.response],
				link: [action.payload.response],
			};
		default:
			return state;
	}
};
