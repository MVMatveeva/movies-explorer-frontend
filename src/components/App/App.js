import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import "../../index.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import Movies from "../Movies/Movies.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";
import Profile from "../Profile/Profile.jsx";
import NotFoundError from "../NotFoundError/NotFoundError.jsx";
import profile from "../../images/profile.svg";
import profileBlack from "../../images/header-logo-black.svg";
import * as MainApi from "../../utils/MainApi.js";
import { CurrentUserContext } from "../../context/CurrentUserContext.js";
import InfoTooltip from "../InfoTooltip/InfoTooltip.jsx";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [color, setColor] = useState("#F3C1F8");
  const [icon, setIcon] = useState(profile);
  const [moviesSaved, setMoviesSaved] = useState([]);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [infoTooltip, setInfoTooltip] = useState(false);
  const [popupRegisterTitle, setPopupRegisterTitle] = useState("");

  const localLoggedIn = localStorage.getItem("loggedIn");
  const [loggedIn, setLoggedIn] = useState(localLoggedIn === "true");

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      MainApi.validateToken(jwt)
        .then((res) => {
          if (res) {
            localStorage.setItem("loggedIn", true);
            setLoggedIn(true);
          } else {
            setLoggedIn(false);
            localStorage.removeItem("jwt");
          }
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
          setLoggedIn(false);
          localStorage.removeItem("jwt");
        });
    } else {
      setLoggedIn(false);
    }
  }, [navigate]);

  useEffect(() => {
    if (loggedIn) {
      MainApi.getUserInfo()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });

      MainApi.getMovies()
        .then((res) => {
          setMoviesSaved(res);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    const whiteHeader = [
      "/signin",
      "/signup",
      "/movies",
      "/saved-movies",
      "/profile",
    ];

    if (whiteHeader.includes(window.location.pathname)) {
      setColor("#FFFFFF");
    }

    return () => {
      setColor("#F3C1F8");
    };
  }, [navigate]);

  useEffect(() => {
    const blackIcon = ["/movies", "/saved-movies", "/profile"];
    if (blackIcon.includes(location.pathname)) {
      setIcon(profileBlack);
    } else {
      setIcon(profile);
    }
  }, [location.pathname, setIcon]);

  const handleOpenHamburger = () => {
    setHamburgerOpen(true);
  };

  const handleCloseHamburger = () => {
    setHamburgerOpen(false);
  };

  const handleRegisterUser = (name, email, password) => {
    MainApi.registerUser(name, email, password)
      .then(() => {
        setPopupRegisterTitle("Вы успешно зарегистрировались!");
        handleLoginUser(email, password);
      })
      .catch(() => {
        setPopupRegisterTitle("Что-то пошло не так! Попробуйте ещё раз.");
      })
      .finally(() => {
        handleInfoTooltip(true);
      });
  };

  const handleLoginUser = (email, password) => {
    MainApi.loginUser(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch(() => {
        setPopupRegisterTitle("Что-то пошло не так! Попробуйте ещё раз.");
      })
      .finally(() => {
        handleInfoTooltip(true);
      });
  };

  const handleUpdateUser = ({ name, email }) => {
    MainApi.editUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch(() => {
        setPopupRegisterTitle("Что-то пошло не так! Попробуйте ещё раз.");
        handleInfoTooltip(true);
      })
  };

  const handleAddMovie = (data) => {
    MainApi.addMovies(data)
      .then((data) => {
        setMoviesSaved([data, ...moviesSaved]);
      })
      .catch(() => {
        setPopupRegisterTitle(
          "Ошибка при сохранении фильма. Попробуйте ещё раз."
        );
      });
  };

  const handleDeleteMovie = (movieId) => {
    MainApi.deleteMovies(movieId._id)
      .then(() => {
        setMoviesSaved((listMovies) =>
          listMovies.filter((movie) => movie._id !== movieId._id)
        );
      })
      .catch(() => {
        setPopupRegisterTitle(
          "Ошибка при удалении фильма. Попробуйте ещё раз."
        );
      });
  };

  const handleExit = () => {
    setLoggedIn(false);
    localStorage.clear();
    localStorage.removeItem("jwt");
    localStorage.removeItem("loggedIn");
    navigate("/signin");
  };

  const handleInfoTooltip = () => {
    setInfoTooltip(true);
  };

  const closePopup = () => {
    setInfoTooltip(false);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  loggedIn={loggedIn}
                  backgroundColor={color}
                  profile={icon}
                  menuOpen={handleOpenHamburger}
                  hamburgerOpen={hamburgerOpen}
                  onClose={handleCloseHamburger}
                />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <>
                <Header
                  loggedIn={loggedIn}
                  backgroundColor={color}
                  profile={icon}
                  menuOpen={handleOpenHamburger}
                  hamburgerOpen={hamburgerOpen}
                  onClose={handleCloseHamburger}
                />
                <ProtectedRoute
                  loggedIn={loggedIn}
                  element={Movies}
                  savedMovies={moviesSaved}
                  onAdd={handleAddMovie}
                  onDelete={handleDeleteMovie}
                />
                <Footer />
              </>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <>
                <Header
                  loggedIn={loggedIn}
                  backgroundColor={color}
                  profile={icon}
                  menuOpen={handleOpenHamburger}
                  hamburgerOpen={hamburgerOpen}
                  onClose={handleCloseHamburger}
                />
                <ProtectedRoute
                  element={SavedMovies}
                  loggedIn={loggedIn}
                  savedMovies={moviesSaved}
                  onDelete={handleDeleteMovie}
                />
                <Footer />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Register onRegister={handleRegisterUser} />
              </>
            }
          />
          <Route
            path="/signin"
            element={
              <>
                <Login onLogin={handleLoginUser} />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Header
                  loggedIn={loggedIn}
                  backgroundColor={color}
                  profile={icon}
                  menuOpen={handleOpenHamburger}
                  hamburgerOpen={hamburgerOpen}
                  onClose={handleCloseHamburger}
                  onSubmit={handleUpdateUser}
                />
                <ProtectedRoute
                  loggedIn={loggedIn}
                  element={Profile}
                  onUpdateUser={handleUpdateUser}
                  onClick={handleExit}
                />
              </>
            }
          />
          <Route path="*" element={<NotFoundError />} />
        </Routes>
      </div>

      <InfoTooltip
        message={popupRegisterTitle}
        isOpen={infoTooltip}
        onClose={closePopup}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
