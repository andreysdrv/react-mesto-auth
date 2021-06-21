import React from 'react'
// import PopupWithForm from './PopupWithForm'
import Form from './Form'

function EditAvatarPopup({ isOpen, onUpdateAvatar, onClose }) {
  const avatarRef = React.useRef('')

  function handleSubmit(e) {
    e.preventDefault()
    onUpdateAvatar({
      avatar: avatarRef.current.value
    })
    avatarRef.current.value = ''
  }

  return (
    <Form
      formName='profile-edit'
      onSubmit={handleSubmit}
      title='Редактировать профиль'
      buttonText='Сохранить'
      isModal={true}
      isOpen={isOpen}
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
      <button
        type="button"
        className="popup__close-button"
        onClick={onClose}
      >
      </button>
    </Form>
  )
}

export default EditAvatarPopup