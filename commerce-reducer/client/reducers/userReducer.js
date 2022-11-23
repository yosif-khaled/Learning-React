export const initialState = {
  name: "",
  email: "",
  password: "",
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
    case "login":
      console.log(`User: ${state.user} is logged in`)
      return { ...state, token: action.value, isLoggedIn: true };
    case "register":
      alert(`User: ${state.name} is registered with email: ${state.email}`);
      return { ...state, token: action.value, isLoggedIn: true };
    case "logout":
      alert(`User: ${state.name} has logged out`)
      return {...state, token: action.value, isLoggedIn: false}
    default:
      console.log("default state");
      return initialState;
  }
};
