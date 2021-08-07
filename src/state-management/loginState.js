export const ADD_USER_ACTION = 'codeImmersives/addUser';

export const addUserActionCreator = (username, password) => {
	return {
		type: ADD_USER_ACTION,
		payload: {
			username: username,
			password: password,
		},
	};
};

const initialState = {
	users: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER_ACTION:
			payload = {};
	}
};
