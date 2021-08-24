import React from 'react';
import { makeStyles } from '@material-ui/core';
import { AppBar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	appBar: {
		top: 'auto',
		bottom: 0,
		height: 100,
		backgroundColor: '#505050',
	},
}));

export default function Footer() {
	const classes = useStyles();
	return (
		<>
			<footer className={classes.footer}>
				<AppBar
					position='fixed'
					color='primary'
					className={classes.appBar}
				>
					<Typography
						variant='h6'
						align='center'
						gutterBottom
					></Typography>
				</AppBar>
			</footer>
		</>
	);
}
