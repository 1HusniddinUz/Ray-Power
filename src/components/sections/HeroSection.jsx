import React, { useState, useEffect } from "react";
import "../../assets/HeroSection.css";
import videoBg from "../../assets/media/3db73050c0c9be4efe1065709861ee576e7b8eb6.mp4";
import img1 from "../../assets/media/1.png";
import img2 from "../../assets/media/2.png";
import img3 from "../../assets/media/3.png";
import { useTranslation } from "react-i18next";

const cardData = [
  {
    title: "Solar Customers",
    desc: "Discover how solar energy can transform your home .",
    bg: img1,
    span: `Find us`,
  },
  {
    title: "Solar Professionals",
    desc: "Join our network of certified solar installers and technicians.",
    bg: img2,
    span: `Find us`,
  },
  {
    title: "Solar Panels",
    desc: "Explore our high-efficiency solar panel solutions for any need.",
    bg: img3,
    span: `Find us`,
  },
];

const HeroSection = () => {
  const { t } = useTranslation();
  const [hoverBg, setHoverBg] = useState(null);
  const [hideVideo, setHideVideo] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set loaded to true after component mounts to trigger animations
    setLoaded(true);
  }, []);

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
      
      <div className={`slogan ${loaded ? "animate" : ""}`}>
        <h1>
          <span>{t(`quotes`)}</span>
        </h1>
      </div>
      
      <div className={`overlay ${overlayVisible ? "visible" : ""}`}></div>

      <div
        className={`hover-background ${hoverBg ? "show" : ""}`}
        style={{
          backgroundImage: hoverBg ? `url(${hoverBg})` : "none",
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
            <div className="card-content">
              <img src={card.bg} alt={card.title} loading="lazy"/>
              <h2>{card.title}</h2>
              <p>{card.desc}</p>
              <span>{card.span}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;