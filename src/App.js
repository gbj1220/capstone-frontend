import { createTheme } from '@material-ui/core/styles';
import { reduxStore } from './redux-store/reduxStore';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { green } from '@material-ui/core/colors';

import MainRouter from './MainRouter/MainRouter';

import './App.css';

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
		<Provider store={reduxStore}>
			<ThemeProvider theme={theme}>
				<div className='MainRouter'>
					<MainRouter />
				</div>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
