import React, { useEffect } from 'react'
import PopupWithForm from './PopupWithForm'
// import Form from './Form'

function EditAvatarPopup({ isOpen, onUpdateAvatar, onClose }) {
  const avatarRef = React.useRef('')

  function handleSubmit(e) {
    e.preventDefault()
    onUpdateAvatar({
      avatar: avatarRef.current.value
    })
  }

  useEffect(() => {
    avatarRef.current.value = ''
  }, [isOpen])

  return (
    <PopupWithForm
      name='profile-edit'
      onSubmit={handleSubmit}
      title='Редактировать профиль'
      buttonText='Сохранить'
      isModal={true}
      isOpen={isOpen}
      onClose={onClose}
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