import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { logoutActionCreator } from '../../state-management/loginState';
import { createTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import React from 'react';
import { getRecipesActionCreator } from '../../state-management/favoriteRecipesState';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
	},
}));

const theme = createTheme({
	palette: {
		primary: {
			main: '#505050',
		},
	},
});

export default function ButtonAppBar() {
	const classes = useStyles();

	const token = useSelector((state) => state.login.jwtToken);

	const dispatch = useDispatch();

	const history = useHistory();

	const checkIfAuth = () => {
		if (token) {
			return (
				<div className={classes.root}>
					<ThemeProvider theme={theme}>
						<AppBar position='static'>
							<Toolbar className={classes.toolbar}>
								<Typography
									variant='h6'
									className={classes.title}
									onClick={() => history.push('/home')}
								>
									Recipe Finder
								</Typography>
								<div className={classes.twoButtons}>
									<Link to='/favorites'>
										<Button
											className={classes.logOutBtn}
											onClick={() =>
												dispatch(
													getRecipesActionCreator()
												)
											}
										>
											Favorites
										</Button>
									</Link>
									<Link to='/'>
										<Button
											className={classes.logOutBtn}
											onClick={() =>
												dispatch(logoutActionCreator)
											}
										>
											Logout
										</Button>
									</Link>
								</div>
							</Toolbar>
						</AppBar>
					</ThemeProvider>
				</div>
			);
		} else {
			return (
				<div className={classes.root}>
					<ThemeProvider theme={theme}>
						<AppBar position='static'>
							<Toolbar className={classes.toolbar}>
								<Typography
									variant='h6'
									className={classes.title}
									onClick={() => history.push('/')}
								>
									Recipe Finder
								</Typography>
								<div>
									<Link to='/sign-up'>
										<Button
											className={classes.goToSignUpBtn}
										>
											Sign Up
										</Button>
									</Link>
									<Link to='/login'>
										<Button className={classes.logInBtn}>
											Login
										</Button>
									</Link>
								</div>
							</Toolbar>
						</AppBar>
					</ThemeProvider>
				</div>
			);
		}
	};
	return checkIfAuth();
}
