import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MOVIES_URL } from '../../utils/constants';

function MoviesCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { pathname } = useLocation();

  const movieFavoriteButtonClassName = (
    `movie-card__favorite-button ${pathname === '/movies'
      ? isFavorite
        ? 'movie-card__favorite-button_active'
        : 'movie-card__favorite-button_inactive'
      : 'movie-card__favorite-button_delete'
    }`
  );

  function handleMovieFavorite() {
    setIsFavorite(!isFavorite);
  }

  function getTimeFromMins(duration) {
    let hours = Math.trunc(duration / 60);
    let minutes = duration % 60;
    return hours + 'ч ' + minutes + 'м';
  };

  return (
    <section className="movie-card">
      <div className="movie-card__info">
        <div className="movie-card__container">
          <h2 className="movie-card__title">{movie.nameRU}</h2>
          <p className="movie-card__duration">
            {getTimeFromMins(movie.duration)}
          </p>
        </div>
        <button className={movieFavoriteButtonClassName} aria-label="favorite" type="button" onClick={handleMovieFavorite}></button>
      </div>
      <a
      href={movie.trailerLink}
      target="_blank" rel="noreferrer"
      >
        <img
          src={`${MOVIES_URL}${movie.image.url}`}
          alt="Обложка фильма"
          className="movie-card__image"
        />
      </a>
    </section>
  )
}

export default MoviesCard;