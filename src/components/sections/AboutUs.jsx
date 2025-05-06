import React from 'react'
import "../../assets/AboutUs.css"
import "../../assets/responsive/ContentRes.css"
import CompanyMainPhoto from "../../assets/media/2.png"
import { useTranslation } from 'react-i18next'
const AboutUs = () => {
  const {t} = useTranslation();
  return (
    <div id='AboutUs'>
      <div className="container">
        <div id='company' className="info">
          <h2>{t(`quotes`)}</h2>
          <div className="infoLCard">
          <span>{t(`aboutUsSpan`)}</span>
          <p>{t(`aboutUsLeftP`)}</p>
          </div>
        </div>
        <div id='company' className="main_photo">
          <img src={CompanyMainPhoto} alt="RAYPOWER COMPANY'S MAIN PHOTO" loading='lazy'/>
        </div>
        <div id='company' className="desc">
          <p>{t(`aboutUsRightP`)}</p> 
          <a href="tel:998998887766" target='_blank' rel="noopener noreferrer"><button>{t(`aboutUsBtn`)}</button></a>
        </div>
      </div>
    </div>
  )
}

export default AboutUs