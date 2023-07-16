import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import NotFound from '../NotFound/NotFound.js';
import apiMain from '../../utils/MainApi.js';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      Promise.all([apiMain.getUserInfo()])
        .then(([dataUser]) => {
          setCurrentUser(dataUser);
          console.log(dataUser);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path='/'
          element={<Main
            loggedIn={loggedIn}
          />}
        />
        <Route
          path='/movies'
          element={<Movies
            loggedIn={loggedIn}
          />}
        />
        <Route
          path='/saved-movies'
          element={<SavedMovies
            loggedIn={loggedIn}
          />}
        />
        <Route
          path='/profile'
          element={<Profile
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />}
        />
        <Route
          path='/signin'
          element={<Login
            setLoggedIn={setLoggedIn}
          />}
        />
        <Route
          path='/signup'
          element={<Register
            setLoggedIn={setLoggedIn}
          />}
        />
        <Route
          path="*"
          element={<Navigate to="/404" replace />}
        />
        <Route
          path="/404"
          element={<NotFound />}
        />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
