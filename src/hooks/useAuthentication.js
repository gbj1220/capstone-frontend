import jwtDecode from 'jwt-decode';

const useAuthenticationHooks = () => {
  function getLocalStorageJWT() {
    return localStorage.getItem('jwtToken');
  }
  function setLocalStorageJWT(jwtToken) {
    return localStorage.setItem('jwtToken', jwtToken);
  }
  function removeToken() {
    localStorage.removeItem('usersToken');
  }
  function checkToken() {
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
  }
  return [checkToken, removeToken];
};
export default useAuthenticationHooks;
