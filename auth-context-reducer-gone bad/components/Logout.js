import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { createContext } from "react";

const LogoutComponent = ({ logout, navigation }) => {
  const logoutHandler = () => {
    logout();
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={logoutHandler} style={styles.button}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogoutComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1 / 10,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "lightblue",
    width: "50%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
