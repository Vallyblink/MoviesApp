import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";
import Layout from "components/Layout";
import HomePage from "pages/HomePage";


 const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
         <Route index element={<HomePage/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/movieId' element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};

export default App
