import React from "react";
import { makeStyles, AppBar, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  appBar: {
    top: "auto",
    bottom: 0,
    height: 50,
    backgroundColor: "#505050",
    marginTop: "30",
  },
}));

const Footer = () => {
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
};

export default Footer;
