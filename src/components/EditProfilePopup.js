import React from 'react'
// import PopupWithForm from './PopupWithForm'
import Form from './Form'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function EditProfilePopup({ isOpen, onUpdateUser, onClose }) {
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const currentUser = React.useContext(CurrentUserContext)

  React.useEffect(() => {
    setName(currentUser.name)
    setDescription(currentUser.about)
  }, [currentUser, isOpen])

  function handleNameChange(e) {
    setName(e.target.value)
  }
  
  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onUpdateUser({
      name: name,
      about: description,
    })
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
        name="userName"
        type="text"
        className="popup__input popup__input_data_name"
        id="userName-input"
        placeholder="Имя"
        minLength="2"
        maxLength="40" pattern="^[a-zA-Zа-яА-я-\s]+$"
        required
        value={name || ''}
        onChange={handleNameChange}
      />
      <span className="popup__input-error userName-input-error"></span>
      <input
        name="userAbout"
        type="text"
        className="popup__input popup__input_data_about"
        id="userAbout-input"
        placeholder="Профессия"
        minLength="2"
        pattern="^[a-zA-Zа-яА-я-\s]+$"
        maxLength="200"
        required
        value={description || ''}
        onChange={handleDescriptionChange}
      />
      <span className="popup__input-error userAbout-input-error"></span>
      <button
        type="button"
        className="popup__close-button"
        onClick={onClose}
      >
      </button>
    </Form>
    // <PopupWithForm
    // name='profile-edit'
    // title='Редактировать профиль'
    // buttonText='Сохранить'
    // isOpen={props.isOpen}
    // onClose={props.onClose}
    // onSubmit={handleSubmit}
    // >
    //   <input
    //     name="userName"
    //     type="text"
    //     className="popup__input popup__input_data_name"
    //     id="userName-input"
    //     placeholder="Имя"
    //     minLength="2"
    //     maxLength="40" pattern="^[a-zA-Zа-яА-я-\s]+$"
    //     required
    //     value={name}
    //     onChange={handleNameChange}
    //   />
    //   <span className="popup__input-error userName-input-error"></span>
    //   <input
    //     name="userAbout"
    //     type="text"
    //     className="popup__input popup__input_data_about"
    //     id="userAbout-input"
    //     placeholder="Профессия"
    //     minLength="2"
    //     pattern="^[a-zA-Zа-яА-я-\s]+$"
    //     maxLength="200"
    //     required
    //     value={description}
    //     onChange={handleDescriptionChange}
    //   />
    //   <span className="popup__input-error userAbout-input-error"></span>
    // </PopupWithForm>    
  )
}

export default EditProfilePopup