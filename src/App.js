import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import SearchLabel from "./components/SearchLabel";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./css/App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />
        <div className="container">
          <Routes>
            <Route path="/stock-search" element={<SearchLabel />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
