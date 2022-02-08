import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box } from "@material-ui/core";
import { getRecipesActionCreator } from "../../state-management/favoriteRecipesState";
import DisplayFavoriteRecipes from "./DisplayFavoriteRecipeCards";
import { Grid } from "@mui/material";

export default function FavoriteRecipes() {
  const navigate = useNavigate();

  // getting called before the array is actually populated
  const recipesArr = useSelector((state) => state.favoriteRecipes.recipesArr);
  console.log("useSelector recipes: ", recipesArr);

  const usrToken = useSelector((state) => state.login.jwtToken);

  const dispatch = useDispatch();

  useEffect(() => {
    !usrToken ? navigate("login") : dispatch(getRecipesActionCreator());
  }, []);

  return (
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={1}
    >
      {recipesArr.map((recipe, i) => (
        <Grid item key={i} sm={6} md={4} lg={3}>
          <DisplayFavoriteRecipes recipe={recipe} />
        </Grid>
      ))}
    </Grid>
  );
}
