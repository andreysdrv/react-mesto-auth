import React from 'react'

export default function Form (
{
  formName,
  onSubmit,
  title,
  children,
  buttonText,
  isModal,
  isOpen,
}) {
  return (
    <div className={`popup ${isModal ? (isOpen ? 'popup_opened' : '') : 'popup_type_auth'}`}>
      <div className={`${isModal ? 'popup__container' : ''} popup__overlay`}>
        <form
          className="popup__form"
          name={formName}
          noValidate
          onSubmit={onSubmit}
        >
          <h2 className={`popup__title popup__title_type_${isModal ? '' : 'auth'}`}>{title}</h2>
            {children}
          <button
            type="submit"
            className={`popup__button popup__button_type_${isModal ? '' : 'auth'}`}
          >
            {buttonText}
          </button>
          {
            formName === 'register' &&
            <span className='popup__subtext'>Уже зарегистрированы? Войти</span>
          }
        </form>
      </div>
    </div>
  )
}