import React from "react";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import CarttItems from "../cart-items/cart-items.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CarttItems key={item.id} cartItem={item} />
        ))}
        {/* {CartItems.map(item => <CartItems key ={item.id} cartItem = {item} />)} */}
      </div>
      <Button>CHECKOUT</Button>
      CartDropdown
    </div>
  );
};

export default CartDropdown;
