import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { saveRecipeActionCreator } from "../../state-management/recipeState";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

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
    display: "flex",
    flexDirection: "row",
  },
  card: {
    margin: "20px",
    boxShadow: "0 2px 20px black",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#505050",
    maxWidth: "300px",
  },
  cardMedia: {
    padding: "50%",
  },
  cardTitle: {
    flexGrow: 1,
    color: "#78fff1",
  },
  cardButtons: {
    justifyContent: "center",
    alignContent: "center",
    padding: "10px",
    margin: "10px",
  },
  save_btn: {
    borderRadius: "10px",
    "&:hover": {
      border: "2px solid white",
      borderRadius: "10px",
    },
  },
  link_btn: {
    borderRadius: "10px",
    "&:hover": {
      border: "2px solid white",
      borderRadius: "10px",
    },
  },
  itemPic: {},
}));

const CardComponent = (props) => {
  const { hit, key } = props;
  const classes = useStyles();

  const history = useHistory();

  const dispatch = useDispatch();

  const jwtToken = useSelector((state) => state.login.jwtToken);

  const { label } = hit.recipe;
  const { image } = hit.recipe;
  const recipeLink = hit.recipe.url;
  const linkString = String(recipeLink);

  const handleOnClick = () => {
    dispatch(saveRecipeActionCreator(label, image, recipeLink));
    toast("Added to favorite recipes!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <Box key={key} className={classes.cardGrid}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={image}
            title='Image title'
          />

          <CardContent className={classes.cardTitle}>
            <Typography gutterBottom variant='h5' component='h5'>
              {label}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardButtons}>
            {jwtToken ? (
              <>
                <Box className={classes.link_btn}>
                  <Button
                    variant='outlined'
                    size='small'
                    color='primary'
                    onClick={() => {
                      window.open(linkString);
                    }}
                  >
                    Link to Recipe
                  </Button>
                </Box>
                <div className={classes.save_btn}>
                  <Button
                    variant='outlined'
                    size='small'
                    color='primary'
                    onClick={() => handleOnClick(label, image, recipeLink)}
                  >
                    Save to Favorites
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Button
                  size='small'
                  color='primary'
                  onClick={() => history.push("/error")}
                >
                  View Recipe
                </Button>
                <Button
                  size='small'
                  color='primary'
                  onClick={() => history.push("/error2")}
                >
                  Save to Favorites
                </Button>
              </>
            )}
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

CardComponent.propTypes = {
  label: String.isRequired,
  image: String.isRequired,
}.isRequired;

export default CardComponent;
