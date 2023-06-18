import React from 'react';
import PropTypes from 'prop-types';
import styles from '../cssModules/MovieDetails.module.css';

const MovieCredits = ({ credits }) => {
  return (
    <div className={styles.credits}>
      <h2>Credits</h2>
      <ul>
        {credits.cast.map((person) => (
          <li key={person.id}>
            <img src={`https://image.tmdb.org/t/p/w200${person.profile_path}`} alt={person.name} />
            <div>
              <h3>{person.name}</h3>
              <p>{person.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

MovieCredits.propTypes = {
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
};

export default MovieCredits;
