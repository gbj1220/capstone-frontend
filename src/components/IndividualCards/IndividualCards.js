import React from 'react';
import _ from 'lodash';
import CardComponent from '../CardComponent/CardComponent';
import Footer from '../Footer/Footer';

import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
}));

export default function IndividualCards() {
	const classes = useStyles();

	const hits = useSelector((state) => state.nonUserSearch.mainData.hits);
	console.log(`====== mainData INDIVIDUAL-Cards Component ======`);
	console.log(hits);

	return (
		<>
			<Container className={classes.cardGrid} maxWidth='lg'>
				<Grid container spacing={4}>
					{hits.map((hit) => {
						return <CardComponent hit={hit} />;
					})}
				</Grid>
			</Container>
		</>
	);
}
