function PopupWithForm(props) {
  return (
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__overlay">
        <form
        className="popup__form"
        name={props.name}
        noValidate
        onSubmit={props.onSubmit}
        >
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button
            type="submit"
            className="popup__button"
          >
            {props.buttonText}
          </button>
        </form>
        <button
          type="button"
          className="popup__close-button"
          onClick={props.onClose}
        >
        </button>
      </div>  
    </div>
  )
}

export default PopupWithForm