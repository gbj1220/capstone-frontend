import axios from 'axios';

const Axios = axios.create({
	baseURL: process.env.BACKEND,
});

export default Axios;
