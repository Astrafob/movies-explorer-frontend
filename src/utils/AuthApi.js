import { apiAuthConfig } from './constants';

class AuthApi {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  register({ name, email, password }) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      })
    }).then(this._checkResponse);
  }

  authorize({ email, password }) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
      })
    }).then(this._checkResponse);
  }

  getContent(jwt) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`
      }
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Получили ошибку: ${res.status} ${res.statusText}`);
  }
}

const apiAuth = new AuthApi(apiAuthConfig);

export default apiAuth;