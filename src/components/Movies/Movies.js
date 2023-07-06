import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";

function Movies() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(true);
  }, []);

  return (
    <div className="movies">
      <Header
        loggedIn={loggedIn}
      />
      <SearchForm />
      {/* <MoviesCardList />
      <MoviesCard />
      <Preloader /> */}
      <Footer />
    </div>
  )
}

export default Movies;