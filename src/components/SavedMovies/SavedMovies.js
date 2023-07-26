import apiMain from "../../utils/MainApi";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import { useEffect, useState } from "react";


function SavedMovies({ loggedIn }) {
  const [moviesFavorite, setMoviesFavorite] = useState(JSON.parse(localStorage.getItem('savedMovies')));
  const [moviesSearch, setMoviesSearch] = useState(undefined);
  const [emptyResult, setEmptyResult] = useState(false);
  const [preloader, setPreloader] = useState(false);

  useEffect(() => {
    getSavedMovies();
  }, []);

  function getSavedMovies() {
    apiMain.getSavedMovies()
      .then((data) => {
        setPreloader(true);
        setMoviesFavorite(data);
        localStorage.setItem('savedMovies', JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setPreloader(false));
  }

  function handleSearchMovies(searchOptions) {
    const { query, shortFilm } = searchOptions;

    const filter = moviesFavorite.filter((movie) => {
      const includ = movie.nameRU.toLowerCase().includes(query.toLowerCase());
      const short = movie.duration <= 40;
      if (shortFilm) {
        return includ && short;
      } else {
        return includ;
      }
    });

    if (filter.length === 0) {
      setEmptyResult(true);
    }
    else {
      setEmptyResult(false);
    }
    setMoviesSearch(filter);
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
      <main>
        <SearchForm
          onSearch={handleSearchMovies}
        />
        {preloader && <Preloader />}
        {emptyResult ?
          <span className='empty-result'>Ничего не найдено</span> : null
        }
        {!emptyResult ?
          <MoviesCardList
            moviesList={
              moviesSearch || moviesFavorite
            }
            onDeleteSavedMovie={deleteSavedMovie}
          /> :
          null
        }
      </main>
      <Footer />
    </div>
  )
}

export default SavedMovies;