import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core';
import {
  getRecipesActionCreator,
} from '../../state-management/favoriteRecipesState';
import DisplayFavoriteRecipes from './DisplayFavoriteRecipes';

export default function FavoriteRecipes() {
  const history = useHistory();

  const recipesArr = useSelector(
    (state) => state.favoriteRecipes.mainData.favoriteRecipes,
  );

  const usrToken = useSelector((state) => state.login.jwtToken);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesActionCreator());
  }, []);

  useEffect(() => !usrToken && history.push('/login'));

  return (
    <div>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        bgcolor="#78fff1"
      >
        {recipesArr.map((recipe) => (
          <DisplayFavoriteRecipes recipe={recipe} />
        ))}
      </Box>
    </div>
  );
}
