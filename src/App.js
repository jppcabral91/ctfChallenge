import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Challenge1 from './components/challenge1/Challenge1';
import Challenge2 from './components/challenge2/Challenge2';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenge1" element={<Challenge1 />} />
          <Route path="/challenge2" element={<Challenge2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
