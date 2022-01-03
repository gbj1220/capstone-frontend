import jwtDecode from "jwt-decode";

const useAuthenticationHooks = () => {
  const getLocalStorageJWT = () => {
    return localStorage.getItem("jwtToken");
  };
  const setLocalStorageJWT = (jwtToken) => {
    return localStorage.setItem("jwtToken", jwtToken);
  };
  const removeToken = () => {
    localStorage.removeItem("usersToken");
  };
  const checkToken = () => {
    const token = getLocalStorageJWT();

    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        removeToken();
        return false;
      }
      setLocalStorageJWT(token);
      return true;
    }
    return false;
  };
  return [checkToken, removeToken];
};

export default useAuthenticationHooks;
