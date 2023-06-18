import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../cssModules/MovieDetails.module.css';
import { Link, useNavigate } from 'react-router-dom';
import MovieInfo from './MovieInfo';
import MovieCredits from './MovieCredits';
import MovieReviews from './MovieReviews';

const MovieDetails = ({ movie, credits, reviews }) => {
  const [showCredits, setShowCredits] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const navigate = useNavigate();

  const toggleCredits = () => {
    setShowCredits(!showCredits);
  };

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  const handleCreditsClick = () => {
    toggleCredits();
    navigate('credits');
  };

  const handleReviewsClick = () => {
    toggleReviews();
    navigate('reviews');
  };

  return (
    <div className={styles.container}>
      <MovieInfo movie={movie} />
      <div>
        <div className={styles.buttons}>
          <button
            className={`${styles.linkButton} ${showCredits ? styles.activeButton : ''}`}
            onClick={handleCreditsClick}
          >
            {showCredits ? 'Hide Credits' : 'Show Credits'}
          </button>
          {showCredits && credits && <MovieCredits credits={credits} />}
          <button
            className={`${styles.linkButton} ${showReviews ? styles.activeButton : ''}`}
            onClick={handleReviewsClick}
          >
            {showReviews ? 'Hide Reviews' : 'Show Reviews'}
          </button>
          {showReviews && reviews && <MovieReviews reviews={reviews} />}
        </div>
        <div className={styles.goBackButton}>
          <Link to="/" className={styles.backButton}>
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }),
  credits: PropTypes.shape({
    cast: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        profile_path: PropTypes.string,
        name: PropTypes.string.isRequired,
        character: PropTypes.string.isRequired,
      })
    ),
  }),
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

export default MovieDetails;