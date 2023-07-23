import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import apiMovies from "../../utils/MoviesApi";
import apiMain from "../../utils/MainApi";

function Movies({ loggedIn }) {
  // const [movies, setMovies] = useState([]);
  // const [moviesSearch, setMoviesSearch] = useState([]);
  // const [preloader, setPreloader] = useState(false);

  // function getMovies() {
  //   setPreloader(true);
  //   apiMovies.getMovies()
  //     .then((dataMovies) => {
  //       setMovies(dataMovies);
  //       localStorage.setItem('movies', JSON.stringify(dataMovies));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setPreloader(false);
  //     })
  // }

  // useEffect(() => {
  //   getMovies();
  // },[]);

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
    getSavedMovies()
  }, []);

  function getMovies() {
    return apiMovies.getMovies()
      .then(res => {
        setPreloader(true)
        setMovies(res)
        localStorage.setItem('movies', JSON.stringify(res))
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setPreloader(false))
  }

  function getSavedMovies() {
    setPreloader(true)
    return apiMain.getSavedMovies()
      .then(res => {
        setSavedMovies(res)
        localStorage.setItem('savedMovies', JSON.stringify(res))
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setPreloader(false))
  }

  const handleSearchMovies = (searchOptions) => {
    localStorage.setItem('searchOptions', JSON.stringify(searchOptions))
    const { query, shortFilm } = searchOptions;

    const filter = movies.filter((movie) => {
      const isIncluded = movie.nameRU.toLowerCase().includes(query.toLowerCase());
      const short = movie.duration <= 40;
      if (shortFilm) {
        return isIncluded && short;
      } else {
        return isIncluded;
      }
    });

    if (query === '' || filter.length === 0) {
      setEmptyResult(true)
    }
    else {
      setEmptyResult(false)
    }

    localStorage.setItem('searchResult', JSON.stringify(filter));
    setMoviesSearch(filter);
  }

  useEffect(() => {
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies))
  }, [savedMovies])

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
        {(emptyResult || query === '') &&
          <span className='empty-result'>Ничего не найдено</span>
        }
        {preloader && <Preloader />}
        {(!emptyResult && query !== '') &&
          <MoviesCardList
            moviesList={JSON.parse(localStorage.getItem('searchResult')) || moviesSearch}
          />
        }
      </main>
      <Footer />
    </div>
  )
}

export default Movies;