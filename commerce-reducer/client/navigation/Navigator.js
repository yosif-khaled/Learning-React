import ProductList from "../screens/ProductList";
import LoginScreen from "../screens/Login";
import ProductDetails from "../screens/ProductDetails";
import Cart from "../screens/Cart";
import CartIcon from "../components/CartIcon";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import LogoutComponent from "../components/Logout";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
const { state, logout } = useContext(AuthContext)

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Products"
        component={ProductList}
        options={({ navigation }) => ({
          title: "Products",
          headerTitleStyle: styles.headerTitle,
          headerRight: () => <CartIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={({ navigation }) => ({
          title: "Product Details",
          headerTitleStyle: styles.headerTitle,
          headerRight: () => <CartIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={({ navigation }) => ({
          title: "My Cart",
          headerTitleStyle: styles.headerTitle,
          headerRight: () => <CartIcon navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 / 10,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "lightblue",
    width: "50%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});

export default AuthNavigator;
