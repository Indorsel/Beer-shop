import React, { useEffect } from 'react'
import './index.css'


export default function CartItem(item) {
  const { image_url, name, id } = item.item
  useEffect(() => {
    // console.log(image_url, name);
  }, [])

  const removeItemInCart = () => {
    console.log(id);
  }

  return (
    <div className="cart_wrapper">
      <div className='cart_item'>
        <img src={image_url} alt="" />
        <div className="description">
          <h4>{name}Name</h4>
        </div>
        <div className="cart_button">
          <button onClick={removeItemInCart}>Remove item</button>
        </div>
      </div>
    </div>
  )
}
