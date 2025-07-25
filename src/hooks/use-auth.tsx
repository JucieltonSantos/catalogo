import Cookies from "js-cookie";

const COOKIE_KEY = "token";

function useAuth() {
  const setToken = (value: string, days = 1) => {
    Cookies.set(COOKIE_KEY, value, { expires: days });
  };

  const getToken = () => {
    return Cookies.get(COOKIE_KEY);
  };

  const removeToken = () => {
    Cookies.remove(COOKIE_KEY);
  };

  return { setToken, getToken, removeToken };
}

export { useAuth };