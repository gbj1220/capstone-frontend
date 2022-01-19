import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Container, Grid } from "@material-ui/core";
import { getRecipesActionCreator } from "../../state-management/favoriteRecipesState";
import DisplayFavoriteRecipes from "./DisplayFavoriteRecipeCards";

const FavoriteRecipes = () => {
  const navigate = useNavigate();

  // getting called before the array is actually populated
  const recipesArr = useSelector((state) => state.favoriteRecipes.recipesArr);

  const usrToken = useSelector((state) => state.login.jwtToken);

  const dispatch = useDispatch();

  useEffect(() => {
    !usrToken ? navigate("login") : dispatch(getRecipesActionCreator());
  }, []);

  return (
    <Container>
      <Grid container justify-items='center'>
        {recipesArr.map((recipe, i) => (
          <Grid key={i}>
            <DisplayFavoriteRecipes recipe={recipe} idx={i} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FavoriteRecipes;
