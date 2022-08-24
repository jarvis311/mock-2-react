import React from 'react'
import './LoginSuccess.css'
const LoginSuccesPage = () => {
  const username = sessionStorage.getItem('username')
  return (
    <div className='login_success'>
        <div className='text_succes'>
            <h1>You Are Successfully Registered </h1>
            <h3>{username.toUpperCase()}</h3>
        </div>
    </div>
  )
}

export default LoginSuccesPage