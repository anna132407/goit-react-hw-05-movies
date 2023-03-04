import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieActors } from 'services/api';
import css from './Cast.module.css';

import { Loader } from 'components/Loader/Loader';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [actors, setActors] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getMovieActors = async () => {
      try {
        setIsLoading(true);
        const { cast } = await fetchMovieActors(id);
        setActors(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieActors(id);
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <p>Sorry, an error occurred! Error: {error} Please try again later!</p>
      )}
      <ul className={css.actorList}>
        {actors.slice(0, 10).map(({ id, original_name, profile_path }) => {
          return (
            <li className={css.actorBox} key={id}>
              {profile_path && (
                <img
                  className={css.actorImg}
                  src={`${IMG_URL + profile_path}`}
                  alt={`poster of ${original_name}`}
                />
              )}

              <p className={css.actorName}>{original_name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;