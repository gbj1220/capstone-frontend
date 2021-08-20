import Axios from '../components/Axios/Axios';

export const ADD_USER_ACTION = 'codeImmersives/addUser';

export const initialState = {
	users: [],
};

export const addUserActionCreator =
	(email, username, password) => async (dispatch) => {
		try {
			let response = await Axios.post('/users/sign-up', {
				email,
				username,
				password,
			});

			console.log(`====== RESPONSE ======`);
			console.log(response);

			dispatch({
				type: ADD_USER_ACTION,
				payload: {
					email: response.email,
					username: response.username,
					password: response.password,
				},
			});
		} catch (error) {
			console.log(error);
		}
	};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER_ACTION:
			return {
				email: action.payload.email,
				username: action.payload.username,
				password: action.payload.password,
			};
		default:
			return state;
	}
};
