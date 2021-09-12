import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core';
import { getRecipesActionCreator } from '../../state-management/favoriteRecipesState';

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
}));
export default function FavoriteRecipes() {
    const classes = useStyles();

    const recipesArr = useSelector(
        (state) => state.favoriteRecipes.mainData.favoriteRecipes
    );
    console.log(`====== recipesArr ======`);
    console.log(recipesArr);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipesActionCreator());
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <Box
                display='flex'
                flexDirection='row'
                flexWrap='wrap'
                justifyContent='center'
            >
                {recipesArr.map((recipe, i) => {
                    console.log(recipe.label);
                    return (
                        <Card
                            className={classes.card}
                            style={{ margin: '20px' }}
                        >
                            <CardMedia
                                className={classes.cardMedia}
                                image={recipe.image}
                            />
                            <CardContent>
                                <Typography>{recipe.label}</Typography>
                                <Button
                                    variant='outlined'
                                    size='small'
                                    onClick={() =>
                                        window.open(recipe.recipeLink)
                                    }
                                >
                                    Go to Link
                                </Button>
                            </CardContent>
                        </Card>
                    );
                })}
            </Box>
        </div>
    );
}
