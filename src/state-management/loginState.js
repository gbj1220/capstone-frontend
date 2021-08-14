import axios from 'axios';

export const ADD_USER_ACTION = 'codeImmersives/addUser';

export const addUserActionCreator =
	(email, username, password) => async (dispatch, getState) => {
		try {
			let response = await axios.post(
				'http://localhost:4000/users/sign-up',
				{
					email,
					username,
					password,
				}
			);
			console.log(response);

			dispatch({
				type: ADD_USER_ACTION,
				payload: {
					email,
					username,
					password,
				},
			});
		} catch (error) {
			console.log(error);
		}
	};

export const initialState = {
	users: [],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER_ACTION:
			return {
				email: action.payload.email,
				username: action.payload.username,
				password: action.payload.password,
			};
	}
	return state;
};
