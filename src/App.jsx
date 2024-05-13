import React, {useState} from "react";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import './App.css';
import './util/index.js'

import {STORE} from "./assets/STORE.js";


// export default function App() {
//   const [movies, setMovies] = useState(STORE);

//   const addReview = (movieID, review) => {

//     const newMovies = [...movies];
//     const index = newMovies.findIndex(movie => movie.id === movieID)
//     newMovies[index].reviews.push(review);
//     setMovies(newMovies);

//   }

//   return (
//     <div className="container">
//           <Header />
//           <MovieList movies = {movies} addReview = {addReview} />
//     </div>
//   );
// }

export default function App() {
  const [movies, setMovies] = useState(STORE);

  const addReview = (movieID, review) => {
    const newMovies = movies.map(movie => {
      if (movie.id === movieID) {
        const lastReview = movie.reviews[movie.reviews.length - 1];
        const newReviewId = lastReview ? lastReview.id + 1 : 1; // Increment the last review ID or start from 1 if no reviews exist
        return {
          ...movie,
          reviews: [
            ...movie.reviews,
            { id: newReviewId, ...review }
          ]
        };
      }
      return movie;
    });
    setMovies(newMovies);
  };

  return (
    <div className="container">
      <Header />
      <MovieList movies={movies} addReview={addReview} />
    </div>
  );
}