import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "lightblue",
    width: "30%",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
