import React from 'react';

import { useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import CardComponent from '../CardComponent/CardComponent';

export default function IndividualCards() {
  const hits = useSelector((state) => state.nonUserSearch.mainData.hits);
  // console.log(`====== mainData INDIVIDUAL-Cards Component ======`);
  // console.log(hits);

  return (
    <div>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
      >
        {hits.map((hit, idx) => <CardComponent hit={hit} index={idx} />)}
      </Box>
    </div>
  );
}
