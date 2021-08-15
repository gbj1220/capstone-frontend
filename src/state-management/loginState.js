export const LOG_IN = 'codeImmersives/sign-in';

export const logInActionCreator =
	(username, password) => async (dispatch) => {};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN:
			return {
				username: action.payload.username,
				password: action.payload.password,
			};
	}
};
