import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchEngine() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function search() {
      try {
        const response = await axios.get(`/search?term=${searchTerm}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    if (searchTerm.trim() !== "") {
      search();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    search();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>

      {searchResults.map((result) => (
        <div key={result.id}>
          <h2>{result.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default SearchEngine;
