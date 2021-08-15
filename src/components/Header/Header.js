import { createTheme, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

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

	return (
		<div className={classes.root}>
			<ThemeProvider theme={theme}>
				<AppBar position='static'>
					<Toolbar className={classes.toolbar}>
						<Typography variant='h6' className={classes.title}>
							Recipe Finder
						</Typography>
						<Button className={classes.logInBtn}>Login</Button>
					</Toolbar>
				</AppBar>
			</ThemeProvider>
		</div>
	);
}
