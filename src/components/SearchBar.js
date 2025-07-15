import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;