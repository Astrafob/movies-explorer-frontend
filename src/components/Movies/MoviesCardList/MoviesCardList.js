import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {

  return (
    <section className="movies-cards">
      <div className="movies-cards__list">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      <button className="movies-cards__more">
        Ещё
      </button>
    </section>
  )
}

export default MoviesCardList;