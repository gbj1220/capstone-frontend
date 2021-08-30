import Axios from '../components/Axios/Axios';
import { toast } from 'react-toastify';

export const LOG_IN = 'codeImmersives/sign-in';
export const LOG_OUT = 'codeImmersives/logout';

const token = localStorage.getItem('jwtToken');

export const initialState = {
	isAuth: false,
	user: null,
	jwtToken: token,
};

export const logInActionCreator = (username, password) => async (dispatch) => {
	//calling my backend to do checks and stuff on login info and log them in or not
	try {
		const response = await Axios.post('/users/login', {
			username,
			password,
		});

		console.log(`====== response ======`);
		console.log(response);
		//setting jwtToken into localStorage so that I can grab it and put it into redux state
		localStorage.setItem('jwtToken', response.data.jwtToken);

		dispatch({
			type: LOG_IN,
			payload: {
				isAuth: true,
				jwtToken: response.data.jwtToken,
				user: username,
			},
		});
	} catch (err) {
		toast.error(err.response.data.err, {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		});
	}
};

//creating a function to log the user out
export const logoutActionCreator = (dispatch) => {
	try {
		const removedToken = localStorage.removeItem('jwtToken');

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
				isAuth: action.payload.isAuth,
				user: action.payload.user,
				jwtToken: action.payload.jwtToken,
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
