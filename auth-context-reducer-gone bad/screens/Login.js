import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = ({ navigation }) => {
  const { state, dispatch } = useContext(AuthContext);
  // states email and password
  // use reducer and move all tat to a separate auth context file
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const newState = { ...state }
  const loginHandler = (e) => {
    // e.preventDefault()
   
    dispatch('Login');
    navigation.navigate("Products");
  };

  const registerHandler = (e) => {
    // e.preventDefault();
    dispatch('Register'); 
    if (state.token) {
      navigation.navigate("Products");
    } else {
      alert('Whoa !!')
    }
  };

  return (
    <View style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="name"
          value={newState.name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={loginHandler} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={loginHandler}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
          <Text>name: {state.name}</Text>
          <Text>email: {state.email}</Text>
          <Text>pw: {state.password}</Text>
          <Text>context: {state.token}</Text>
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
