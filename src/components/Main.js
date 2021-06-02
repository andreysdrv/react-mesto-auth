import React from 'react'
import { api } from '../utils/Api'
import Card from './Card'
import { CurrentUserContext } from './contexts/CurrentUserContext'

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [cards, setCards] = React.useState([])
  const userInfo = React.useContext(CurrentUserContext)

  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img
            src={userInfo.avatar}
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
            <h1 className="profile__name">{userInfo.name}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={onEditProfile}
            >
            </button>
          </div>
          <h2 className="profile__about">{userInfo.about}</h2>
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
            cards.map((card) => <Card key={card._id}
            card={card}
            onCardClick={onCardClick}
            />)
          }
        </ul>
      </section>
    </main>
  )
}

export default Main