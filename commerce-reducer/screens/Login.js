import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useReducer, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// const initialState = {
//   name: "",
//   email: "",
//   password: "",
// };

// const reducer = (state, action) => {
//   return { ...state, [action.input]: action.value };
// };

const LoginScreen = ({ navigation }) => {
  const { dispatch, onChange, ...state } = useContext(AuthContext);

  const loginHandler = (e) => {
    e.preventDefault();
    console.log("login handler");
    dispatch({ input: "login", value: null });
    console.log(`log in state: -- in handler ${state.isLoggedIn}`);
    if (state.isLoggedIn) {
      console.log({ ...state });
      navigation.navigate("Products");
    } else {
      console.log({ ...state });
      console.log("loginHandler failed Executed");
      alert("Error Logging In");
    }
    // navigation.navigate('Products')
  };

  const registerHandler = (e) => {
    e.preventDefault();
    // register(state);
    if (state.token) {
      navigation.navigate("Products");
    } else {
      alert("Whoa !!");
    }
  };
  return (
    <View style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="name"
          value={state.name}
          onChangeText={(text) => onChange("name", text)}
          style={styles.input}
        />

        <TextInput
          placeholder="email"
          value={state.email}
          onChangeText={(text) => onChange("email", text)}
          style={styles.input}
        />

        <TextInput
          placeholder="password"
          value={state.password}
          onChangeText={(text) => onChange("password", text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={loginHandler} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={registerHandler}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
          <Text>name: {state.name}</Text>
          <Text>email: {state.email}</Text>
          <Text>pw: {state.password}</Text>
          <Text>token: {state.token}</Text>
          <Text>state: {state.isLoggedIn}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "lightblue",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "lightblue",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "lightblue",
    fontWeight: "700",
    fontSize: 16,
  },
});
