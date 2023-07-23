import { useState } from "react";
import { useLocation } from "react-router-dom";

function SearchForm({ onSearch, query, checkBox }) {
  const [querySearch, setQuerySearch] = useState(query || '');
  const [checked, setChecked] = useState(checkBox || false);
  const { pathname } = useLocation();

  const handleInputChange = (event) => {
    setQuerySearch(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
    submitCallback(event.target.checked)
  };

  const errorMessageNameClassName = (
    `search-form__input-error ${(querySearch === '' && pathname === "/movies")
      ? 'search-from__input-error_visible'
      : ''
    }`
  )

  const submitCallback = (checked) => {
    if (pathname === '/saved-movies') {
      const searchOptions = {
        query: querySearch,
        shortFilm: checked,
      };
      onSearch(searchOptions);
    }
    else {
      (querySearch < 1) && console.log()
      const searchOptions = {
        query: querySearch,
        shortFilm: checked,
      };
      onSearch(searchOptions);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    submitCallback(checked)
  };

  return (
    <section>
      <form
        className="search-form"
        onSubmit={handleSubmit}
      >
        <label className="search-form__container">
          <input
            className="search-form__input"
            placeholder="Фильм"
            value={querySearch}
            onChange={handleInputChange}
          />
          <button
            className="search-form__button"
            type="submit"
          />
        </label>
        <span
        className={errorMessageNameClassName}
        >
          Нужно ввести ключевое слово
          </span>
        <label className="search-form__checkbox" htmlFor="checkbox">
          <input
            type="checkbox"
            role="switch"
            className="search-form__switch"
            id="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          <span className="search-form__checkbox-inner">Короткометражки</span>
        </label>
      </form>
    </section>
  )
}

export default SearchForm;