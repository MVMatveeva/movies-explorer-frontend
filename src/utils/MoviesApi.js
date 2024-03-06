class Api {
    constructor({ url }) {
      this._url = url;
    }
  
    _handleResponse(res) {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    }
  
    getMovies() {
      return fetch(`${this._url}/cards`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
          "Content-type": "application/json"
        },
        method: "GET",
      }).then(this._handleResponse);
    }
  
    addMovies(data) {
      return fetch(`${this._url}/cards`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
          "Content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          link: data.link,
        }),
      }).then(this._handleResponse);
    }
    
    deleteMovies(cardId) {
      return fetch(`${this._url}/cards/${cardId}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
          "Content-type": "application/json"
        },
        method: "DELETE",
      }).then(this._handleResponse);
    }
    
    getUserInfo() {
      return fetch(`${this._url}/users/me`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
          "Content-type": "application/json"
        },
        method: "GET",
      }).then(this._handleResponse);
    }
  
    editUserInfo(data) {
      return fetch(`${this._url}/users/me`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
          "Content-type": "application/json"
        },
        method: "PATCH",
        body: JSON.stringify({
          name: data.name,
          about: data.about,
        }),
      }).then(this._handleResponse);
    }
  
  }
  
  const api = new Api({
    url: "https://api.mesto.matveeva.nomoredomainsmonster.ru",
   });
  
  export default api;