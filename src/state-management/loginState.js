export const LOG_IN = 'codeImmersives/sign-in';

export const logInActionCreator = (username, password) => async (dispatch) => {
	let response = await axios.post('http://localhost:4000/admin/get-users');
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN:
			return {
				username: action.payload.username,
				password: action.payload.password,
			};
	}
};
