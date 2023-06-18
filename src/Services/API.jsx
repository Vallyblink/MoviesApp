
const API_KEY = 'b88a88f6d693c3f898a66b1a92673ff7'

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An error occurred while fetching data from the API.');
  }
};


export const getTrendingMovies = async () => {
  const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`;
  return fetchData(url);
};

export const getMovieDetail = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  return fetchData(url)
}

export const getMovieCredits = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
  return fetchData(url)
}

export const getMovieReviews = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  return fetchData(url)
}

export const searchMovies = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
  return fetchData(url);
};