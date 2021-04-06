import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'

import CartItem from '../CartItem/CartItem';

export default function Cart() {
  const state = useSelector(state => state.catalogItem.cartItems)
  console.log('State in cart component ', state);
  return (
    <div className='wrapper'>
      <NavLink to='/main' style={{textDecoration: 'none'}}>
        <div id='arrow' title='Return to catalog'>
          &#8592;
        </div>
      </NavLink>
      <h3>Cart</h3>
      <div id='cart'>
        {
          state.length === 0 ? null : state.map(el => (
            <CartItem item={el} key={el.id} />
          ))
        }
          
        {/* <CartItem item={} key={} />   */}
      </div> 
    </div>
  )
}
