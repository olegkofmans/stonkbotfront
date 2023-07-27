import React, { useState } from "react";

const SearchLabel = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // You can make your API request here using the searchQuery state
    // For example, using the Fetch API or Axios library.
    // Replace 'your-api-endpoint' with the actual endpoint of your API.
    fetch(`your-api-endpoint?q=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        // Process the API response data here
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
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
    </div>
  );
};

export default SearchLabel;
