import React from 'react'

function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card)
  }

  return(
    <li className="elements__card">
      <img
        src={props.link}
        className="elements__image"
        alt={props.name}
        onClick={handleCardClick}
      />
      <div className="elements__title-wrapper">
        <h2 className="elements__title">{props.name}</h2>
        <div className="elements__like-wrapper">
          <button type="button" className="elements__like-button"></button>
          <span className="elements__like-count">{props.likes.length}</span>
        </div>
      </div>
      <button className="elements__remove-button"></button>
    </li>
  )
}

export default Card