import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { reduxStore } from './redux-store/reduxStore';
import { Provider } from 'react-redux';
import { Suspense } from 'react';
import { green } from '@material-ui/core/colors';
import MainRouter from './MainRouter/MainRouter';
import Spinner from './components/Spinner/Spinner';

import './App.css';
import './components/Spinner/Spinner.css';

require('dotenv').config();

const theme = createTheme({
  palette: {
    primary: {
      main: '#BDC1C9',
    },
    secondary: {
      main: green[200],
    },
  },
});

function App() {
  return (
    <>
      <Provider store={reduxStore}>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<Spinner />}>
            <div className='MainRouter'>
              <MainRouter />
            </div>
          </Suspense>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
