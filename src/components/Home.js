import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/stock-search">Stock Analyzer</a>
            {/* Add more menu items as needed */}
          </nav>
        </header>
        <div className="container">
          <div className="logo">
            <img src="./public/stockbot.png" alt="Stonkbot Logo" />
          </div>
          <h2>Welcome to the Home Page</h2>
          {/* Add your content for the Home page here */}
        </div>
      </div>
    );
  }
}

export default Home;
