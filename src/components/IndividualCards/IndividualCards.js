import React from "react";

import { useSelector } from "react-redux";
import { Box, Container, Grid } from "@material-ui/core";
import CardComponent from "../CardComponent/CardComponent";

export default function IndividualCards() {
  const hits = useSelector((state) => state.userSearch.mainData.hits);

  return (
    <Container>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={1}
      >
        {hits.map((hit, idx) => (
          <Grid item key={idx} sm={6} md={4} lg={3}>
            <CardComponent hit={hit} idx={idx} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
