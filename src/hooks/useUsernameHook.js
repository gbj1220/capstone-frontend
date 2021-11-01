import { useState } from 'react';
import { matches } from 'validator';

function useUsernameHook() {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('');

  const handleUsernameOnSubmit = (e) => {
    setUsername(e.target.value);

    const checkForSymbol = (target) => {
      if (matches(target, /[!@#$%^&*()[\],.?":;{}|<>]/g)) {
        setUsernameError(true);
        setUsernameErrorMessage(
          'Username can not contain special characters',
        );
      } else {
        setUsernameError(false);
        setUsernameErrorMessage('');
      }
    };
    return checkForSymbol(username);
  };
  return {
    username,
    handleUsernameOnSubmit,
    usernameError,
    usernameErrorMessage,
  };
}

export default useUsernameHook;
