import { PropTypes } from 'prop-types';
import { useState } from 'react';
import css from './MovieSearch.module.css';

export const MovieSearch = ({ onSubmit }) => {
  const [query, setQuery] = useState([]);

  const handleInputChange = e => {
    const { value } = e.target;
    setQuery(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <form className={css.searchform} onSubmit={handleFormSubmit}>
      <input
        className={css.searchInput}
        type="text"
        autoComplete="off"
        autoFocus
        name="query"
        value={query}
        onChange={handleInputChange}
      />
      <button className={css.searchButton} type="submit">Search</button>
    </form>
  );
};

MovieSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};