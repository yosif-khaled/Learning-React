// you need context to share the login state -- done
// keep code clean by adding the register, login and logout finctionality inside the context -- done
// useState First cleen with useReducer

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState, useReducer } from "react";
import { ActivityIndicator } from "react-native";
import { reducer, initialState } from "../reducers/userReducer";
import { loginFetch, registerFetch } from "../services/Fetch";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Here I only want to share is loggedIn and Token with other components
  // just in case set it up so that you can import the whole state

  const [currentState, dispatch] = useReducer(reducer, initialState);

  let state = { ...currentState };

  const [isLoading, setIsLoading] = useState(false);

  const onChange = (input, value) => {
    const action = {
      input: input,
      value: value,
    };
    dispatch(action);
  };

  const loggingIn = async () => {
    await loginFetch(state);
    const token = await AsyncStorage.getItem("@token");
    setIsLoading(true);
    if (token) {
      onChange("login", token);
      console.log(token);
      setIsLoading(false);
    } else {
      setIsLoading(true);
      console.log("login failed");
      alert("LOGIN FAILED: Check User Name And Password");
      setIsLoading(false);
    }
    console.log(`This is the current state: ${JSON.stringify(state)}`);
  };

  const register = async () => {
    await registerFetch(state);
    const token = await AsyncStorage.getItem("@token");
    if (token) {
      setIsLoading(true);
      onChange("register", token);
      console.log(token);
      setIsLoading(false);
    } else {
      setIsLoading(true);
      console.log("registeration failed");
      alert("REGISTERATION FAILED: Check User Name And Password");
      setIsLoading(false);
    }
    console.log(`This is the current state: ${JSON.stringify(state)}`);
  };

  const logout = async () => {
    setIsLoading(true);
    await AsyncStorage.removeItem("@token");
    onChange("logout", null);
    console.log(state.token);
    console.log("logout");
    setIsLoading(false);
  };

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <AuthContext.Provider
      value={{ ...state, onChange, loggingIn, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
