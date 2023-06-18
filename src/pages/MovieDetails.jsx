import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetail, getMovieCredits, getMovieReviews } from 'Services/API';
import MovieDetails from '../components/MovieDetails';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetail(id);
        const movieCredit = await getMovieCredits(id);
        const movieReview = await getMovieReviews(id);

        setMovie(details);
        setCredits(movieCredit);
        setReviews(movieReview);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      {movie && (
        <MovieDetails
          movie={movie}
          credits={credits}
          reviews={reviews}
        />
      )}
    </div>
  );
};

export default MovieDetailsPage;