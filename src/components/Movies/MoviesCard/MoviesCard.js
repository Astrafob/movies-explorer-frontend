import { useState } from 'react';
import movieImage from '../../../images/movie-image.png';

function MoviesCard() {
  const [isFavorite, setIsFavorite] = useState(false);

  const movieFavoriteButtonClassName = (
    `movie-card__favorite ${isFavorite ? 'movie-card__favorite_active' : ''}`
  );
  
  function handleMovieFavorite() {
    setIsFavorite(current => !current)
  }

  return (
    <section className="movie-card">
      <div className="movie-card__info">
        <div className="movies-card__container">
          <h2 className="movie-card__title">33 слова о дизайне</h2>
          <p className="movie-card__duration">1ч 47м</p>
        </div>
        <button className={movieFavoriteButtonClassName} aria-label="favorite" type="button" onClick={handleMovieFavorite}></button>
      </div>
      <img
        src={movieImage}
        alt="Обложка фильма"
        className="movie-card__image"
      />
    </section>
  )
}

export default MoviesCard;