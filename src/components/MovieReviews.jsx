import React from 'react';
import PropTypes from 'prop-types';
import styles from '../cssModules/MovieDetails.module.css';

const MovieReviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      <h2>Reviews</h2>
      <ul>
        {reviews.results.map((review) => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        author: PropTypes.string,
        content: PropTypes.string,
      })
    ),
  }),
};

export default MovieReviews;