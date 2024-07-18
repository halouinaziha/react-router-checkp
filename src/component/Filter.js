import React from 'react';

const Filter = ({ onFilterChange }) => {
  
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        onChange={(event) => onFilterChange('title', event.target.value)}
      />
      <input
        type="number"
        min="0"
        max="10"
        placeholder="Filter by rating"
        onChange={(event) => onFilterChange('rating', event.target.value)}
      />
    </div>
  );
};

export default Filter;