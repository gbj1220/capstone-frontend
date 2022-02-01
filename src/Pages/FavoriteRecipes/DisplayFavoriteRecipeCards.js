import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { teal } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Button, Grid } from "@material-ui/core";
import { removeRecipesActionCreator } from "../../state-management/favoriteRecipesState";
import { useDispatch } from "react-redux";

export default function DisplayFavoriteRecipeCards({ recipe }) {
  const [expanded, setExpanded] = useState(false);

  const dispatch = useDispatch();

  return (
    <Grid container spacing={4}>
      {recipe.recipes.map((recipe) => {
        return (
          <Grid item key={recipe._id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <Typography variant='h3'>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: teal[500] }} aria-label='recipe'>
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label='settings'>
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={recipe.label}
                  subheader={Date()}
                />
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
                  onClick={() =>
                    dispatch(removeRecipesActionCreator(recipe._id))
                  }
                >
                  Remove Recipe
                </Button>
              </Box>
              <Collapse in={expanded} timeout='auto' unmountOnExit></Collapse>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

DisplayFavoriteRecipeCards.propTypes = {}.isRequired;
