import React, { useEffect, useState, useContext, createContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import LogoutComponent from "../components/Logout";

const Cart = ({ navigation }) => {
  const cartContext = useContext(CartContext);
  const { logout } = useContext(AuthContext);
  const totals = () => {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(cartContext.getTotalPrice());
    });
    return (
      <View style={styles.cartLineTotal}>
        <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
        <Text>$ {total}</Text>
      </View>
    );
  };
  const renderItem = ({ item }) => {
    return (
      <View style={styles.cartLine}>
        <Text style={styles.lineLeft}>
          {item.product.name} x {item.quantity}
        </Text>
        <Text style={styles.lineRight}>$ {item.totalPrice}</Text>
      </View>
    );
  };
  return (
    <>
      <FlatList
        style={styles.itemsList}
        contentContainerStyle={styles.itemsListContainer}
        data={cartContext.items}
        renderItem={renderItem}
        keyExtractor={(item) => item.product.id.toString()}
        ListFooterComponent={totals}
      />
      <LogoutComponent logout={logout} navigation={navigation} />
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartLine: {
    flexDirection: "row",
  },
  cartLineTotal: {
    flexDirection: "row",
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
  },
  lineTotal: {
    fontWeight: "bold",
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: "#333333",
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#333333",
    textAlign: "right",
  },
  itemsList: {
    backgroundColor: "#eeeeee",
  },
  itemsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
