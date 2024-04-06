const MOVIE_URL = "https://api.nomoreparties.co/beatfilm-movies";

export const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};
export const getMovies = () => {
  return fetch(`${MOVIE_URL}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  }).then(handleResponse);
};
