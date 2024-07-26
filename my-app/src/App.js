import React, { useState, useEffect, useRef } from 'react';
// import PDFviewer from './PDFviewer'; //PDF
import ImageModal from './ImageModal'; // 追加: ImageModalコンポーネントをインポート
import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // 追加: モーダルの状態管理
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMenu(true);
    }, 5000); // 5 seconds

    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach(element => {
        const offset = window.pageYOffset;
        element.style.backgroundPositionY = `${offset * 0.5}px`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
      <section className="content-profile">
        <div id="groom" className="profile parallax">
          <div className="content-box">
            <h2>Groom</h2>
            <p>ここにGroomの内容を記載します。</p>
          </div>
        </div>
        <div id="bride" className="profile parallax">
          <div className="content-box">
            <h2>Bride</h2>
            <p>ここにBrideの内容を記載します。</p>
          </div>
        </div>
      </section>
      <section className="content-program">
        <div id="table-plan" className="program parallax">
          <div className="content-box">
            <h2>Table Plan</h2>
            {/* 追加: 席次表画像を表示し、クリックでモーダルを開く */}
            <img
              src="/sekiji.jpg"
              alt="Table Plan"
              className="table-plan-image"
              onClick={openModal}
              style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
        {/* <PDFviewer /> */}
      </section>
      {/* 追加: モーダルを表示 */}
      {isModalOpen && (
        <ImageModal
          src="/sekiji.jpg"
          alt="Table Plan"
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default App;
