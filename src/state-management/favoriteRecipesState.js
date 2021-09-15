import Axios from '../components/Axios/Axios';

export const GET_RECIPES = 'codeImmersives/getRecipe';
export const REMOVE_FAVORITE = 'codeImmersives/removeFavorite';

export const initialState = {
    mainData: {
        favoriteRecipes: [
            {
                label: null,
                recipeLink: null,
                image: null,
            },
        ],
    },
};

export const getRecipesActionCreator = () => async (dispatch, getState) => {
    try {
        let currentState = getState();
        let jwtToken = currentState.login.jwtToken;

        let response = await Axios.get('/users/get-recipes', {
            headers: { authorization: `Bearer ${jwtToken}` },
        });

        dispatch({
            type: GET_RECIPES,
            payload: {
                response: response.data.recipes,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

export const removeRecipeActionCreator = () => async (dispatch, getState) => {
    try {
        let currentState = getState();
        let jwtToken = currentState.login.jwtToken;

        let response = await Axios.delete('/users/remove-recipe', {
            headers: { authorization: `Bearer ${jwtToken}` },
        });

        console.log(`====== response ======`);
        console.log(response);

        dispatch({
            type: REMOVE_FAVORITE,
            payload: {},
        });

        // const response = await Axios.post('/users/remove-recipe', {});
    } catch (err) {
        console.log(err);
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                mainData: {
                    favoriteRecipes: action.payload.response,
                },
            };

        default:
            return state;
    }
};
