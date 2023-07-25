import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import NotFound from '../NotFound/NotFound.js';
import apiMain from '../../utils/MainApi.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import apiAuth from '../../utils/AuthApi.js';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      Promise.all([apiMain.getUserInfo(), apiMain.getSavedMovies()])
        .then(([dataUser, dataSavedMovies]) => {
          setCurrentUser({ ...dataUser, loggedIn: true });
          console.log(dataUser);
          setSavedMovies(dataSavedMovies);
          localStorage.setItem('savedMovies', JSON.stringify(dataSavedMovies));
          console.log(dataSavedMovies);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }, [loggedIn]);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      apiAuth.getContent(jwt)
        .then((data) => {
          setLoggedIn(true);
          setCurrentUser({ ...data, loggedIn: true });
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, []);

  function handleUpdateUser(userInfo) {
    apiMain.setUserInfo(userInfo)
      .then((data) => {
        setCurrentUser(data);
        setIsSuccess(true);
      })
      .catch((error) => {
        setIsSuccess(false);
        console.log(error)
      })
      .finally(() => {
        setIsInfoTooltipPopupOpen(true);
      })
  }

  function closePopup() {
    setIsInfoTooltipPopupOpen(false);
  }

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
          element={
            <ProtectedRoute
              element={Movies}
              currentUser={currentUser}
              loggedIn={loggedIn}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
            />
          } />
        <Route
          path='/saved-movies'
          element={
            <ProtectedRoute
              element={SavedMovies}
              loggedIn={loggedIn}
            />
          } />
        <Route
          path='/profile'
          element={
            <ProtectedRoute
              element={Profile}
              currentUser={currentUser}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              onUpdateUser={handleUpdateUser}
              isOpen={isInfoTooltipPopupOpen}
              onClose={closePopup}
              isSuccess={isSuccess}
            />}
        />
        <Route
          path='/signin'
          element={
            loggedIn
              ? <Navigate to='/movies' />
              : <Login
                setLoggedIn={setLoggedIn}
              />}
        />
        <Route
          path='/signup'
          element={
            loggedIn
              ? <Navigate to='/movies' />
              : <Register
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
