import { useReducer } from "react";


let user = AsyncStorage.getItem("currentUser") ? JSON.parse(AsyncStorage.getItem('currentUser')).user : ""

let token = AsyncStorage.getItem("currentUser")
    ? JSON.parse(AsyncStorage.getItem("currentUser")).auth_token
    : "";

export const initialState = {
    userDetails: "" || user,
    token: "" || token,
    loading: false,
    errorMessage: null
};

export const AuthReducer = (initialState, action) => {
    switch (action.type) {
      case "REQUEST_LOGIN":
        return {
          ...initialState,
          loading: true
        };
      case "LOGIN_SUCCESS":
        return {
          ...initialState,
          user: action.payload.user,
          token: action.payload.auth_token,
          loading: false
        };
      case "LOGOUT":
        return {
          ...initialState,
          user: "",
          token: ""
        };
   
      case "LOGIN_ERROR":
        return {
          ...initialState,
          loading: false,
          errorMessage: action.error
        };
   
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };