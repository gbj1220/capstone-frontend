import { useState } from 'react';
import { isEmail } from 'validator';

function useEmailHook() {
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [emailErrorMessage, setEmailErrorMessage] = useState('');

	const handleEmailOnChange = (e) => {
		setEmail(e.target.value);
		if (!isEmail(email)) {
			setEmailError(true);
			setEmailErrorMessage('Please enter a valid email address');
		} else {
			setEmailError(false);
			setEmailErrorMessage('');
		}
	};

	return {
		email,
		handleEmailOnChange,
		emailError,
		emailErrorMessage,
	};
}

export default useEmailHook;
