import Axios from '../components/Axios/Axios';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

export const LOG_IN = 'codeImmersives/sign-in';
export const LOG_OUT = 'codeImmersives/logout';
export const LOG_IN_ERROR = 'codeImmersives/logInError';

//declaring the initial state
export const initialState = {
	user: null,
	jwtToken: null,
	error: {
		msg: '',
		id: null,
	},
};

export const logInActionCreator =
	(username, password) => async (dispatch, getState) => {
		const state = getState();
		//calling my backend to do checks and stuff on login info and log them in or not
		try {
			let response = await Axios.post('/users/login', {
				username,
				password,
			});

			//setting jwtToken into localStorage so that I can grab it and put it into redux state
			await localStorage.setItem('jwtToken', response.data.jwtToken);
			await dispatch({
				type: LOG_IN,
				payload: {
					jwtToken: response.data.jwtToken,
					user: username,
					error: {
						msg: response.data.err,
						id: uuidv4(),
					},
				},
			});
		} catch (err) {
			console.log(err);
		}
	};

//creating a function to log the user out
export const logoutActionCreator = (dispatch) => {
	try {
		let removedToken = localStorage.removeItem('jwtToken');

		dispatch({
			type: LOG_OUT,
			payload: {
				removedToken,
			},
		});
	} catch (err) {
		console.log(err);
	}
};

//reducer to handle the users authorization
export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN:
			return {
				...state,
				user: action.payload.user,
				jwtToken: action.payload.jwtToken,
				error: {
					msg: action.payload.error.msg,
					id: action.payload.error.id,
				},
			};
		case LOG_OUT:
			return {
				...state,
				jwtToken: action.payload.removedToken,
			};

		default:
			return state;
	}
};
