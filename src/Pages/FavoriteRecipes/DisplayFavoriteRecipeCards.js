import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { teal } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Button } from "@material-ui/core";
import { removeRecipesActionCreator } from "../../state-management/favoriteRecipesState";
import { useDispatch } from "react-redux";
import { Paper } from "@mui/material";

export default function DisplayFavoriteRecipeCards({ recipe }) {
  const dispatch = useDispatch();
  console.log(`====== recipe in DisplayFavoriteRecipeCards ======`);
  console.log(recipe);

  return (
    <Box item key={recipe._id}>
      <Paper elevation={5}>
        <Card sx={{ maxWidth: 345 }}>
          <Typography
            variant='body2'
            whiteSpace='noWrap'
            textAlign='center'
            p={3}
            color='teal'
          >
            {recipe.label}
          </Typography>
          <CardMedia
            component='img'
            height='194'
            image={recipe.image}
            alt='Paella dish'
          />
          <Box textAlign='center' paddingBottom={1} paddingTop={1}>
            <Button onClick={() => window.open(recipe.recipeLink)}>
              View Recipe
            </Button>
            <Button
              onClick={() => dispatch(removeRecipesActionCreator(recipe._id))}
            >
              Remove Recipe
            </Button>
          </Box>
        </Card>
      </Paper>
    </Box>
  );
}

DisplayFavoriteRecipeCards.propTypes = {}.isRequired;
