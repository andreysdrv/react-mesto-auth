import React from 'react'
import { api } from '../utils/Api'

function Main({onEditAvatar, onEditProfile, onAddPlace}) {
  const [userName, setUserName] = React.useState('sadf')
  const [userDescription, setUserDescription] = React.useState()
  const [userAvatar, setUserAvatar] = React.useState()
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserName(data.name)
      setUserDescription(data.about)
      setUserAvatar(data.avatar)
    })
  }, [])

  React.useEffect(() => {
    api.getInitialCards().then((data) => {
      console.log(data)
    })
  })

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img
          src={userAvatar}
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
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={onEditProfile}
            >
            </button>
          </div>
          <h2 className="profile__about">{userDescription}</h2>
        </div>
        <button
        type="button"
        className="profile__add-button"
        onClick={onAddPlace}
        >
        </button>
      </section>
      <section className="elements-container">
        <ul className="elements"></ul>
      </section>
    </main>
  )
}

export default Main