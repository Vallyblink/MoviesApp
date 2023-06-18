import React, { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Layout from "components/Layout";

const LazyHomePage = lazy(() => import('./pages/HomePage'));
const LazyMovies = lazy(() => import('./pages/Movies'));
const LazyMovieDetails = lazy(() => import('./pages/MovieDetails'));
const LazyMovieCredits = lazy(() => import('./components/MovieCredits'));
const LazyMovieReviews = lazy(() => import('./components/MovieReviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={(
          <Suspense fallback={<div>Loading...</div>}>
            <LazyHomePage />
          </Suspense>
        )} />
        <Route path="movies" element={(
          <Suspense fallback={<div>Loading...</div>}>
            <LazyMovies />
          </Suspense>
        )} />
        <Route path="movies/:id" element={(
          <Suspense fallback={<div>Loading...</div>}>
            <LazyMovieDetails />
          </Suspense>
        )}>
          <Route path="credits" element={(
            <Suspense fallback={<div>Loading...</div>}>
              <LazyMovieCredits />
            </Suspense>
          )} />
          <Route path="reviews" element={(
            <Suspense fallback={<div>Loading...</div>}>
              <LazyMovieReviews />
            </Suspense>
          )} />
        </Route>
        <Route path="*" element={(
          <Suspense fallback={<div>Loading...</div>}>
            <LazyHomePage />
          </Suspense>
        )} />
      </Route>
    </Routes>
  );
};

export default App;
