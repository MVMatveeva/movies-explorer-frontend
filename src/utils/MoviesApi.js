class moviesApi {
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
    getMovies () {
        return fetch(`${this._url}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-type": "application/json",
          },
          method: "GET",
        }).then(this._handleResponse);
      };
}
   
  const MoviesApi = new moviesApi({
    url: "https://api.nomoreparties.co/beatfilm-movies.",
   });
  
  export default MoviesApi;