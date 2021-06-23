import React, { useState } from 'react'
import AuthPage from './AuthPage'

export default function Register({ onRegister }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleChange(e) {
    const {value} = e.target
    e.target.name === 'Email' ? setEmail(value) : setPassword(value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onRegister(password, email)
  }

  return (
    <div className='register'>
      <AuthPage
        formName='register'
        onSubmit={handleSubmit}
        title='Регистрация'
        buttonText='Зарегистрироваться'
      >
        <input
          name="Email"
          type="email"
          className="popup__input popup__input_type_login"
          id="email"
          placeholder="Email"
          minLength="6"
          maxLength="40"
          required
          value={email || ''}
          onChange={handleChange}
        />
        {/* <span className="popup__input-error userName-input-error"></span> */}
        <input
          name="Password"
          type="password"
          className="popup__input popup__input_type_login"
          id="password"
          placeholder="Пароль"
          minLength="6"
          maxLength="40"
          required
          value={password || ''}
          onChange={handleChange}
        />
        {/* <span className="popup__input-error userAbout-input-error"></span> */}
      </AuthPage>
    </div>
  )
}