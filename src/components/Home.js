import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
class Home extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/stock-search">Stock Analyzer</Link>
            {/* Add more menu items as needed */}
          </nav>
        </header>
        <div className="container">
          <div className="logo">
            {/* Replace this with your logo image */}
            <img src="./logo.png" alt="Stonkbot Logo" />
          </div>
          <h2>Welcome to the Home Page</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis dui eu orci placerat, ut lacinia tortor fermentum.
            Praesent sit amet fermentum arcu, eget convallis metus. Vestibulum
            varius nec justo nec ultrices. Proin venenatis nunc nec ex
            aliquam, ac fermentum metus finibus. Proin tristique enim vel
            velit laoreet consequat. Donec faucibus, arcu id viverra mattis,
            odio velit pellentesque tortor, vel volutpat velit nisi et ex.
            Suspendisse eget ultrices sapien. Nam ac lacus euismod, venenatis
            elit a, dictum purus. Etiam non elit sit amet nisi egestas
            posuere.
          </p>
          {/* Add your content for the Home page here */}
        </div>
      </div>
    );
  }
}

export default Home;
