import React from 'react'
import {useState, useEffect } from 'react'
import  {getTrendingMovies}  from 'Services/API'
import MovieCard from 'components/MovieCard'
import styles from '../cssModules/HomePage.module.css'


const HomePage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data.results);
        console.log(data.results)
        
      } catch (error) {
         console.error('Error fetching movies:', error);
        
      }
    };

    fetchMovies()
  }, [])
  
  return (
    <div>
      <h1 className={styles.title}>Trending  Now</h1>
      <div className={styles.moviesContainer}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie ={movie}/>
        ))}
      </div>
  </div>
    
  )
}

export default HomePage


