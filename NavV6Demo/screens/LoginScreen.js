import React from "react";
import { View, Text } from "react-native";

const LoginScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: "white" }}>LogIn Screen</Text>
    </View>
  );
};

export default LoginScreen;
