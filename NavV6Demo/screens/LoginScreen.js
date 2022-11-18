import React from "react";
import { View, Text, Button } from "react-native";

const LoginScreen = ({navigation}) => {
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
      <Button title='Go Back' onPress={navigation.goBack}></Button>
    </View>
  );
};

export default LoginScreen;
