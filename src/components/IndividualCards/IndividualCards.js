import React from "react";

import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import CardComponent from "../CardComponent/CardComponent";

const IndividualCards = () => {
  const hits = useSelector((state) => state.userSearch.mainData.hits);

  return (
    <div>
      <Box
        display='flex'
        flexDirection='row'
        flexWrap='wrap'
        justifyContent='center'
      >
        {hits.map((hit, idx) => (
          <CardComponent hit={hit} key={idx} />
        ))}
      </Box>
    </div>
  );
};

export default IndividualCards;
