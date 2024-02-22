import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";
import CheckoutItems from "../../components/checkout-items/checkout-items.component";
const CheckOut = () => {
  const { cartItems, addItemToCart, removeItemFromCart , cartTotal } =
    useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>

      {cartItems.map((cartItem) => {

        
        // const { id, name, quantity } = cartItem;
      return  <CheckoutItems key = {cartItem.id} cartItem={cartItem}/> ;
      })}
      <span className="total">Total : {cartTotal}</span>
    </div>
  );
};

export default CheckOut;
