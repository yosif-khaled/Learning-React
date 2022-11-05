import React from "react";
import { View, Text } from "react-native";

const IntroScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: "white" }}>Intro Screen</Text>
    </View>
  );
};

export default IntroScreen;
