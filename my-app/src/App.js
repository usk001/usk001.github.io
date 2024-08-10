import React, { useState, useEffect, useRef } from 'react';
// import PDFviewer from './PDFviewer'; //PDF
import ImageModal from './ImageModal';
import VideoComponent from './VideoComponent';
import ProfileSection from './ProfileSection';
import TickerLoop from './TickerLoop'; 
import BackgroundAnimation from './BackgroundAnimation';
import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalImage, setModalImage] = useState({ src: '', alt: '' });
  const h2Refs = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMenu(true);
    }, 5000);

    const currentRefs = h2Refs.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
        }
      });
    });

    currentRefs.forEach((h2Element) => {
      if (h2Element) {
        observer.observe(h2Element);
      }
    });

    return () => {
      clearTimeout(timer);
      currentRefs.forEach((h2Element) => {
        if (h2Element) {
          observer.unobserve(h2Element);
        }
      });
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openModal = (src, alt) => {
    setModalImage({ src, alt });
  };

  const closeModal = () => {
    setModalImage({ src: '', alt: '' });
  };

  return (
    <div className="App">
      <BackgroundAnimation />
      <header className="header">
        <img src="/logo.png" alt="Logo" className="header-logo" /> {/* ロゴを追加 */}
        <nav className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
          <button className={`hamburger-button ${menuOpen ? 'white' : ''}`} onClick={toggleMenu}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </nav>
        {showMenu && (
          <div className={`menu-items ${menuOpen ? 'show' : ''}`}>
            <a href="#groom" onClick={closeMenu}>Groom</a>
            <a href="#bride" onClick={closeMenu}>Bride</a>
            <a href="#table-plan" onClick={closeMenu}>Table Plan</a>
            <a href="#program" onClick={closeMenu}>Program</a>
            <a href="#message" onClick={closeMenu}>Message</a>
          </div>
        )}
      </header>
      <section className="video-section">
        <VideoComponent src="/top.mp4" className="background-video" />
      </section>
      <div className="scroll">
        <span className="txt">What is Lotus ?</span>
      </div>
      <div className=""></div>
      <section className="content, program">
          <div className="content-box">
            <p>古代エジプトではロータス（睡蓮）は愛や感謝、友情の象徴として描かれていました。エジプトの歴代王朝の中でも「王の中の王」と称えられたラムセス2世が、愛する王妃ネフェルタリのために建造したアブ・シンベル神殿やルクソールにある王家の谷の壁画にも多く描かれています。</p>
            <p>（新郎もそれにあやかり、エジプト旅行中にロータスのピアスを贈りプロポーズしました。）</p>
            <p>　</p>
            <p>今日はご出席いただきありがとうございます！</p>
            <p>これからいよいよもうすぐ披露宴が始まります。</p>
            <p>どうぞ楽しいひとときをお過ごしください。</p>
          </div>
      </section>
      <TickerLoop /> 
      <ProfileSection
        id="groom"
        name="勝村 祐介"
        birthdate="1989年3月29日"
        job="エンジニア"
        hometown="静岡県伊豆の国市"
        hobbies="旅行・アウトドア"
        videoSrc="/Yusuke_1.mp4"
        instagramUrl="#"
        xUrl="#"
      />
      <ProfileSection
        id="bride"
        name="松崎 里子"
        birthdate="1987年7月5日"
        job="会社員"
        hometown="千葉県千葉市"
        hobbies="旅行・アウトドア"
        videoSrc="/Satoko_1.mp4"
        instagramUrl="#"
        xUrl="#"
      />
      <section className="content">
        <div id="table-plan" className="program">
          <div className="content-box">
            <h2 ref={(el) => (h2Refs.current[0] = el)}>Table Plan</h2>
            <p>　</p>
            <img
              src="/TablePlan.jpg"
              alt="Table Plan"
              className="image-cursor"
              // onClick={() => openModal('/TablePlan.jpg', 'Table Plan')}
              style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
            />
            <p className='hosoku'>スマホを横にして見ていただけると...</p>
            <a href="/TablePlan.jpg" download="TablePlan.jpg" className="download-button">席次表画像ダウンロード</a>
          </div>
        </div>
        {/* <PDFviewer /> */}
      </section>
      <section className="content">
        <div id="program" className="program">
          <div className="content-box">
            <h2 ref={(el) => (h2Refs.current[1] = el)}>Program</h2>
            <p>　</p>
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
                <div className="program-info">新婦: 4→1→5→9→8→2</div>
              </div>
              <div className="program-item">
                <div className="program-time">20:00</div>
                <div className="program-event">お披楽喜</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
      <div id="message" className="content-message">
        <div className="content-box">
          <h2 ref={(el) => (h2Refs.current[2] = el)}>Message to Groom</h2>
          <p>　</p>
          <img
            src="/MessageToGroom1.jpg"
            alt="Message To Groom"
            className="image-cursor"
            // onClick={() => openModal('/MessageToGroom1.jpg', 'Message To Groom')}
            // style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
          />
          <img
            src="/MessageToGroom2.jpg"
            alt="Message To Groom"
            className="image-cursor"
            // onClick={() => openModal('/MessageToGroom2.jpg', 'Message To Groom')}
            // style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <div className="content-box">
          <h2 ref={(el) => (h2Refs.current[3] = el)}>Message to Bride</h2>
          <p>　</p>
          <img
            src="/MessageToBride1.jpg"
            alt="Message To Bride"
            className="image-cursor"
            // onClick={() => openModal('/MessageToBride1.jpg', 'Message To Bride')}
            // style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
          />
          <img
            src="/MessageToBride2.jpg"
            alt="Message To Bride"
            className="image-cursor"
            // onClick={() => openModal('/MessageToBride2.jpg', 'Message To Bride')}
            // style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>
      </section>
      {modalImage.src && (
        <ImageModal
          src={modalImage.src}
          alt={modalImage.alt}
          onClose={closeModal}
        />
      )}
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