import React, { useState } from "react";

const SearchLabel = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [error,] = useState(null);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {
    // Check if the search query matches the expected format for a stock name
    if (!/^[a-zA-Z]+$/.test(searchQuery)) {
      alert("Please input a valid stock name with 6 or more letters.");
      return;
    }
  
    try {
      const response = await fetch(`your-api-endpoint?q=${searchQuery}`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      // Handle the data as required
      console.log(data);
  
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
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
