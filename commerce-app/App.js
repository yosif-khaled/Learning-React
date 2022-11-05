import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./components/Navigation";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </CartProvider>
  );
}
