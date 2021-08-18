import React, { useState } from 'react';
import { callRecipeApiActionCreator } from '../../state-management/nonUserSearchState';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '50%',
			maxWidth: '700px',
		},
	},
	submitBtn: {
		width: '150px',
	},
}));

export default function NotAuthHome() {
	//setting a variable to useSelector function to grab the current state from the redux-store
	const nonUserSearchState = useSelector((state) => state.nonUserSearch);
	const searchedString = nonUserSearchState.searchedString;
	const recipe = nonUserSearchState.recipe;
	const label = nonUserSearchState.label;
	const uri = nonUserSearchState.uri;
	const ingredientList = nonUserSearchState.ingredientList;

	console.log(`====== NON-USER SEARCH STATE======`);
	console.log(nonUserSearchState);

	console.log(`====== SEARCHED STRING ======`);
	console.log(searchedString);

	console.log(`====== RECIPE ======`);
	console.log(recipe);

	console.log(`====== LABEL ======`);
	console.log(label);

	console.log(`====== URI ======`);
	console.log(uri);

	console.log(`====== INGREDIENT LIST ======`);
	console.log(ingredientList);

	//material-ui object being set to a variable to be used to alter css in material-ui
	const classes = useStyles();

	//setting the useDispatch function to a variable to be used to call our action handler
	const dispatch = useDispatch();

	//setting an initial state for the usrInput
	const [usrInput, setUsrInput] = useState('');

	//returning a TextField with a button underneath so that a non-authorized user can search for a recipe
	return (
		<div style={{ textAlign: 'center' }}>
			<form className={classes.root} noValidate autoComplete='off'>
				<TextField
					id='outlined-basic'
					label='Outlined'
					variant='outlined'
					onChange={(e) => setUsrInput(e.target.value)}
				/>
				<br />

				<Button
					className={classes.submitBtn}
					variant='contained'
					color='primary'
					onClick={() =>
						dispatch(callRecipeApiActionCreator(usrInput))
					}
				>
					Submit
				</Button>
			</form>

			<div>Show Search Results</div>
		</div>
	);
}
