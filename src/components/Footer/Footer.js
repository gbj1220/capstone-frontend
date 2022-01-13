import React from "react";
import { makeStyles, AppBar, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  appBar: {
    top: "auto",
    bottom: 0,
    height: 50,
    backgroundColor: "#505050",
    position: "default",
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
        ></AppBar>
      </footer>
    </>
  );
}
