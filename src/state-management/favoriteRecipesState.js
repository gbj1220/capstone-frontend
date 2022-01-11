import Axios from "../components/Axios/Axios";

export const GET_RECIPES = "codeImmersives/getRecipe";
export const REMOVE_FAVORITE = "codeImmersives/removeFavorite";

export const initialState = {
  recipesArr: [
    {
      recipes: [],
    },
  ],
};

export const getRecipesActionCreator = () => async (dispatch, getState) => {
  try {
    // console.log(`====== getRecipesActionCreator ran ======`);
    const currentState = getState();
    const token = currentState.login.jwtToken;

    const response = await Axios.get("/users/get-recipes", {
      headers: { authorization: `Bearer ${token}` },
    });

    dispatch({
      type: GET_RECIPES,
      payload: {
        recipes: response.data.recipes,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipesArr: [
          {
            recipes: action.payload.recipes,
          },
        ],
      };

    default:
      return state;
  }
};
