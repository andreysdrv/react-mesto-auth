import Info from "./Info"
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Header({ loggedIn, email, onSignOut }) {
  return (
    <header className="header">
      <div className="header__logo"></div>
      {
        loggedIn ?
        <Info email={email} loggedIn={loggedIn} onSignOut={onSignOut} /> :
        <>
          <Link className='header__link' to='/sign-up'>Войти</Link>
          <Link className='header__link' to='/sign-in'>Регистрация</Link>
        </>
      }
    </header>
  )
}

export default withRouter(Header)