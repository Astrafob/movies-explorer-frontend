import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import apiMovies from "../../utils/MoviesApi";
import apiMain from "../../utils/MainApi";

function Movies({ loggedIn }) {
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [emptyResult, setEmptyResult] = useState(false);
  const [preloader, setPreloader] = useState(false);

  const searchOptions = JSON.parse(localStorage.getItem('searchOptions')) || {};
  const query = searchOptions.query || '';
  const shortFilm = searchOptions.isShortFilm || false;

  useEffect(() => {
    getMovies();
    getSavedMovies();
  }, []);

  function getMovies() {
    apiMovies.getMovies()
      .then((data) => {
        setPreloader(true);
        setMovies(data);
        localStorage.setItem('movies', JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setPreloader(false));
  }

  function getSavedMovies() {
    apiMain.getSavedMovies()
      .then((data) => {
        setPreloader(true);
        setSavedMovies(data);
        localStorage.setItem('savedMovies', JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setPreloader(false));
  }

  function handleSearchMovies(searchOptions) {
    localStorage.setItem('searchOptions', JSON.stringify(searchOptions));
    const { query, shortFilm } = searchOptions;

    const filter = movies.filter((movie) => {
      const includ = movie.nameRU.toLowerCase().includes(query.toLowerCase());
      const short = movie.duration <= 40;
      if (shortFilm) {
        return includ && short;
      } else {
        return includ;
      }
    });

    if (query === '' || filter.length === 0) {
      setEmptyResult(true);
    }
    else {
      setEmptyResult(false);
    }

    localStorage.setItem('searchResult', JSON.stringify(filter));
    setMoviesSearch(filter);
  }

  function handleSavedMovie(movie) {
    const isLiked = savedMovies.some(i => i.movieId === movie.id);
    if (!isLiked) {
      addSavedMovie(movie)
    } else {
      savedMovies.forEach(saveMovie => {
        if (saveMovie.movieId === movie.id) {
          deleteSavedMovie(saveMovie)
        }
      })
    }
  }

  function addSavedMovie(movie) {
    apiMain.addSavedMovie(movie)
      .then((data) => {
        setSavedMovies([...savedMovies, data]);
        getSavedMovies();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function deleteSavedMovie(saveMovie) {
    apiMain.deleteSavedMovie(saveMovie)
      .then((data) => {
        getSavedMovies();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className='page__container'>
      <Header
        loggedIn={loggedIn}
      />
      <main className="movies">
        <SearchForm
          onSearch={handleSearchMovies}
          query={query}
          checkBox={shortFilm}
        />
        {(emptyResult) &&
          <span className='empty-result'>Ничего не найдено</span>
        }
        {preloader && <Preloader />}
        {(!emptyResult && query !== '') &&
          <MoviesCardList
            moviesList={JSON.parse(localStorage.getItem('searchResult')) || moviesSearch}
            savedMovies={savedMovies}
            onSavedMovie={handleSavedMovie}
            onDeleteSavedMovie={deleteSavedMovie}
          />
        }
      </main>
      <Footer />
    </div>
  )
}

export default Movies;