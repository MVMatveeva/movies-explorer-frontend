import React from "react";
import { Route, Routes } from "react-router-dom";
//import ProtectedRoute from "./ProtectedRoute";
//import { Link } from "react-router-dom";
import "./index.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Movies from "./components/Movies/Movies.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        />

        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
