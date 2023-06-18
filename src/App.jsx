import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";
import Layout from "components/Layout";
import HomePage from "pages/HomePage";
import MovieCredits from "components/MovieCredits";
import MovieReviews from "components/MovieReviews";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="credits" element={<MovieCredits />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;