// import React from "react";
// import ProductList from "../components/ProductList";
// import ProductDetails from "../screens/ProductDetails";
// import Cart from "../screens/Cart";
// import CartIcon from "../components/CartIcon";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StyleSheet } from "react-native";

// const Stack = createNativeStackNavigator();

// const Navigation = () => {
//   return (
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Products"
//           component={ProductList}
//           options={({ navigation }) => ({
//             title: "Products",
//             headerTitleStyle: styles.headerTitle,
//             headerRight: () => <CartIcon navigation={navigation} />,
//           })}
//         />
//         <Stack.Screen
//           name="ProductDetails"
//           component={ProductDetails}
//           options={({ navigation }) => ({
//             title: "Product Details",
//             headerTitleStyle: styles.headerTitle,
//             HeaderRight: () => <CartIcon navigation={navigation} />,
//           })}
//         />
//         <Stack.Screen
//           name="Cart"
//           component={Cart}
//           options={({ navigation }) => ({
//             title: "My Cart",
//             headerTitleStyle: styles.headerTitle,
//             HeaderRight: () => <CartIcon navigation={navigation} />,
//           })}
//         />
//       </Stack.Navigator>

//   );
// };

// const styles = StyleSheet.create({});

// export default Navigation;