import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { toast } from 'react-toastify';

import './CardComponent.css';
import { saveRecipeActionCreator } from '../../state-management/recipeState';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    margin: '25px',
    boxShadow: '0 2px 20px black',
    borderRadius: '10px',
    width: '400px',
    height: '400px',
  },
  cardMedia: {
    paddingTop: '56%',
  },
  cardContent: {
    flexGrow: 1,
  },
  cardButtons: {
    justifyContent: 'center',
    alignContent: 'center',
    margin: '25px',
  },
  save_btn: {
    border: '2px solid red',
    borderRadius: '10px',
    '&:hover': {
      border: '2px solid white',
      borderRadius: '10px',
    },
  },
  link_btn: {
    border: '2px solid red',
    borderRadius: '10px',
    '&:hover': {
      border: '2px solid white',
      borderRadius: '10px',
    },
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function CardComponent(props) {
  const { hit, index } = props;
  const classes = useStyles();

  const history = useHistory();

  const dispatch = useDispatch();

  const jwtToken = useSelector((state) => state.login.jwtToken);

  const { label } = hit.recipe;
  const { image } = hit.recipe;
  const recipeLink = hit.recipe.url;
  const linkString = String(recipeLink);

  function handleOnClick() {
    dispatch(saveRecipeActionCreator(label, image, recipeLink));
    toast('Added to favorite recipes!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div key={index}>
      <Card className={classes.card} style={{ margin: '20px' }}>
        <CardMedia
          className={classes.cardMedia}
          image={image}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h5">
            {label}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardButtons}>
          {jwtToken ? (
            <>
              <div className={classes.link_btn}>
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  onClick={() => {
                    window.open(linkString);
                  }}
                >
                  Link to Recipe
                </Button>
              </div>
              <div className={classes.save_btn}>
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  onClick={() => handleOnClick(label, image, recipeLink)}
                >
                  Save to Favorites
                </Button>
              </div>
            </>
          ) : (
            <>
              <Button
                size="small"
                color="primary"
                onClick={() => history.push('/error')}
              >
                View Recipe
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => history.push('/error2')}
              >
                Save to Favorites
              </Button>
            </>
          )}
        </CardActions>
      </Card>
    </div>
  );
}

CardComponent.propTypes = {
  label: String.isRequired,
  image: String.isRequired,
}.isRequired;
