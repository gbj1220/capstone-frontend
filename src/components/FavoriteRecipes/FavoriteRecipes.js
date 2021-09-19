import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core';
import {
    getRecipesActionCreator,
    removeRecipeActionCreator,
} from '../../state-management/favoriteRecipesState';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        margin: '25px',
        boxShadow: '0 2px 20px black',
        borderRadius: '10px',
        width: '600px',
        height: '400px',
    },
    cardMedia: {
        paddingTop: '50%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    mainCard: {
        display: 'flex',
        justifyContent: 'center',
        objectFit: 'contain',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '10px',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
    },
}));
export default function FavoriteRecipes() {
    const classes = useStyles();

    const history = useHistory();

    const recipesArr = useSelector(
        (state) => state.favoriteRecipes.mainData.favoriteRecipes
    );

    const usrToken = useSelector((state) => state.login.jwtToken);
    console.log(usrToken);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipesActionCreator());
    }, []);

    useEffect(() => {
        !usrToken && history.push('/login');
    });

    return (
        <div style={{ textAlign: 'center' }}>
            <Box
                display='flex'
                flexDirection='row'
                flexWrap='wrap'
                justifyContent='center'
            >
                {recipesArr.map((recipe, i) => {
                    return (
                        <Card
                            className={classes.card}
                            style={{ margin: '20px' }}
                        >
                            <CardMedia
                                className={classes.cardMedia}
                                image={recipe.image}
                            />
                            <CardContent className={classes.content}>
                                <Typography>{recipe.label}</Typography>
                                <div className={classes.buttons}>
                                    <Button
                                        variant='outlined'
                                        size='small'
                                        onClick={() =>
                                            window.open(recipe.recipeLink)
                                        }
                                    >
                                        Go to Link
                                    </Button>
                                    <Button
                                        variant='outlined'
                                        size='small'
                                        onClick={() =>
                                            dispatch(
                                                removeRecipeActionCreator()
                                            )
                                        }
                                    >
                                        Remove from Favorites
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </Box>
        </div>
    );
}
