import Axios from "../components/Axios/Axios";

export const GET_RECIPES = "codeImmersives/getRecipe";
export const DELETE_RECIPE = "codeImmersives/deleteRecipe";
export const LOG_OUT = "codeImmersives/logout";
export const CHECK_AUTH = "codeImmersives/checkAuth";

export const initialState = {
  recipesArr: [],
};

export const getRecipesActionCreator = () => async (dispatch, getState) => {
  try {
    // console.log(`====== getRecipesActionCreator ran!! ======`);
    const currentState = getState();
    const token = currentState.login.jwtToken;
    const response = await Axios.get("/users/get-recipes", {
      headers: { authorization: `Bearer ${token}` },
    });
    console.log("response.data.recipes: ", response.data.recipes);
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

export const removeRecipesActionCreator =
  (id) => async (dispatch, getState) => {
    try {
      const currentState = getState();
      const token = currentState.login.jwtToken;
      const response = await Axios.post(
        "/users/delete-recipe",
        { id },
        { headers: { authorization: `Bearer ${token}` } }
      );
      // console.log("response.data.recipes");
      // console.log(response.data.recipes);
      dispatch({
        type: DELETE_RECIPE,
        payload: {
          // recipes: response.data.recipes,
          removedId: id,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

export const logoutActionCreator = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: LOG_OUT,
      payload: {
        token: null,
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
        recipesArr: action.payload.recipes,
      };
    case DELETE_RECIPE:
      return {
        ...state,
        recipesArr: state.recipesArr.filter(
          ({ _id }) => _id !== action.payload.removedId
        ),
      };
    case LOG_OUT:
      return {
        ...state,
      };
    default:
      return state;
  }
};
