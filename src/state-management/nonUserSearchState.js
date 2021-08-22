import Axios from '../components/Axios/Axios';

//creating an action and assigning it to something as a reminder
export const CALL_RECIPE_API = 'codeImmersives/callRecipeApi';

//creating an initialState for searchState to utilize
export const initialState = {
	mainData: {
		hits: [],
	},
};

export const callRecipeApiActionCreator = (usrInput) => async (dispatch) => {
	try {
		const response = await Axios.post('/users/get-recipe-data', {
			usrInput,
		});
		// console.log(`====== response ======`);
		// console.log(response);

		dispatch({
			type: CALL_RECIPE_API,
			payload: {
				response: response.data.data.hits,
			},
		});
	} catch (error) {
		console.log(error);
	}
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CALL_RECIPE_API:
			return {
				...state,
				mainData: {
					hits: action.payload.response,
				},
			};
		default:
			return state;
	}
};
