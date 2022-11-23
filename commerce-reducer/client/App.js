import { NavigationContainer } from "@react-navigation/native";
import { CartProvider } from "./context/CartContext";
import Navigator from "./navigation/Navigator";
import { AuthProvider } from "./context/AuthContext";

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
