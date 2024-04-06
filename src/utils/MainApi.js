const BASE_URL = "https://api.matveeva.movie.nomoredomainswork.ru";
const MOVIE_URL = "https://api.nomoreparties.co";

export const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

export const registerUser = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password, name: name }),
  }).then(handleResponse);
};

export const loginUser = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  }).then(handleResponse);
};

export const validateToken = (jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  }).then(handleResponse);
};

export const getMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-type": "application/json",
    },
    method: "GET",
  }).then(handleResponse);
};

export const addMovies = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${MOVIE_URL}${movie.image.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      trailerLink: movie.trailerLink,
      thumbnail: `${MOVIE_URL}${movie.image.formats.thumbnail.url}`,
    }),
  }).then(handleResponse);
};

export const deleteMovies = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-type": "application/json",
    },
    method: "DELETE",
  }).then(handleResponse);
};

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-type": "application/json",
    },
    method: "GET",
  }).then(handleResponse);
};

export const editUserInfo = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  }).then(handleResponse);
};
