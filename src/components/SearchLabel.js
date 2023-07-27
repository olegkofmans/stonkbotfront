import React, { useState } from "react";

const SearchLabel = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    setError(null); // Clear any previous errors when user starts typing
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setError("Please enter a stock name.");
      return;
    }

    if (!/^[a-zA-Z]{1,7}$/.test(searchQuery)) {
      setError("Please input a valid stock name with 1 to 7 letters.");
      setShowNotification(false);
      return;
    }

    try {
      const response = await fetch(`${API_ENDPOINT}/rule/run`, {
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
      if (data === true) {
        setNotificationMessage(`The stock name '${searchQuery}' passes all our rules.`);
        setShowNotification(true);
      } else {
        setNotificationMessage(`The stock name '${searchQuery}' does not pass all our rules.`);
        setShowNotification(true);
      }

    } catch (error) {
      setError(error.message);
      setShowNotification(false);
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

      {showNotification && (
  <div style={{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    zIndex: 1000
  }}>
    <p>{notificationMessage}</p>
    <button onClick={() => setShowNotification(false)} style={{
      padding: '10px 15px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }}>
      Close
    </button>
  </div>
)}
    </div>
  );
};

export default SearchLabel;
