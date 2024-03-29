import { AppBar, Box, Button, Toolbar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { createTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { useNavigate } from "react-router-dom";
import React from "react";
import { logoutActionCreator } from "../../state-management/loginState";
import { getRecipesActionCreator } from "../../state-management/favoriteRecipesState";

const theme = createTheme({
  palette: {
    primary: {
      main: "#505050",
    },
  },
});

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    color: "#78FFF1",
    border: "2px solid #78FFF1",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  goToSignUpBtn: {
    color: "#78FFF1",
    border: "2px solid #78FFF1",
    marginRight: "5px",
  },
  favorites_btn: {
    color: "#78FFF1",
    border: "2px solid #78FFF1",
    marginRight: "5px",
  },
  logout_btn: {
    color: "#78FFF1",
    border: "2px solid #78FFF1",
  },
  logInBtn: {
    color: "#78FFF1",
    border: "2px solid #78FFF1",
  },
  appBar: {
    position: "fixed",
  },
  spacer: {
    width: "100%",
    height: "100px",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const usrToken = useSelector((state) => state.login.jwtToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checkIfAuth = () =>
    usrToken ? (
      <Box flexGrow={1}>
        <ThemeProvider theme={theme}>
          <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
              <Button
                className={classes.title}
                onClick={() => navigate("/home")}
              >
                Recipe Finder
              </Button>
              <div className={classes.twoButtons}>
                <Button
                  className={classes.favorites_btn}
                  onClick={() =>
                    dispatch(getRecipesActionCreator()) &&
                    navigate("/favorites")
                  }
                >
                  Favorites
                </Button>
                <Button
                  className={classes.logout_btn}
                  onClick={() => dispatch(logoutActionCreator)}
                >
                  Logout
                </Button>
              </div>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
        <Box className={classes.spacer} />
      </Box>
    ) : (
      <Box flexGrow={1}>
        <ThemeProvider theme={theme}>
          <Box>
            <AppBar className={classes.appBar}>
              <Box>
                <Toolbar className={classes.toolbar}>
                  <Button
                    className={classes.title}
                    onClick={() => navigate("/guest-search")}
                  >
                    Recipe Finder
                  </Button>
                  <div>
                    <Button
                      className={classes.goToSignUpBtn}
                      onClick={() => navigate("/sign-up")}
                    >
                      Sign Up
                    </Button>
                    <Button
                      className={classes.logInBtn}
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </Button>
                  </div>
                </Toolbar>
              </Box>
            </AppBar>
          </Box>
        </ThemeProvider>
      </Box>
    );
  return checkIfAuth();
}
