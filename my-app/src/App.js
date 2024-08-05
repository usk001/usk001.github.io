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

  const closeMenu = () => {
    setMenuOpen(false);
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
          <>
          <nav className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
            <button className={`hamburger-button ${menuOpen ? 'white' : ''}`} onClick={toggleMenu}>
              {menuOpen ? '✕' : '☰'}
            </button>
          </nav>
          <div className={`menu-items ${menuOpen ? 'show' : ''}`}>
            <a href="#groom" onClick={closeMenu}>Groom</a>
            <a href="#bride" onClick={closeMenu}>Bride</a>
            <a href="#table-plan" onClick={closeMenu}>Table Plan</a>
            <a href="#program" onClick={closeMenu}>Program</a>
          </div>
        </>
        )}
      </section>
      <section className="content-profile">
        <div id="groom" className="profile parallax">
          <div className="content-box parallax">
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
              src="/TablePlan.jpg"
              alt="Table Plan"
              className="table-plan-image"
              onClick={openModal}
              style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
            />
            <p>スマホは横向きの方が見やすいかも...</p>
          </div>
        </div>
        {/* <PDFviewer /> */}
      </section>
      {/* 追加: モーダルを表示 */}
      {isModalOpen && (
        <ImageModal
          src="/TablePlan.jpg"
          alt="Table Plan"
          onClose={closeModal}
        />
      )}
      {/* 追加: 当日のプログラムのセクション */}
      <section className="content-program">
        <div id="program" className="program parallax">
          <div className="content-box">
            <h2>Program</h2>
            <div className="program-schedule">
              <div className="program-item">
                <div className="program-time">16:30</div>
                <div className="program-event">挙式（人前式）</div>
              </div>
              <div className="program-item">
                <div className="program-time">16:55</div>
                <div className="program-event">集合写真撮影@ガーデン</div>
              </div>
              <div className="program-item">
                <div className="program-time">17:05</div>
                <div className="program-event">披露宴</div>
                <div className="program-info">下記テーブル番号順で新郎新婦もお食事予定</div>
                <div className="program-info">新郎: 4→1→5→6→10→7→3</div>
                <div className="program-info">新婦: 4→1→5→2→9→8</div>
              </div>
              <div className="program-item">
                <div className="program-time">20:00</div>
                <div className="program-event">お披楽喜</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 追加: フッター */}
      <footer className="footer">
        <div className="footer-content">
          {/* <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=wzd0101r" className="line-button">
            <img src="/btn_base.png" alt="友達登録" />
          </a> */}
          <p>©︎2024 Yusuke K. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
