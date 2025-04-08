import React, { useState } from 'react';
import '../../assets/HeroSection.css';
import videoBg from '../../assets/media/3db73050c0c9be4efe1065709861ee576e7b8eb6.mp4';
import img1 from '../../assets/media/1.png';
import img2 from '../../assets/media/2.png';
import img3 from '../../assets/media/3.png';

const cardData = [
  {
    title: 'Solar Customers',
    desc: 'Find solar pros near you.',
    bg: img1,
  },
  {
    title: 'Solar Professionals',
    desc: 'Use OpenSolar software.',
    bg: img2,
  },
  {
    title: 'Solar Partners',
    desc: 'Partner with OpenSolar.',
    bg: img3,
  },
];

const HeroSection = () => {
  const [hoverBg, setHoverBg] = useState(null);
  const [hideVideo, setHideVideo] = useState(false); 
  const [overlayVisible, setOverlayVisible] = useState(false);

  return (
    <section className="hero-section">
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
        src={videoBg}
        style={{ opacity: hideVideo ? 0 : 1 }}
      />
      
      <div
        className={`overlay ${overlayVisible ? 'visible' : ''}`}
      ></div>

      <div
        className={`hover-background ${hoverBg ? 'show' : ''}`}
        style={{
          backgroundImage: hoverBg ? `url(${hoverBg})` : 'none',
        }}
      />

      <div className="cards">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="card"
            onMouseEnter={() => {
              setHoverBg(card.bg);
              setHideVideo(true);
              setOverlayVisible(true);
            }}
            onMouseLeave={() => {
              setHoverBg(null);
              setHideVideo(false);
              setOverlayVisible(false);
            }}
          >
            <h2>{card.title}</h2>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
