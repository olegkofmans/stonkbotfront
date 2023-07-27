import React, { useState } from "react";

const SearchLabel = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [allRulesPassed, setAllRulesPassed] = useState(false);
  const [stockName, setStockName] = useState(""); // New state variable to store the valid stock name

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    setAllRulesPassed(false);
  };

  const handleSearch = async () => {
    // Check if the search query matches the expected format for a stock name
    if (!/^[a-zA-Z]{1,7}$/.test(searchQuery)) {
      setError("Please input a valid stock name with 1 to 7 letters.");
      setAllRulesPassed(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/rule/run", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symbol: searchQuery })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // Handle the data as required
      console.log(data);

      if (data === "true") {
        setAllRulesPassed(true);
        setStockName(searchQuery); // Set the valid stock name
      } else {
        setAllRulesPassed(false);
        setStockName(""); // Reset the stock name if rules didn't pass
      }

    } catch (error) {
      setError(error.message);
      setAllRulesPassed(false);
      setStockName(""); // Reset the stock name if there's an error
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
      {allRulesPassed && <p>{`This '${stockName}' passes all our rules.`}</p>}
    </div>
  );
};

export default SearchLabel;
