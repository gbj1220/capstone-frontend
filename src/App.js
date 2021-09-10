import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { reduxStore } from './redux-store/reduxStore';
import { Provider } from 'react-redux';
import { Suspense } from 'react';
import { red } from '@material-ui/core/colors';
import MainRouter from './MainRouter/MainRouter';
import Spinner from './components/Spinner/Spinner';

import './components/Spinner/Spinner.css';

require('dotenv').config();

const theme = createTheme({
    palette: {
        primary: {
            main: red[400],
        },
    },
});

function App() {
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
}

export default App;
