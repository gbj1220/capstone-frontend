import axios from 'axios';

const Axios = axios.create({
	baseURL: process.env.HOST,
});

export default Axios;
