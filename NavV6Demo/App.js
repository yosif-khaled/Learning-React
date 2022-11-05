import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./navigation/AuthNavigation";

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </View>
  );
};

export default App;
