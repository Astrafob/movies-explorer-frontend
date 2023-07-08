import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesList }) {

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
      <button className="movies-cards__more">
        Ещё
      </button>
    </section>
  )
}

export default MoviesCardList;