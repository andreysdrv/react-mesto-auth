import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
  }

  return (
    <div className="page">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />
      <Footer />
      <PopupWithForm
        name='profile-edit'
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input name="userName" type="text" className="popup__input popup__input_data_name" id="userName-input" placeholder="Имя" minlength="2" maxlength="40" pattern="^[a-zA-Zа-яА-я-\s]+$" required />
        <span className="popup__input-error userName-input-error"></span>
        <input name="userAbout" type="text" className="popup__input popup__input_data_about" id="userAbout-input" placeholder="Профессия" minlength="2" pattern="^[a-zA-Zа-яА-я-\s]+$" maxlength="200" required />
        <span className="popup__input-error userAbout-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name='card-add'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input name="name" type="text" className="popup__input popup__input_place_name" id="placeName-input" placeholder="Название" minlength="2" maxlength="30" pattern="^[a-zA-Zа-яА-я-\s]+$" required />
        <span className="popup__input-error placeName-input-error"></span>
        <input name="link" type="url" className="popup__input popup__input_place_url" id="placeUrl-input" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error placeUrl-input-error"></span>        
      </PopupWithForm>
      <PopupWithForm
        name='avatar-edit'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input name="userAvatar" type="url" className="popup__input popup__input_data_about" id="userAvatar-input" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error userAvatar-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name='confirm-delete'
        title='Вы уверены?'
      />
      <ImagePopup />

      <template id="card-template">
        <li className="elements__card">
          <img src="#" className="elements__image" alt="#" />
          <div className="elements__title-wrapper">
            <h2 className="elements__title"></h2>
            <div className="elements__like-wrapper">
              <button type="button" className="elements__like-button"></button>
              <span className="elements__like-count">0</span>
            </div>
          </div>
          <button className="elements__remove-button"></button>
        </li>
      </template>
    </div>
  );
}

export default App;
