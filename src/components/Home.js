import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to my CTF Challenge</h1>
      <p>Ready to test your skills?</p>
      <Link to="/challenge1">
        <button>Go to Challenge 1</button>
      </Link>
      <Link to="/challenge2">
        <button>Go to Challenge 2 "It's a bit more dificult"</button>
      </Link>
    </div>
  );
};

export default Home;
