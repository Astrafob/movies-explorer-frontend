import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useEffect, useState } from "react";
import { moviesFavoriteList } from "../../utils/constants";


function SavedMovies() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [moviesFavorite, setMoviesFavorite] = useState([]);

  useEffect(() => {
    setLoggedIn(true);
  }, []);

  useEffect(() => {
    if (loggedIn) {
      setMoviesFavorite(moviesFavoriteList);
    }
  }, [loggedIn]);

  return (
    <div className='page__container'>
      <Header
      loggedIn={loggedIn}
      />
      <main>
        <SearchForm />
        <MoviesCardList
          moviesList={moviesFavorite}
        />
      </main>
      <Footer />
    </div>
  )
}

export default SavedMovies;