import './login.css'

import React from 'react'

import { Link } from 'react-router-dom';

export default function Login() {
  return (

    <div className="login">
      <h1>Login</h1>

      <div className="input">
        <label>Login</label>
        <input placeholder='email' />
      </div>

      <div className='input'  >
        <label>Senha</label>
        <input placeholder='password' />
      </div>


      <button><Link to='/home'>Home</Link></button>
      
    </div>
  )
}
