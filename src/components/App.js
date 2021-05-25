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
  const [selectedCard, setSelectedCard] = React.useState(null)

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
    setSelectedCard(null)
  }

  function onCardClick(card) {
    setSelectedCard(card)
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={onCardClick}
      />
      <Footer />
      <PopupWithForm
        name='profile-edit'
        title='Редактировать профиль'
        buttonText='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
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
        />
        <span className="popup__input-error userAbout-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name='card-add'
        title='Новое место'
        buttonText='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
        />
        <span className="popup__input-error placeName-input-error"></span>
        <input
          name="link"
          type="url"
          className="popup__input popup__input_place_url"
          id="placeUrl-input"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error placeUrl-input-error"></span>        
      </PopupWithForm>
      <PopupWithForm
        name='avatar-edit'
        title='Обновить аватар'
        buttonText='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          name="userAvatar"
          type="url"
          className="popup__input popup__input_data_about"
          id="userAvatar-input"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error userAvatar-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name='confirm-delete'
        title='Вы уверены?'
        buttonText='Да'
      />
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
