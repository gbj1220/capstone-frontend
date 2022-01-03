import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import { shape } from "prop-types";

const DisplayFavoriteRecipes = (props) => {
  const {
    recipe: { label, image, recipeLink },
    idx,
  } = props;

  const linkToRecipe = String(recipeLink);

  return (
    <Box key={idx}>
      <Card style={{ margin: "20px" }}>
        <Box>
          <CardMedia style={{ padding: "50%" }} image={image} />
        </Box>

        <Box bgcolor='#505050'>
          <CardContent>
            <Box color='#78fff1'>
              <Typography>{label}</Typography>
            </Box>
            <Box>
              <Button
                style={{
                  marginRight: "5px",
                  border: "2px solid #78fff1",
                  color: "#78fff1",
                }}
                variant='outlined'
                size='small'
                onClick={() => window.open(linkToRecipe)}
              >
                Go to Link
              </Button>

              <Button
                style={{ border: "2px solid #78fff1", color: "#78fff1" }}
                variant='outlined'
                size='small'
              >
                Remove
              </Button>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default DisplayFavoriteRecipes;

DisplayFavoriteRecipes.propTypes = {
  recipe: shape([]).isRequired,
}.isRequired;
