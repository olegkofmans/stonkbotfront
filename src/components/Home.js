import React from "react";
import "../css/Home.css";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="logo">
          {/* Replace this with your logo image */}
          <img src="./logo.png" alt="Stonkbot Logo" />
        </div>
        <h2>Welcome to the Home Page</h2>
        <p>
          Lorem ipsum...
          {/* ... rest of the content */}
        </p>
      </div>
    </div>
  );
};

export default Home;
