
function PopupWithForm({ name, title, isOpen, children, onSubmit, buttonText, onClose, imgPath }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__overlay">
        <form
          className={`popup__form ${name === 'tooltip' ? 'popup__form_type_tooltip' : ''}`}
          name={name}
          noValidate
          onSubmit={onSubmit}
        >
          {
            name === 'tooltip' && 
              (<img
                src={imgPath}
                alt={name}
                className='popup__tooltip'
              />)
          }
          <h2 className={`popup__title ${name === 'tooltip' ? 'popup__title_type_tooltip' : ''}`}>{title}</h2>
          {children}
          <button
            type="submit"
            className={`popup__button ${name === 'tooltip' ? 'popup__button_hidden' : ''}`}
          >
            {buttonText}
          </button>
        </form>
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        >
        </button>
      </div>  
    </div>
  )
}

export default PopupWithForm