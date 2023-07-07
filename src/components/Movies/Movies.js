import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";

function Movies() {
  const [loggedIn, setLoggedIn] = useState(false);
  
  useEffect(() => {
    setLoggedIn(true);
  }, []);

  return (
    <>
      <Header
        loggedIn={loggedIn}
      />
      <main className="movies">
        <SearchForm />
        <MoviesCardList />
        {/* <Preloader /> */}
      </main>
      <Footer />
    </>
  )
}

export default Movies;