import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
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

function App() {
  const [color, setColor] = useState("#F3C1F8");
  const navigate = useNavigate();

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

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header backgroundColor={color} />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Header backgroundColor={color} />
              <Movies />
              <Footer />
            </>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <>
              <Header backgroundColor={color} />
              <SavedMovies />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Header backgroundColor={color} />
              <Register />
              <Footer />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              <Header backgroundColor={color} />
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Header backgroundColor={color} />
              <Profile />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<NotFoundError />} />
      </Routes>
    </div>
  );
}

export default App;
