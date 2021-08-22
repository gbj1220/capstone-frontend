import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@material-ui/core';

import './CardComponent.css';

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
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		margin: '20px',
		justifyContent: 'center',
	},
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

	console.log(`====== props label ======`);
	console.log(props.hit.recipe.label);
	const label = props.hit.recipe.label;
	console.log(`====== props image ======`);
	console.log(props.hit.recipe.image);
	const image = props.hit.recipe.image;

	return (
		<>
			<Card className={classes.card}>
				<CardMedia
					className={classes.cardMedia}
					image={image}
					title='Image title'
				/>
				<CardContent className={classes.cardContent}>
					<Typography gutterBottom variant='h7' component='h5'>
						{label}
					</Typography>
					<Typography>Some more text</Typography>
				</CardContent>
				<CardActions>
					<Button
						size='small'
						color='primary'
						onClick={() => history.push('/error')}
					>
						View Recipe
					</Button>
				</CardActions>
			</Card>
		</>
	);
}
