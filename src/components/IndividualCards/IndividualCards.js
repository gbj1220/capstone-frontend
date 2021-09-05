import React from 'react';
import CardComponent from '../CardComponent/CardComponent';

import { useSelector } from 'react-redux';
import { Box } from '@material-ui/core';

export default function IndividualCards() {
	const hits = useSelector((state) => state.nonUserSearch.mainData.hits);
	// console.log(`====== mainData INDIVIDUAL-Cards Component ======`);
	// console.log(hits);

	return (
		<div>
			<Box
				display='flex'
				flexDirection='row'
				flexWrap='wrap'
				justifyContent='center'
			>
				{hits.map((hit, i) => {
					return <CardComponent hit={hit} index={i} />;
				})}
			</Box>
		</div>
	);
}
