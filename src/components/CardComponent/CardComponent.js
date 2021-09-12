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
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function CardComponent(props) {
    const classes = useStyles();

    const history = useHistory();

    const dispatch = useDispatch();

    const jwtToken = useSelector((state) => state.login.jwtToken);

    const label = props.hit.recipe.label;
    const image = props.hit.recipe.image;
    const recipeLink = props.hit.recipe.url;
    const linkString = String(recipeLink);

    return (
        <div key={props.index}>
            <Card className={classes.card} style={{ margin: '20px' }}>
                <CardMedia
                    className={classes.cardMedia}
                    image={image}
                    title='Image title'
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h5'>
                        {label}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardButtons}>
                    {jwtToken ? (
                        <>
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
                            <Button
                                variant='outlined'
                                size='small'
                                color='primary'
                                onClick={() =>
                                    dispatch(
                                        saveRecipeActionCreator(
                                            label,
                                            image,
                                            recipeLink
                                        )
                                    )
                                }
                            >
                                Save to Favorites
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                size='small'
                                color='primary'
                                onClick={() => history.push('/error')}
                            >
                                View Recipe
                            </Button>
                            <Button
                                size='small'
                                color='primary'
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
