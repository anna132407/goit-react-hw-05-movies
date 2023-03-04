import { useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Loader } from 'components/Loader/Loader';
import css from './pageStyles/MovieDetailsPage.module.css';

function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { id } = useParams();

  const location = useLocation();

  const goBackLink = location?.state?.from ?? '/';

  useEffect(() => {
    const getMovieById = async () => {
      try {
        setIsLoading(true);
        const movie = await fetchMovieDetails(id);

        setMovie(movie);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieById(id);
  }, [id]);

  return (
    <section>
      {isLoading && <Loader />}
      {error && (
        <p>Sorry, an error occurred! Error: {error} Please try again later!</p>
      )}
      <>
        <div className={css.buttonBack}>
          <Link to={goBackLink}>Go back</Link>
        </div>
        <MovieDetails
          posterPath={movie.poster_path}
          title={movie.original_title}
          voteAverage={movie.vote_average}
          overview={movie.overview}
          genres={movie.genres}
        />
        <div>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast" state={{ from: location?.state?.from ?? '/' }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: location?.state?.from ?? '/' }}>
                Reviews
              </Link>
            </li>
          </ul>
          <Outlet />
        </div>
      </>
    </section>
  );
}

export default MovieDetailsPage;