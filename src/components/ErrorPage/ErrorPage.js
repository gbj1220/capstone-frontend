import React from 'react';
import { Button } from '@material-ui/core';

import './ErrorPage.css';

export default function ErrorPage() {
	return (
		<div className='error-message-non-user-search'>
			<h2>Must be a member to view recipes. Please sign up or log in.</h2>
			<Button variant='contained' color='primary'>
				Back to Home
			</Button>
		</div>
	);
}
