import { createContext, useEffect, useState, useContext } from "react";
import { instance, publicInstance } from "./baseUrl";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(
    !!localStorage.getItem("AccessToken")
  );
  console.log("isLogged");

  const logIn = async (username, password) => {
    try {
      const response = await publicInstance.post("login", {
        email: username,
        password: password
      });

      if (response.data.success === true) {
        console.log(response.data);
        localStorage.setItem("AccessToken", response.data.token);
        setIsLogged(true);
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const logout = () => {
    setIsLogged(false);
  };

  const signUp = async (username, password) => {
    try {
      const response = await publicInstance.post("register", {
        email: username,
        password: password
      });

      if (response.data.success === true) {
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  useEffect(() => {
    if (localStorage.getItem("AccessToken")) {
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
};

export const useAuth = () => {
  return useContext(AuthContext);
};
