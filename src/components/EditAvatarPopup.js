import React from 'react'
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup(props) {
  const avatarRef = React.useRef('')

  function handleSubmit(e) {
    e.preventDefault()
    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    })
  }

  return (
    <PopupWithForm
      name='avatar-edit'
      title='Обновить аватар'
      buttonText='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        name="userAvatar"
        type="url"
        className="popup__input popup__input_data_about"
        id="userAvatar-input"
        placeholder="Ссылка на картинку"
        required
        ref={avatarRef}
      />
      <span className="popup__input-error userAvatar-input-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup