import React from 'react'

export default function Form (
{
  formName,
  onSubmit,
  title,
  children,
  buttonText,
  isModal
}) {
  return (
    <form
      className="popup__form"
      name={formName}
      noValidate
      onSubmit={onSubmit}
    >
      <h2 className={`popup__title popup__title_type_${isModal ? '' : formName}`}>{title}</h2>
        {children}
      <button
        type="submit"
        className={`popup__button popup__button_type_${isModal ? '' : formName}`}
      >
        {buttonText}
      </button>
    </form>
  )
}