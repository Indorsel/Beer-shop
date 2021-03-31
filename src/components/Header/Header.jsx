import React
// , { useState } 
from 'react'
import { NavLink } from 'react-router-dom';
import './index.css'

export default function Header() {
  // const [state, setState] = useState(false);
  function isRegistrationForm() {
    console.log('Opening the registration form')
    // let formReg = document.querySelector('.sign_up')
    // let display = formReg.style.display
    // display === '' ? display = 'flex' : display = 'none'
  }

  return (
    <div id='header'>
      <input type="text" placeholder="Search"/>
      <div>
        <NavLink to='/cart'>
          <button id='cart_btn'>Cart</button>
        </NavLink>
        <button id='sign_up_btn' onClick={isRegistrationForm}>Sign up</button>
      </div>
    </div>
  )
}
