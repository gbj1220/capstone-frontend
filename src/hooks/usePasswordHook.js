import { useState } from "react";
import { isStrongPassword } from "validator";

const usePasswordHook = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);

    if (!isStrongPassword(e.target.value)) {
      setPasswordError(true);
      setPasswordErrorMessage(
        "Password must include at least 8 characters, 1 lowercase letter, 1 uppercase letter, and 1 symbol"
      );
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }
  };

  return {
    password,
    handlePasswordOnChange,
    passwordError,
    passwordErrorMessage,
  };
};

export default usePasswordHook;
