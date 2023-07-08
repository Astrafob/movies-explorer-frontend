import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesList }) {
  const { pathname } = useLocation();

  return (
    <section className="movies-cards">
      <div className="movies-cards__list">
        {moviesList.map(movie => (
          <MoviesCard
            key={movie.movieId}
            movie={movie}
          />
        ))}
      </div>
      {pathname === "/movies" ? (
        <button className="movies-cards__more">
          Ещё
        </button>
      ) : ''
      }
    </section>
  )
}

export default MoviesCardList;