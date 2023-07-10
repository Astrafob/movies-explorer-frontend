import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { moviesList } from "../../utils/constants";

function Movies() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setLoggedIn(true);
  }, []);

  useEffect(() => {
    if (loggedIn) {
      setMovies(moviesList);
    }
  }, [loggedIn]);

  return (
    <div className='page__container'>
      <Header
        loggedIn={loggedIn}
      />
      <main className="movies">
        <SearchForm />
        <MoviesCardList
          moviesList={movies}
        />
      </main>
      <Footer />
    </div>
  )
}

export default Movies;