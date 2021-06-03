import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import { api } from '../utils/Api'
import { CurrentUserContext } from './contexts/CurrentUserContext'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)
  const [currentUser, setCurrentUser] = React.useState({})

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

  function onUpdateUser(userData) {
    api.setUserInfoApi(userData)
      .then((data) => {
        setCurrentUser(data)
        closeAllPopups()
      })
      .catch((err) => console.log(err))
  }

  function onUpdateAvatar(userData) {
    api.handleUserAvatar(userData)
      .then((data) => {
        setCurrentUser(data)
        closeAllPopups()
      })
      .catch((err) => console.log(err))
  }

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setCurrentUser(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={onCardClick}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={onUpdateUser}
        />
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
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={onUpdateAvatar}
        />
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
    </CurrentUserContext.Provider>
  );
}

export default App;
