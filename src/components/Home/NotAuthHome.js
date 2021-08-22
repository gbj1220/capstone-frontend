import React, { useState } from 'react';
import { callRecipeApiActionCreator } from '../../state-management/nonUserSearchState';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IndividualCards from '../../components/IndividualCards/IndividualCards';

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
	//material-ui object being set to a variable to be used to alter css in material-ui
	const classes = useStyles();

	//setting the useDispatch function to a variable to be used to call our action handler
	const dispatch = useDispatch();

	//setting an initial state for the usrInput
	const [usrInput, setUsrInput] = useState('');

	//returning a TextField with a button underneath so that a non-authorized user can search for a recipe
	return (
		<div style={{ textAlign: 'center' }}>
			<form
				className={classes.root}
				noValidate
				autoComplete='off'
				onSubmit={(event) => event.preventDefault()}
			>
				<TextField
					id='outlined-basic'
					label='Outlined'
					variant='outlined'
					onChange={(event) => setUsrInput(event.target.value)}
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

			<div>
				<IndividualCards />
			</div>
		</div>
	);
}
