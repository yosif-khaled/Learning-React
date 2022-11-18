import { NavigationContainer } from "@react-navigation/native";
import { CartProvider } from "./context/CartContext";
import Login from "./screens/Login";
import AuthNavigator from "./navigation/AuthNavigator";

export default function App() {
  return (

    <CartProvider>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </CartProvider>

    // <Login />
  );
}
