import React, { Suspense } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import reduxStore from "./redux-store/reduxStore";
import MainRouter from "./MainRouter/MainRouter";
import Spinner from "./components/Spinner/Spinner";
import "./components/Spinner/Spinner.css";

require("dotenv").config();

const theme = createTheme({
  palette: {
    primary: {
      main: "#78FFF1",
    },
  },
});

const App = () => {
  return (
    <>
      <Provider store={reduxStore}>
        <Suspense fallback={<Spinner />}>
          <div className='MainRouter'>
            <ThemeProvider theme={theme}>
              <MainRouter />
            </ThemeProvider>
          </div>
        </Suspense>
      </Provider>
    </>
  );
};

export default App;
