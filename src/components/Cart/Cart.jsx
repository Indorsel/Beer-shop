import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom';

export default function Cart() {
  return (
    <div className='wrapper'>
      <NavLink to='/main' style={{textDecoration: 'none'}}>
        <div id='arrow' title='Return to catalog'>
          &#8592;
        </div>
      </NavLink>
      <h3>Cart</h3>
      <div id='cart'></div> 
    </div>
  )
}
