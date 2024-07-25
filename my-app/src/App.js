// src/App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src="/my-app/top.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;