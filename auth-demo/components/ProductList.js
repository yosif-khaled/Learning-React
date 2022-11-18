import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { getProducts } from "../services/ProductService";

import Product from "./Product";

const ProductList = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  const renderProduct = ({ item: product }) => {
    return (
      <Product image={product.image}
      name={product.name}
      price={product.price}
        onPress={() => {
          navigation.navigate("ProductDetails", {
            productId: product.id,
          });
        }}
      />
    );
  };

  useEffect(() => {
    setProducts(getProducts());
  });

  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
  );
};

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: "#eeeeee",
  },
  productsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});

export default ProductList;