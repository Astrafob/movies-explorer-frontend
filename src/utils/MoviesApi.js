import { API_MOVIES_CONFIG } from "./constants";

class MoviesApi {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  getMovies() {
    return fetch(this._url, {
      headers: this._headers
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Получили ошибку: ${res.status} ${res.statusText}`);
  }
}

const apiMovies = new MoviesApi(API_MOVIES_CONFIG);

export default apiMovies;