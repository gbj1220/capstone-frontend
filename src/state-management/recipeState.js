import Axios from '../components/Axios/Axios';

export const SAVE_RECIPE = 'codeImmersives/saveRecipe';

export const initialState = {
  mainData: {
    label: null,
    image: null,
    recipeLink: null,
  },
};

export const saveRecipeActionCreator = (label, image, recipeLink) => async (dispatch, getState) => {
  console.log('====== saveRecipeActionCreator Ran ======');
  try {
    const currentState = getState();
    const { jwtToken } = currentState.login;

    const response = await Axios.post(
      '/users/save-recipe',
      {
        label,
        image,
        recipeLink,
      },

      {
        headers: {
          authorization: `Bearer ${jwtToken}`,
        },
      },
    );
    dispatch({
      type: SAVE_RECIPE,
      payload: {
        label: response.data.newSavedRecipe.label,
        image: response.data.newSavedRecipe.image,
        recipeLink: response.data.newSavedRecipe.recipeLink,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_RECIPE:
      return {
        ...state,
        mainData: {
          label: action.payload.label,
          image: action.payload.image,
          recipeLink: action.payload.recipeLink,
        },
      };
    default:
      return state;
  }
};
