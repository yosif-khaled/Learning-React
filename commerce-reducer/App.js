import { NavigationContainer } from "@react-navigation/native";
import { CartProvider } from "./context/CartContext";
import Navigator from "./navigation/Navigator";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { createContext, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LogoutComponent from "./components/Logout";

export default function App() {

  return (
    <AuthProvider>
          <CartProvider>
            <NavigationContainer>
              <Navigator />
            </NavigationContainer>
          </CartProvider>
    </AuthProvider>
  );
}
