import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useEffect, useState } from 'react';
import { MOVIES_URL } from '../../utils/constants';

function MoviesCardList({ moviesList, savedMovies, onSavedMovie, onDeleteSavedMovie }) {
  const { pathname } = useLocation();
  const [amountOfFilm, setAmountOfFilm] = useState(12);
  const windowWidth = window.innerWidth;

  useEffect(() => {
    function handleResize() {
      let visibleMovies;

      if (windowWidth < 660) {
        visibleMovies = 5;
      } else if ((windowWidth > 660) && (windowWidth < 1195)) {
        visibleMovies = 8;
      } else {
        visibleMovies = 12;
      }
      return (setAmountOfFilm(visibleMovies));
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  function handleLoadMore() {
    if (windowWidth < 660) {
      setAmountOfFilm((movies) => movies + 2);
    } else if ((windowWidth > 660) && (windowWidth < 1195)) {
      setAmountOfFilm((movies) => movies + 2);
    } else {
      setAmountOfFilm((movies) => movies + 3);
    }
  };

  const renderedMovies = moviesList.slice(0, amountOfFilm);

  return (
    <section className="movies-cards">
      <div className="movies-cards__list">
        {pathname === "/movies" ? (
          renderedMovies.map(movie => (
            <MoviesCard
              key={movie.id}
              movie={movie}
              savedMovies={savedMovies}
              image={`${MOVIES_URL}${movie.image.url}`}
              onSavedMovie={onSavedMovie}
            />
          ))) :
          moviesList.map(movie => (
            <MoviesCard
              key={movie._id}
              movie={movie}
              savedMovies={moviesList}
              image={movie.image}
              onDeleteSavedMovie={onDeleteSavedMovie}
            />
          ))}
      </div>
      {(pathname === "/movies" && moviesList.length > amountOfFilm) && (
        <button
        className="movies-cards__more"
        onClick={handleLoadMore}
        >
          Ещё
        </button>
      )
      }
    </section>
  )
}

export default MoviesCardList;