import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
//import ProtectedRoute from "./ProtectedRoute";
//import { Link } from "react-router-dom";
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


function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [color, setColor] = useState("#F3C1F8");
  const [icon, setIcon] = useState(profile);
  const [loggedIn, setLoggedIn] = useState(false);
  const [visibleCards, setVisibleCards] = useState(12);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  

  const handleOpenHamburger = () => {
    setHamburgerOpen(true);
  };

  const handleCloseHamburger = () => {
    setHamburgerOpen(false);
  };

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


  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                backgroundColor={color}
                loggedIn={loggedIn}
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
                backgroundColor={color}
                loggedIn={loggedIn}
                profile={icon}
                menuOpen={handleOpenHamburger}
                hamburgerOpen={hamburgerOpen}
                onClose={handleCloseHamburger}
              />
              <Movies />
              <Footer />
            </>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <>
              <Header
                backgroundColor={color}
                loggedIn={loggedIn}
                profile={icon}
                menuOpen={handleOpenHamburger}
                hamburgerOpen={hamburgerOpen}
                onClose={handleCloseHamburger}
              />
              <SavedMovies />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Register />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Header
                backgroundColor={color}
                loggedIn={loggedIn}
                profile={icon}
                menuOpen={handleOpenHamburger}
                hamburgerOpen={hamburgerOpen}
                onClose={handleCloseHamburger}
              />
              <Profile />
            </>
          }
        />
        <Route path="*" element={<NotFoundError />} />
      </Routes>
    </div>
  );
}

export default App;
