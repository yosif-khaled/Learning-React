import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = ({ navigation }) => {
  const { register, loggingIn, onChange, ...state } = useContext(AuthContext);
  const loginHandler = (e) => {
    e.preventDefault();
    loggingIn();
    if (state.isLoggedIn == true) navigation.navigate("Products");
    console.log(`Login Handler Ran`);
  };

  const registerHandler = (e) => {
    e.preventDefault();
    register();
    if (state.isLoggedIn == true) navigation.navigate("Products");
    console.log("Register Handler Ran");
  };

  // I think connecting the token too is important
  if (state.token) {
    useEffect(() => {
      navigation.navigate("Products");
    }, [state.token]);
  }

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
