import { PropTypes } from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './Movie.module.css';

//const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.movieList}>
      {movies.map(movie => {
        //const finalImageUrl = `${IMG_URL + movie.poster_path}`;
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {/* <img
                src={
                  movie.poster_path
                    ? finalImageUrl
                    : 'https://media.istockphoto.com/id/911590226/vector/movie-time-vector-illustration-cinema-poster-concept-on-red-round-background-composition-with.jpg?s=612x612&w=0&k=20&c=QMpr4AHrBgHuOCnv2N6mPUQEOr5Mo8lE7TyWaZ4r9oo='
                }
                alt={movie.title}
                className={css.listImg}
              /> */}

              <div className={css.movieListTitle}>{movie.title}</div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};