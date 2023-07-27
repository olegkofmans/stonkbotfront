import React from "react";
import Header from "./Header";
import SearchLabel from "./components/SearchLabel"; // Fix the import path for SearchLabel
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Stonkbot</h1>
        <SearchLabel /> {/* Use the SearchLabel component here */}
      </div>
    );
  }
}

export default App;
