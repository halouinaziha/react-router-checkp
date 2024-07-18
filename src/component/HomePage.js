import React, { useState } from 'react';
import '../App.css';
import { movies } from '../data/movies'
import MovieList from './MovieList';
import Filter from './Filter';




const  HomePage = () => { 


const [filteredMovies, setFilteredMovies] = useState(movies);

const handleFilterChange = (field, value) => {
    // Convert the value to lowercase for case-insensitive filtering
    const lowercaseValue = value.toLowerCase();

    // Filter the movies based on the given field and value
    const filtered = movies.filter((movie) => {
      // If the field doesn't exist in the movie object, return false to filter it out
    if (!movie.hasOwnProperty(field)) {
        return false;
    }

      // Get the movie field value and convert it to lowercase for case-insensitive comparison
    const fieldValue = movie[field].toString().toLowerCase();

      // Check if the fieldValue contains the lowercaseValue
      return fieldValue.includes(lowercaseValue);
    });
  
    // Update the filtered movies state
    setFilteredMovies(filtered);
  };

  return (
        <div>
            <h1 className='title'>My Favorite Movies</h1>
            <Filter onFilterChange={handleFilterChange} />
            <MovieList movies={filteredMovies} />
        </div>
  )
}

export default HomePage;