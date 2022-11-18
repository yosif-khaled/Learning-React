// you need context to share the login state -- done
// keep code clean by adding the register, login and logout finctionality inside the context -- done
// useState First cleen with useReducer

import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(null);

  const login = async (email, password) => {
    setIsLoading(true);
    const response = await fetch("http://192.168.1.8:3030/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    console.log(data.user);

    if (data.user) {
      alert("Login Successful");
      setToken(data.user);
      AsyncStorage.setItem("token", token);
    } else {
      alert("Check Username and Password");
    }
    setIsLoading(false);
  };

  const register = async (name, email, password) => {
    setIsLoading(true);
    AsyncStorage.removeItem("token");
    const response = await fetch("http://192.168.1.8:3030/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      setToken(data.user);
      AsyncStorage.setItem("token", token);
    }
    console.log(data.user);
    setIsLoading(false);
  };

  const logout = async () => {
    setIsLoading(true);
    setToken(null);
    await AsyncStorage.removeItem("token");
    console.log("logout");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("token");
      setToken(userToken);
      console.log(userToken);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ token, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
