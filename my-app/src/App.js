import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMenu(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <section className="video-section">
        <video
          ref={videoRef}
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/top.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {showMenu && (
          <nav className="hamburger-menu">
            <button className="hamburger-button" onClick={toggleMenu}>☰</button>
            {menuOpen && (
              <div className="menu-items">
                <a href="#groom">Groom</a>
                <a href="#bride">Bride</a>
                <a href="#table-plan">Table Plan</a>
              </div>
            )}
          </nav>
        )}
      </section>
      <section className="content">
        <div id="groom" className="profile">
          <h2>Groom</h2>
          <p>ここにGroomの内容を記載します。</p>
        </div>
        <div id="bride" className="profile">
          <h2>Bride</h2>
          <p>ここにBrideの内容を記載します。</p>
        </div>
        <div id="table-plan" className="program">
          <h2>Table Plan</h2>
          <p>ここにTable Planの内容を記載します。</p>
        </div>
      </section>
    </div>
  );
}

export default App;
