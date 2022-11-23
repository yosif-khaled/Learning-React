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

const fetchingToken = async (state) => {
  const { name, email, password } = { ...state };
  console.log(
    `fetching function running ${state.name}, ${state.email}, ${state.password}`
  );
  const response = await fetch(`http://192.168.1.8:3030/api/login`, {
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
  const data = response.json();
  console.log(json.stringify(data));
  if (data.status) {
    await AsyncStorage.setItem("token", data.token);
    console.log(`Token is set to ${data.token}`);
  } else {
    console.log("Error Fetching Data | Token Request Failed");
  }
};

const logIn = async (action) => {
  action = {
    input: input,
    value: state,
  };
  try {
    fetchingToken(state);
    let token = await AsyncStorage.getItem("token");
    state = { ...state, token: token, isLoggedIn: true };
    dispatch("login", state);
  } catch (error) {
    console.log(`Error Logging In: ${error}`);
  }
};

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
