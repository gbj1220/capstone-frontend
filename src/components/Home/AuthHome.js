import React, { useState } from 'react';
import { callRecipeApiActionCreator } from '../../state-management/nonUserSearchState';
import { useDispatch } from 'react-redux';
import { Button, TextField, ThemeProvider } from '@material-ui/core';
import { createTheme, makeStyles } from '@material-ui/core';
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

export default function AuthHome() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [usrInput, setUsrInput] = useState('');
	const theme = createTheme({
		palette: {
			primary: {
				main: '#595959',
			},
		},
	});
	return (
		<div style={{ textAlign: 'center' }}>
			<ThemeProvider theme={theme}>
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
			</ThemeProvider>

			<div>
				<IndividualCards />
			</div>
		</div>
	);
}
