import React from 'react'
import { CurrentUserContext } from './contexts/CurrentUserContext'

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext)
  const isOwn = props.card.owner._id === currentUser._id
  const isLiked = props.card.likes.some((item) => item._id === currentUser._id)
  const cardDeleteButtonClassName = (
    `elements__remove-button ${isOwn ? '' : 'elements__remove-button_state_hidden'}`
  )
  const cardLikeButtonClassName  = (
    `elements__like-button ${isLiked ? 'elements__like-button_active' : ''}`
  )

  function handleCardClick() {
    props.onCardClick(props.card)
  }

  return(
    <li className="elements__card">
      <img
        src={props.card.link}
        className="elements__image"
        alt={props.card.name}
        onClick={handleCardClick}
      />
      <div className="elements__title-wrapper">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like-wrapper">
          <button type="button" className={cardLikeButtonClassName}></button>
          <span className="elements__like-count">{props.card.likes.length}</span>
        </div>
      </div>
      <button className={cardDeleteButtonClassName}></button>
    </li>
  )
}

export default Card