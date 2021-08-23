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
	Link,
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
	card: {},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
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
	const recipeShareAs = props.hit.recipe.shareAs;
	const linkString = String(recipeLink);
	const shareString = String(recipeShareAs);

	return (
		<>
			<Card style={{ margin: '20px' }}>
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
				<CardActions>
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
								onClick={() => history.push('/error')}
							>
								Save to Favorites
							</Button>
						</>
					)}
				</CardActions>
			</Card>
		</>
	);
}
