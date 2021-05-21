function ImagePopup() {
  return (
    <div className="popup popup_zoom-image">
      <div className="popup__figure-container popup__overlay">
        <figure className="popup__figure">
          <img src="#" className="popup__image" alt="#" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
        <button type="button" className="popup__close-button popup__close-button_zoom-image"></button>
      </div>
    </div>
  )
}

export default ImagePopup