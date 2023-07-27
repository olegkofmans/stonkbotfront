import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Stonkbot</h1>
      </header>
    );
  }
} 

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Stonkbot</h1>
      </div>
    );
  }
} 
ReactDOM.render(<App />, document.getElementById("root"));
