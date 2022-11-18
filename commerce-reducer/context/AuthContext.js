// you need context to share the login state -- done
// keep code clean by adding the register, login and logout finctionality inside the context -- done
// useState First cleen with useReducer

import { createContext, useEffect, useReducer } from "react";
import { reducer, initialState } from "../reducers/reducer";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [token, setToken] = useState(null);

  // const login = async (email, password) => {
  //   setIsLoading(true);
  //   const response = await fetch("http://192.168.1.8:3030/api/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email,
  //       password,
  //     }),
  //   });

  //   const data = await response.json();

  //   console.log(data.user);

  //   if (data.user) {
  //     alert("Login Successful");
  //     setToken(data.user);
  //     AsyncStorage.setItem("token", token);
  //   } else {
  //     alert("Check Username and Password");
  //   }
  //   setIsLoading(false);
  //   // };

  //   const register = async ( name, email, password ) => {
  //     setIsLoading(true);
  //     AsyncStorage.removeItem("token");
  //     const response = await fetch("http://192.168.1.8:3030/api/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         password,
  //       }),
  //     });

  //     const data = await response.json();

  //     if (data.status === "ok") {
  //       setToken(data.user);
  //       AsyncStorage.setItem("token", token);
  //     }
  //     console.log(data.user);
  //     setIsLoading(false);
  //   };

  //   const logout = () => {
  //     setIsLoading(true);
  //     setToken(null);
  //     AsyncStorage.removeItem("token");
  //     console.log("logout");
  //     setIsLoading(false);
  //   };

  //   const isLoggedIn = async () => {
  //     try {
  //       setIsLoading(true);
  //       let userToken = await AsyncStorage.getItem("token");
  //       setToken(userToken);
  //       console.log(userToken);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     isLoggedIn();
  //   }, []);

  // Here I only want to share is loggedIn and Token with other components
  // just in case set it up so that you can import the whole state

  const [currentState, dispatch] = useReducer(reducer, initialState);
  
  let state = {...currentState}

  const onChange = (input, value) => {
    const action = {
      input: input,
      value: value,
    };
    dispatch(action);
  };


  return (
    <AuthContext.Provider value={{...state, onChange, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
};
