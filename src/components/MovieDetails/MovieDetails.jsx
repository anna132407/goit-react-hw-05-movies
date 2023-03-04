import { PropTypes } from 'prop-types';
import css from './MovieDetails.module.css';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const MovieDetails = ({
  posterPath,
  title,
  voteAverage,
  overview,
  genres = [],
}) => {
  const finalImageUrl = `${IMG_URL + posterPath}`;
  const userScore = Number((voteAverage * 10).toFixed(0));
  const allGenres = genres.map(genre => genre.name).join(', ');

  return (
    <div className={css.detailsWrap}>
      <div className={css.imgWrap}>
        {posterPath && (
          <img src={finalImageUrl} alt={`poster of ${title} movie`} />
        )}
      </div>
      <div className={css.about}>
        <h2>{title}</h2>
        <p className={css.score}>User Score: {userScore}%</p>
        <h3>Overview</h3>
        <p className={css.desc}>{overview}</p>
        <h3>Genres</h3>
        <p className={css.desc}>{allGenres}</p>
      </div>
    </div>
  );
};
MovieDetails.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string,
  voteAverage: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.any),
};