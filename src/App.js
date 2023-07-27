import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import SearchLabel from "./components/SearchLabel";
import Home from "./components/Home";
import About from "./components/About";  
import Footer from "./components/Footer";
import Rights from "./components/Rights";
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
            <Route path="/about" element={<About />} />  
          </Routes>
        </div>
        <Footer />
        <Rights />
      </div>
    </Router>
  );
};

export default App;
