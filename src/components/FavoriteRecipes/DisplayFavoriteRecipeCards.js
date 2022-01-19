import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { teal } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Button, Grid } from "@material-ui/core";
import { removeRecipesActionCreator } from "../../state-management/favoriteRecipesState";
import { useDispatch } from "react-redux";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function DisplayFavoriteRecipeCards({ recipe }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const dispatch = useDispatch();

  return (
    <Grid container spacing={4}>
      {recipe.recipes.map((recipe) => {
        return (
          <Grid item key={recipe._id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
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
