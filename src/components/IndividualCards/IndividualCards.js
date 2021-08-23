import React from 'react';
import CardComponent from '../CardComponent/CardComponent';

import { useSelector } from 'react-redux';
import { Box } from '@material-ui/core';

export default function IndividualCards() {
	const hits = useSelector((state) => state.nonUserSearch.mainData.hits);
	console.log(`====== mainData INDIVIDUAL-Cards Component ======`);
	console.log(hits);

	return (
		<div>
			<Box display='flex' flexWrap='wrap'>
				{hits.map((hit) => {
					return <CardComponent hit={hit} />;
				})}
			</Box>
		</div>
	);
}