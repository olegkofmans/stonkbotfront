import React, { useState } from "react";

const SearchLabel = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // Reset error state before a new search.
    setError(null);

    fetch(`your-api-endpoint?q=${searchQuery}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // Handle the data as required.
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
        setError(error.message);
      });
  };

  return (
    <div className="SearchLabel">
      <label htmlFor="searchInput">Search:</label>
      <input
        type="text"
        id="searchInput"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SearchLabel;
