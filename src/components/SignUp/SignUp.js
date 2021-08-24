import { addUserActionCreator } from '../../state-management/signUpState';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	Button,
	CssBaseline,
	Container,
	FormControl,
	FormHelperText,
	Grid,
	TextField,
	Typography,
} from '@material-ui/core';

import usePasswordHook from '../../hooks/usePasswordHook';
import useUsernameHook from '../../hooks/useUsernameHook';
import useEmailHook from '../../hooks/useEmailHook';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function Login() {
	const classes = useStyles();

	const dispatch = useDispatch();

	const token = localStorage.getItem('jwtToken');

	const [isError, setIsError] = useState(false);

	const { email, handleEmailOnChange, emailError, emailErrorMessage } =
		useEmailHook();

	const {
		password,
		handlePasswordOnChange,
		passwordError,
		passwordErrorMessage,
	} = usePasswordHook();

	const {
		username,
		handleUsernameOnSubmit,
		usernameError,
		usernameErrorMessage,
	} = useUsernameHook();

	useEffect(() => {
		email.length !== 0 &&
		username.length !== 0 &&
		password.length !== 0 &&
		!emailError &&
		!passwordError &&
		!usernameError
			? setIsError(false)
			: setIsError(true);
	}, [email, password, username, emailError, usernameError, passwordError]);

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component='h1' variant='h5'>
					Sign up
				</Typography>
				<form
					className={classes.form}
					noValidate
					onSubmit={(e) => e.preventDefault()}
				>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<FormControl error={emailError} fullWidth>
								<TextField
									variant='outlined'
									required
									id='email'
									label='Email Address'
									name='email'
									value={email}
									autoComplete='email'
									onChange={handleEmailOnChange}
								/>
								<FormHelperText id='email-error'>
									{emailError && emailErrorMessage}
								</FormHelperText>
							</FormControl>
						</Grid>
						<Grid item xs={12}>
							<FormControl error={usernameError} fullWidth>
								<TextField
									name='username'
									variant='outlined'
									required
									id='username'
									label='Username'
									value={username}
									autoComplete='username'
									onChange={handleUsernameOnSubmit}
								/>
								<FormHelperText>
									{usernameError && usernameErrorMessage}
								</FormHelperText>
							</FormControl>
						</Grid>

						<Grid item xs={12}>
							<FormControl error={passwordError} fullWidth>
								<TextField
									variant='outlined'
									required
									name='password'
									label='Password'
									type='password'
									id='password'
									value={password}
									autoComplete='current-password'
									onChange={handlePasswordOnChange}
								/>
								<FormHelperText>
									{passwordError && passwordErrorMessage}
								</FormHelperText>
							</FormControl>
						</Grid>
					</Grid>
					<Link to='/login'>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							color='primary'
							className={classes.submit}
							onClick={() =>
								dispatch(
									addUserActionCreator(
										email,
										username,
										password
									)
								)
							}
							disabled={isError ? true : false}
						>
							Sign Up
						</Button>
					</Link>
				</form>
			</div>
		</Container>
	);
}
