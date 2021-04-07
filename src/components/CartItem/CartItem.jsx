import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCartItems } from '../../actions/setCartItems'
import './index.css'


export default function CartItem(item) {
  const { image_url, name, id } = item.item

  const dispatch = useDispatch()
  const state = useSelector(state => state.catalogItem.cartItems)

  const removeItemInCart = ({target}) => {
    const newState = state.filter(el => el.id !== Number(target.id) ? el : null)
    dispatch(setCartItems(newState))
  }

  return (
    <div className="cart_wrapper">
      <div className='cart_item'>
        <img src={image_url} alt="" />
        <div className="description">
          <h4>{name}</h4>
        </div>
        <div className="cart_button">
          <button onClick={removeItemInCart} id={id}>Remove item</button>
        </div>
      </div>
    </div>
  )
}
