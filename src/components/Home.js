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
        <h2>Welcome to StonkBot</h2>
        <p>
        Dive into the world of stock analysis with <strong>StonkBot</strong>, your trusted companion in the financial realm. Whether you're a seasoned trader or just starting out, our platform offers real-time insights, advanced algorithms, and a user-friendly interface to help you make informed decisions.          {/* ... rest of the content */}
        </p>
        <p>
        Explore, analyze, and stay ahead of the market trends. Join our community of traders and let's embark on this financial journey together.
      </p>
      </div>
    </div>
  );
};

export default Home;
