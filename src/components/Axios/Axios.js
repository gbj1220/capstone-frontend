import axios from 'axios';

const Axios = axios.create({
	baseURL: process.env.REACT_APP_BACKEND,
});

export default Axios;
