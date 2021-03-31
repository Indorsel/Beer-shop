import React
// , { useState } 
from 'react'
import './index.css'

export default function RegistrationForm() {

  // const [state, setState] = useState(true)

  function openForm(event) {
    console.log('Sending data to the server and closing the form')
    event.preventDefault()
  }

  return (
    <div className="wrapper_registration">
      <div className='sign_up'>
        <p>Registration</p>
        <p>Create your account</p>
        <form onSubmit={openForm} >
          <input type="text" name="First Name" required id="first_name" pattern="[A-Za-z]{1,}"
              title="Please use only Latin letters" placeholder='First Name' />
          <input type="text" name="Last Name" required id="last_name" pattern="[A-Za-z]{1,}"
              title="Please use only Latin letters" placeholder='Last Name' />
          <br/>
          <input type="text" name="Otchestvo" id="otchestvo" placeholder='Otchestvo' />
          <br/>
          <label>Date of Birth</label>
          <input type="date" name="Birth Date" required min="1900-01-01" max="2021-04-09" id="date" />
          <br/>
          <input type="email" name="Email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Invalid email!" id="email" placeholder='Email' />
          <br/>
          <input type="password" name="Password" required id="password" pattern=".{6,}"
                title="6 or more characters" placeholder='Password' />
          <br/>
          <input type="password" name="Check password" required id="check_password" placeholder='Repeat password' />
          <br/>
          <input type="submit" value="Register now" />
        </form>
      </div>
    </div>
  )
}
