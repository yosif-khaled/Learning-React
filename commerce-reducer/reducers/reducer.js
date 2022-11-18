import AsyncStorage from "@react-native-async-storage/async-storage";

import { WORK_URL } from "../config/config";

export const initialState = {
  name: "admin",
  email: "admin@admin",
  password: "admin",
  token: null,
  isLoggedIn: false,
};

export const reducer = (state, action) => {
  // you might need to have a switch
  // return { ...state, [action.input]: action.value };
  switch (action.input) {
    case "name":
      return { ...state, name: action.value };
    case "email":
      return { ...state, email: action.value };
    case "password":
      return { ...state, password: action.value };
    case "register":
      console.log("register");
      return initialState;
    case "login":
      const newState = fetchingUser(state);
      state.isLoggedIn = true;
      return { ...state, ...newState };
    // case 'logout':
    //     console.log('logout')
    //     return initialState
    // default:
    //     console.log('default state')
    //     return initialState
  }
};

/// Make it fetch token add logic from login Handler if(token != false){isLoggedIn True return state}
const fetchingUser = async (state) => {
  // try
  // {
  const { email, password } = { ...state };
  console.log(
    `fetching function running ${state.name}, ${state.email}, ${state.password}`
  );
  console.log(`http://${WORK_URL}:3030/api/login`);
  const response = await fetch(`http://192.168.43.108:3030/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((response) => {
      response.json();
    })
    .then(
      (data) =>
        (state = {
          name: state.name,
          email: state.email,
          password: state.password,
          token: data.token,
          isLoggedIn: token != false ? true : false,
        })
    );
  //         if (response.ok) {
  //             console.log(response.status)
  //             const data = await response.json();
  //             console.log(`Token: ${data.token} | Status: ${data.status}`)
  //             const token = data.token
  //             AsyncStorage.setItem('token', token)
  //             console.log(token)
  //             const newState = {name: state.name, email: state.email, password: state.password, token: token, isLoggedIn: token != false ? true : false}
  //             console.log(`old state token is ${state.token} | login state is ${state.isLoggedIn}`)
  //             console.log(`the token is ${token}`)
  //             console.log({...newState})
  //             console.log(`new state token is ${newState.token} | login state is ${newState.isLoggedIn}`)
  //             return newState;
  //         } else {
  //             console.log('Error Logging: Fetching User Failed')
  //         }
  //     } catch (error) {
  //         console.log(`fetching user: ${error}`)
  //     }
};

// // const setToken = async (data) => {
// //     console.log('setToken Ran')
// //     const token = data.token
// //     await AsyncStorage.setItem("token", toString(token));
// //     alert("Token Set Successful");
// //     return token;
// // }

// export const login = async (state) => {
//     // setIsLoading(true);
//     const data = await fetchingUser(state)
//     console.log('login Ran')
//     console.log(`user data is token for now ${data}`);
//     if (data) {
//         console.log('Login successfull')
//         console.log(state)
//         console.log(state.token)
//         console.log('login function called')
//         // return { ...state, isLoggedIn: true, token: data }
//         return data
//     } else {
//         alert("Check Username and Password");
//         console.log(initialState)
//         return initialState
//     }
// };

export const register = async (state) => {
  // setIsLoading(true);
  const data = await fetchingUser(state);
  if (data.status === "ok") {
    setToken(data, state);
  } else {
    alert("Something went wrong, registery failed");
    return initialState;
  }
  console.log("register function called");
};

//// will get to that later
// export const logout = () => {
//     setIsLoading(true);
//     setToken(null);
//     AsyncStorage.removeItem("token");
//     console.log("logout");
//     setIsLoading(false);
// };

// const isLoggedIn = async () => {
//     try {
//         setIsLoading(true);
//         let userToken = await AsyncStorage.getItem("token");
//         setToken(userToken);
//         console.log(userToken);
//         setIsLoading(false);
//     } catch (error) {
//         console.log(error);
//     }
// };

// useEffect(() => {
//     isLoggedIn();
// }, []);
