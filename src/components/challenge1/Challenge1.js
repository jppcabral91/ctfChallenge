import React, { useState } from 'react';
import './Challenge1.css';
import imageJuliusCesar from '../../images/juliusCesar.jpg';
import { Link } from "react-router-dom";

const Challenge1 = () => {
  const [flag, setFlag] = useState('');
  const [message, setMessage] = useState('');
  const [showTipOne, setShowTipOne] = useState(false);
  const [showTipTwo, setShowTipTwo] = useState(false);

  const correctFlag = process.env.REACT_APP_SECRET_FLAG;

  const checkFlag = () => {
    if (flag === correctFlag) {
      setMessage('Heil Caesar!');
    } else {
      setMessage('That is not the message nor the flag!');
    }
  };

  return (
    <>
    <div>
    <button><Link to="/">Go back to the HomePage</Link></button>
    </div>
    <div className="challenge-container">
      <div className="content">
        <h2>Challenge 1: Find the Hidden Flag with the help of one of Rome's greatest</h2>
        <p>Decode the hidden flag and enter it below, for the glory of Rome!</p>
        <input 
          type="text" 
          value={flag} 
          onChange={(e) => setFlag(e.target.value)} 
          placeholder="Enter flag"
        />
        <button onClick={checkFlag}>Submit</button>
        <p>{message}</p>
        <button onClick={() => setShowTipOne(!showTipOne)}>Show first Tip</button>
        {showTipOne && <p>Tip: Think of a classic cipher technique used by Julius Caesar.</p>}
        <button onClick={() => setShowTipTwo(!showTipTwo)}>Show second Tip</button>
        {showTipTwo && <p>Tip: Everybody knows that the hardest part of working with CSS is the naming part.</p>}
      </div>
      <div className="image-container">
        <img src={imageJuliusCesar} alt="Julius Caesar" />
      </div>
    </div>
    </>
  );
};

export default Challenge1;
