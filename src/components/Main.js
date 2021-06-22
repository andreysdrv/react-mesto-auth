import React from 'react'
import Card from './Card'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick, handleCardLike, handleCardDelete, cards}) {
  const currentUser = React.useContext(CurrentUserContext)

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img
            src={currentUser.avatar}
            alt="Изображение профиля"
            className="profile__avatar"
          />
          <button
            type="button"
            className="profile__avatar-edit-button"
            onClick={onEditAvatar}
          >
          </button>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={onEditProfile}
            >
            </button>
          </div>
          <h2 className="profile__about">{currentUser.about}</h2>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        >
        </button>
      </section>
      <section className="elements-container">
        <ul className="elements">
          {
            cards.map((card) => (<Card key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            />))
          }
        </ul>
      </section>
    </main>
  )
}

export default Main