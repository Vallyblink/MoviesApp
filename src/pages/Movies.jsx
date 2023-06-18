import React, { useState } from 'react'
import MovieCard from 'components/MovieCard';
import { searchMovies } from 'Services/API';
import styles from '../cssModules/Movies.module.css'

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
 
  const handleSearch = async () => {
    try {
      const data = await searchMovies(query);
      setMovies(data.results);
    } catch (error) {
      console.error('Error:', error);
    }
  };


 return (
    <div className={styles.container}>
      <h1>Search Movies</h1>
      <div>
        <input
          className={styles.input}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className={styles.button} onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className={styles.moviesContainer}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies
