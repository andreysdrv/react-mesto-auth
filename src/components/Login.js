import React from 'react'
import Form from './Form'

export default function Register({ isOpen, onAuth }) {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleChange(e) {
    const {value} = e.target
    e.target.name === 'Email' ? setEmail(value) : setPassword(value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onAuth(password, email)
  }

  return (
    <div className='login'>
      <Form
        formName='login'
        onSubmit={handleSubmit}
        title='Вход'
        buttonText='Войти'
        isModal={false}
        isOpen={isOpen}
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
      </Form>
    </div>
  )
}