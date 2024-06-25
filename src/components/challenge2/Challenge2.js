import React, { useState, useEffect } from 'react';
import './Challenge2.css';
import normalImage from './../../images/normalPic.jpeg';
import { Link } from "react-router-dom";

const Challenge2 = () => {
  const [showTipOne, setShowTipOne] = useState(false);
  const [showTipTwo, setShowTipTwo] = useState(false);

  useEffect(() => {
    // Set the secret key as a cookie
    document.cookie = "secretKey=yourpassword; path=/";
  }, []);

  return (
    <>
    <div>
    <button><Link to="/">Go back to the HomePage</Link></button>
    </div>
    <div className="challenge-container">
      <h2>Steganography Challenge</h2>
      <p>This is a normal picture of me, enjoying a nice burger with the company of a friendly pigeon.</p>
      <div className="image-container">
        <img src={normalImage} alt="Hidden" />
      </div>
      <a href={normalImage} download="normalPic.jpg">Download The Image Here!</a>
      <div className="tips-container">
        <div className="tip-button">
          <button onClick={() => setShowTipOne(!showTipOne)}>Show Tip 1</button>
          {showTipOne && <p className="tip">Tip 1: I hope you have space in your computer, that picture looks big.</p>}
        </div>
        <div className="tip-button">
          <button onClick={() => setShowTipTwo(!showTipTwo)}>Show Tip 2</button>
          {showTipTwo && <p className="tip">Tip 2: To find a supposed password, you should take a break and eat something, like a sandwich, cookie, or burger and then come back.</p>}
        </div>
      </div>
    </div>
    </>
  );
};

export default Challenge2;
