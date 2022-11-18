import React from "react";
import { View, Text, Button } from "react-native";

const IntroScreen = ({navigation}) => {
  const navigate = (screen)=>{
    navigation.navigate(screen)
  }
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
      <Button title="Go TO Login" onPress={()=>navigate('Login')}></Button>
    </View>
  );
};

export default IntroScreen;
