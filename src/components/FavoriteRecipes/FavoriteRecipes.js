import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Container, Grid } from "@material-ui/core";
import { getRecipesActionCreator } from "../../state-management/favoriteRecipesState";
import DisplayFavoriteRecipes from "./DisplayFavoriteRecipeCards";

export default function FavoriteRecipes() {
  const navigate = useNavigate();

  // getting called before the array is actually populated
  const recipesArr = useSelector((state) => state.favoriteRecipes.recipesArr);

  console.log(`====== recipesArr ======`);
  console.log(recipesArr);

  const usrToken = useSelector((state) => state.login.jwtToken);

  const dispatch = useDispatch();

  useEffect(() => {
    !usrToken ? navigate("login") : dispatch(getRecipesActionCreator());
  }, []);

  return (
    <Box>
      <Container>
        <Grid container justify-items='center'>
          {recipesArr.map((recipe, _id) => (
            <Grid key={_id}>
              <DisplayFavoriteRecipes recipe={recipe} id={_id} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
