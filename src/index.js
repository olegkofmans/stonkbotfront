import React from "react";
import ReactDOM from "react-dom";

function Header() {
  return <h1>stonkbot</h1>;
}

function App() {
  return (
    <div>
      <Header />
      <p>hello world</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));