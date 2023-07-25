import { API_MAIN_CONFIG } from "./constants";
import { MOVIES_URL } from "./constants";

class MainApi {
  constructor(options) {
    this._url = options.url;
  }

  _getHeaders() {
    return {
      'authorization': `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    };
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._getHeaders(),
    }).then(this._checkResponse);
  }

  setUserInfo({ name, email }) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: name,
        email: email,
      })
    }).then(this._checkResponse);
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: this._getHeaders(),
    }).then(this._checkResponse);
  }

  addSavedMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    id,
    nameRU,
    nameEN,
  }) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify({
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: MOVIES_URL + image.url,
        trailer: trailerLink,
        thumbnail: MOVIES_URL + image.formats.thumbnail.url,
        movieId: id,
        nameRU: nameRU,
        nameEN: nameEN,
      })
    }).then(this._checkResponse);
  }

  deleteSavedMovie(movie) {
    return fetch(`${this._url}/movies/${movie._id}`, {
      method: 'DELETE',
      headers: this._getHeaders(),
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Получили ошибку: ${res.status} ${res.statusText}`);
  }
}

const apiMain = new MainApi(API_MAIN_CONFIG);

export default apiMain;