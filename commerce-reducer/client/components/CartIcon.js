import { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CartContext } from "../context/CartContext";

const CartIcon = ({navigation}) => {
    const {getItemsCount} = useContext(CartContext)
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Cart')}>
      <Text style={styles.buttonText}
        >Cart ({getItemsCount()})</Text>
      </TouchableOpacity>
        
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "lightblue",
    width: "30%",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});

export default CartIcon;
