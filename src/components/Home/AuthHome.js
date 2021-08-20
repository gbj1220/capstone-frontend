import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

export default function AuthHome() {
	const token = localStorage.getItem('jwtToken');

	const history = useHistory();

	useEffect(() => {
		if (!token) {
			history.push('/');
		}
	}, []);

	return <div>Authorized User</div>;
}
