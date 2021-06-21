function PopupWithForm({ name, title, isOpen, children, onSubmit, buttonText, onClose }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__overlay">
        <form
          className="popup__form"
          name={name}
          noValidate
          onSubmit={onSubmit}
        >
          <h2 className="popup__title">{title}</h2>
          {children}
          <button
            type="submit"
            className="popup__button"
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