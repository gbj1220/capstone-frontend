import Axios from "../components/Axios/Axios";

export const GET_RECIPES = "codeImmersives/getRecipe";
export const REMOVE_FAVORITE = "codeImmersives/removeFavorite";

export const initialState = {
  recipesArr: [
    {
      label: "",
      image: "",
      recipeLink: "",
    },
  ],
};

export const getRecipesActionCreator = () => async (dispatch, getState) => {
  try {
    console.log(`====== getRecipesActionCreator ran ======`);
    const currentState = getState();
    const token = currentState.login.jwtToken;

    const response = await Axios.get("/users/get-recipes", {
      headers: { authorization: `Bearer ${token}` },
    });

    const recipesArr = response.data.payload;
    const responseLabel = recipesArr.map((el) => el.label);
    const responseImage = recipesArr.map((el) => el.image);
    const responseRecipeLink = recipesArr.map((el) => el.recipeLink);

    console.log(`====== recipesArr: ${JSON.stringify(recipesArr)} ======`);
    console.log(`====== responseLabel: ${responseLabel} ======`);
    console.log(`====== responseImage: ${responseImage} ======`);

    dispatch({
      type: GET_RECIPES,
      payload: {
        label: responseLabel,
        image: responseImage,
        imageUrl: responseRecipeLink,
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
            label: action.payload.label,
            image: action.payload.image,
            imageUrl: action.payload.imageUrl,
          },
        ],
      };

    default:
      return state;
  }
};
