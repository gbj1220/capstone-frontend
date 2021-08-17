import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { createTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

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
	logOutButton: {},
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

	const authChecker = useSelector((state) => state.login.isAuth);
	console.log(authChecker);

	const checkIfAuth = () => {
		if (authChecker) {
			return (
				<div className={classes.root}>
					<ThemeProvider theme={theme}>
						<AppBar position='static'>
							<Toolbar className={classes.toolbar}>
								<Typography
									variant='h6'
									className={classes.title}
								>
									Recipe Finder
								</Typography>
								<Link to='/'>
									<Button className={classes.logOutBtn}>
										Logout
									</Button>
								</Link>
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
								>
									Recipe Finder
								</Typography>
								<Link to='/login'>
									<Button className={classes.logInBtn}>
										Login
									</Button>
								</Link>
							</Toolbar>
						</AppBar>
					</ThemeProvider>
				</div>
			);
		}
	};
	return checkIfAuth();
}
