import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchMovieByQuery } from 'services/api';

import { MovieSearch } from 'components/MovieSearch/MovieSearch';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    const getMovieByQuery = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchMovieByQuery(query);

        setMovies(results);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieByQuery();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };
  return (
    <section>
      <MovieSearch onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {error && (
        <p>Sorry, an error occurred! Error: {error} Please try again later!</p>
      )}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </section>
  );
}
export default MoviesPage;