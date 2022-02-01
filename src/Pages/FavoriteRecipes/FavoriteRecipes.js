import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box } from "@material-ui/core";
import { getRecipesActionCreator } from "../../state-management/favoriteRecipesState";
import DisplayFavoriteRecipes from "./DisplayFavoriteRecipeCards";
import { removeRecipesActionCreator } from "../../state-management/favoriteRecipesState";

export default function FavoriteRecipes() {
  const navigate = useNavigate();

  // getting called before the array is actually populated
  const recipesArr = useSelector((state) => state.favoriteRecipes.recipesArr);

  const usrToken = useSelector((state) => state.login.jwtToken);

  const dispatch = useDispatch();

  useEffect(() => {
    !usrToken ? navigate("login") : dispatch(getRecipesActionCreator());
  }, []);

  return (
    <Box justifyItems='center'>
      {recipesArr.map((recipe) => (
        <Box key={recipe._id}>
          <DisplayFavoriteRecipes recipe={recipe} />
        </Box>
      ))}
    </Box>
  );
}
