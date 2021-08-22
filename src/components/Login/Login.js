import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Button,
	CssBaseline,
	Grid,
	Paper,
	TextField,
	FormControl,
	FormHelperText,
	Typography,
} from '@material-ui/core/';
import { logInActionCreator } from '../../state-management/loginState';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundRepeat: 'no-repeat',
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[50]
				: theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignInSide() {
	const classes = useStyles();

	const dispatch = useDispatch();

	//setting a variable to use the useHistory hook
	const history = useHistory();

	//grabbing jwtToken from the redux login state
	const jwtToken = useSelector((state) => state.login.jwtToken);

	//setting states for username and password to grab the users input
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	//make a function to check users username against their password

	useEffect(() => {
		if (jwtToken) {
			history.push('/home');
		} else {
			history.push('/login');
		}
	}, [history, jwtToken]);

	return (
		<Grid container component='main' className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid
				item
				xs={12}
				sm={8}
				md={5}
				component={Paper}
				elevation={6}
				square
			>
				<div className={classes.paper}>
					<Typography component='h1' variant='h5'>
						Sign in
					</Typography>
					<form
						className={classes.form}
						noValidate
						onSubmit={(event) => event.preventDefault()}
					>
						<FormControl fullWidth>
							<TextField
								variant='outlined'
								margin='normal'
								required
								id='username'
								label='Username'
								name='username'
								autoComplete='username'
								autoFocus
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
							<FormHelperText></FormHelperText>
						</FormControl>

						<FormControl fullWidth>
							<TextField
								variant='outlined'
								margin='normal'
								required
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<FormHelperText></FormHelperText>
						</FormControl>

						<Button
							type='submit'
							fullWidth
							variant='contained'
							color='primary'
							className={classes.submit}
							onClick={() =>
								dispatch(logInActionCreator(username, password))
							}
						>
							Sign In
						</Button>

						<Grid container></Grid>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}
