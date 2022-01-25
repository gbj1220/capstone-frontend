import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { saveRecipeActionCreator } from "../../state-management/recipeState";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

export default function CardComponent({ hit }) {
  const classes = useStyles();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const usrToken = useSelector((state) => state.login.jwtToken);

  const { label } = hit.recipe;
  const { image } = hit.recipe;
  const { url } = hit.recipe;

  const saveRecipe = () => {
    dispatch(saveRecipeActionCreator(label, image, url));
    toast("Added to favorite recipes!", {
      position: "top-left",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  React.useEffect(() => !usrToken && navigate("/login"));

  return (
    <Grid item>
      <Paper elevation={10}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component='img'
            height='140'
            image={image}
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {label}
            </Typography>
          </CardContent>
          <Box display='flex' justifyContent='center'>
            <CardActions>
              <Button
                onClick={() => saveRecipe(label, image, url)}
                size='small'
              >
                Save to Favorites
              </Button>
              <Button onClick={() => window.open(url)} size='small'>
                View Recipe
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Paper>
    </Grid>
  );
}

CardComponent.propTypes = {}.isRequired;
