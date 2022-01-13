import React from "react";

import { useSelector } from "react-redux";
import { Box, Container, Grid } from "@material-ui/core";
import CardComponent from "../CardComponent/CardComponent";

export default function IndividualCards() {
  const hits = useSelector((state) => state.userSearch.mainData.hits);

  return (
    <Container>
      <Grid container spacing={4} justifyContent='center'>
        {hits.map((hit, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
            <CardComponent hit={hit} idx={idx} />
          </Grid>
        ))}
      </Grid>
      <Box margin={10} />
    </Container>
  );
}
