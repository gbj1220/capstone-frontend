import axios from 'axios';

export const LOG_IN = 'codeImmersives/sign-in';
export const LOG_OUT = 'codeImmersives/logout';

export const initialState = {
	isAuth: false,
	user: null,
	jwtToken: null,
};

export const logInActionCreator = (username, password) => async (dispatch) => {
	try {
		let response = await axios.post('http://localhost:4000/users/login', {
			username,
			password,
		});

		dispatch({
			type: LOG_IN,
			payload: {
				isAuth: true,
				jwtToken: response.data.jwtToken,
				user: username,
			},
		});
	} catch (e) {
		console.log(e);
	}
};
//creating a function to log the user out
export const logoutActionCreator = (dispatch) => {
	dispatch({
		type: LOG_OUT,
		payload: {
			isAuth: false,
			jwtToken: null,
			user: null,
		},
	});
};

//reducer to handle the users authorization
export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN:
			return {
				isAuth: action.payload.isAuth,
				user: action.payload.user,
				jwtToken: action.payload.jwtToken,
			};

		case LOG_OUT:
			return {
				isAuth: action.payload.isAuth,
				user: action.payload.user,
				jwtToken: action.payload.jwtToken,
			};

		default:
			return state;
	}
};
