import { createContext, useEffect, useState, useContext } from 'react';
import { ACCESS_TOKEN_NAME } from '../constants/globalValues';
import instance from './baseUrl';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const logIn = async (username, password) => {
    const response = await instance.post("login", {
      email: username,
      password: password
    });

    if (response.success === true) {
      setIsLogged(true);
      navigator.push("/game-dashboard");
    }
  };

  const logout = () => {
    setIsLogged(false);
  };

  const signUp = async (username, password) => {
    try {
      const response = await instance.post("register", {
        email: username,
        password: password
      });

      if (response.success === true) {
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN_NAME)) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLogged, logIn, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
