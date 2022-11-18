import { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import { CartContext } from "../Context/CartContext";
import { getProductData } from "../productStore";

const CartProduct = (props) => {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);
  return (
    <>
      <h3>{productData.title}</h3>
      <p>{quantity} total</p>
      <p>${(quantity * productData.price).toFixed(2)}</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
        Remove
      </Button>
      <hr />
    </>
  );
};

export default CartProduct;