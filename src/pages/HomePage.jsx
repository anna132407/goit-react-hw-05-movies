import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchPopularMovies } from 'services/api';
import { Loader } from 'components/Loader/Loader';

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        setIsLoading(true);
        const {
          data: { results: movies },
        } = await fetchPopularMovies();
        setMovies(movies);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <section>
      <h2>Trending today:</h2>
      {isLoading && <Loader />}
      {error && (
        <p>Sorry, an error occurred! Error: {error} Please try again later!</p>
      )}
      <MoviesList movies={movies}></MoviesList>
    </section>
  );
}
export default Home;