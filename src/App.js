import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import SearchLabel from "./components/SearchLabel";
import Home from "./components/Home";

import "./css/App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/stock-search">Stock Analyzer</Link>
              {/* Add more menu items as needed */}
            </nav>
          </header>
          <div className="container">
            <Header /> {/* Render the Header component here */}
            <Routes>
              <Route path="/stock-search" element={<SearchLabel />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
