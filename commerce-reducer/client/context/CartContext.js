import { createContext, useState } from "react";
import { getProduct } from "../services/ProductService";

export const CartContext = createContext();
export const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addToCart = (id) => {
    const product = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if (!item) {
        return [
          ...prevItems,
          {
            id,
            qty: 1,
            product,
            totalPrice: product.price,
          },
        ];
      } else {
        return prevItems.map((item) => {
          if (item.id == id) {
            item.qty++;
            item.price += product.price;
          }
          return item;
        });
      }
    });
  };

  const getItemsCount = () => {
    return items.reduce((sum, item) => sum + item.qty, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  };

  return (
    <CartContext.Provider
      value={{ items, setItems, getItemsCount, addToCart, getTotalPrice }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
