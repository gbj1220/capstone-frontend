import React, { useState } from 'react';
import { logoutActionCreator } from '../../state-management/loginState';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

import { useDispatch } from 'react-redux';

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
	console.log(usrInput);

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
				>
					Submit
				</Button>
			</form>
		</div>
	);
}
