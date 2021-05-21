class Api {
  constructor(options) {
    this._url = options.url
    this._headers = options.headers
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getUserInfo() {
    return fetch(this._url + '/users/me', {
      method: 'GET',
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  getInitialCards() {
    return fetch(this._url + '/cards', {
      method: 'GET',
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  setUserInfoApi(userData) {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userData.userName,
        about: userData.userAbout
      })
    })
    .then(this._checkResponse)
  }

  addUserCard(data) {
    return fetch(this._url + '/cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(this._checkResponse)
  }

  like(id) {
    return fetch(this._url + `/cards/likes/${id}`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  dislike(id) {
    return fetch(this._url + `/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  delete(id) {
    return fetch(this._url + `/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse)
  }

  handleUserAvatar(data) {
    return fetch(this._url + `/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.userAvatar,
      })
    })
    .then(this._checkResponse)
  }

  getAllNeededData() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()])
  }
}

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-23',
  headers: {
    authorization: '1a04582c-c338-4c76-b689-0417388dddf2',
    'Content-Type': 'application/json'
  }
})

export { api }