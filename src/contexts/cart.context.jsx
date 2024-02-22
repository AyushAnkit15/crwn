import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},

  cartItems: [],
  addItemToCart: () => {},

  cartQuantity: 0,
  removeItemFromCart: () => {},

  cartTotal : 0 ,
  setCartTotal : () =>{}
});

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};



const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return 
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const remove = (cartItems , cartItemToRemove) =>{

  // const existingCartItem = cartItems.find(
  //   (cartItem) => cartItem.id === cartItemToRemove.id
  // );

  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);


}

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const [cartTotal , setCartTotal] = useState(0) ; 

  useEffect(() => {
    const newCartQuantity = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);
    setCartQuantity(newCartQuantity);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    
    setCartItems(addCartItem(cartItems, productToAdd));
    setCartTotal(prev => prev= prev+productToAdd.price)
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
    setCartTotal(prev =>prev =  prev-cartItemToRemove.price)
  };

  const removeC = (cartItemToRemove)=>{
    setCartItems(remove(cartItems , cartItemToRemove)) ; 
    
    setCartTotal(prev=> prev = prev-(cartItemToRemove.price * cartItemToRemove.quantity))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartQuantity,
    removeItemFromCart,
    removeC,
    cartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
