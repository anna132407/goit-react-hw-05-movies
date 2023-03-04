import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import css from './Reviews.module.css';

import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchMovieReviews(id);
        setReviews(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieReviews(id);
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <p>Sorry, an error occurred! Error: {error} Please try again later!</p>
      )}
      <ul className={css.reviewBox}>
        {reviews.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <p>{author}</p>
              <p className={css.reviewText}>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;