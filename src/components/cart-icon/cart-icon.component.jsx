import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import {ReactComponent as ShoppingIcon } from '../../assests/004 shopping-bag.svg'
import './cart-icon.styles.scss'
const CartIcon = () => {
  let  { isCartOpen , setIsCartOpen} = useContext(CartContext) ; 

  const handleClick = ()=>{
    setIsCartOpen(!isCartOpen)
  }

  return (
    <div className='cart-icon-container'>
     
        <ShoppingIcon  onClick={handleClick} className='shopping-icon'/>
     
     <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon