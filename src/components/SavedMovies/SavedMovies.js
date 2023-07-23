import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useEffect, useState } from "react";


function SavedMovies({ loggedIn }) {
  const [moviesFavorite, setMoviesFavorite] = useState([]);
  const [preloader, setPreloader] = useState(false);



  return (
    <div className='page__container'>
      <Header
        loggedIn={loggedIn}
      />
      <main>
        <SearchForm />
        <MoviesCardList
          moviesList={moviesFavorite}
        />
      </main>
      <Footer />
    </div>
  )
}

export default SavedMovies;