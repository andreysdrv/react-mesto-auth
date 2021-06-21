import React from 'react'
// import PopupWithForm from './PopupWithForm'
import Form from './Form'

function AddPlacePopup({ isOpen, onAddPlace, onClose }) {
  const [name, setName] = React.useState('')
  const [link, setLink] = React.useState('')

  function handleNameChange(e) {
    setName(e.target.value)
  }
  
  function handleLinkChange(e) {
    setLink(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onAddPlace({
      name: name,
      link: link,
    })
  }

  return (
    <Form
      name='card-add'
      title='Новое место'
      buttonText='Создать'
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isModal={true}
    >
      <input
        name="name"
        type="text"
        className="popup__input popup__input_place_name"
        id="placeName-input"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        pattern="^[a-zA-Zа-яА-я-\s]+$"
        required
        onChange={handleNameChange}
      />
      <span className="popup__input-error placeName-input-error"></span>
      <input
        name="link"
        type="url"
        className="popup__input popup__input_place_url"
        id="placeUrl-input"
        placeholder="Ссылка на картинку"
        required
        onChange={handleLinkChange}
      />
      <span className="popup__input-error placeUrl-input-error"></span>
      <button
        type="button"
        className="popup__close-button"
        onClick={onClose}
      >
      </button>        
    </Form>
  )
}

export default AddPlacePopup