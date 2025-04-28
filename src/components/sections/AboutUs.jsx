import React from 'react'
import "../../assets/AboutUs.css"
import CompanyMainPhoto from "../../assets/media/2.png"
const AboutUs = () => {
  return (
    <div id='AboutUs'>
      <div className="container">
        <div id='company' className="info">
          <h2>Yorug' kelajak sari <span color='#ffaa00'>birga</span></h2>
          <div className="infoLCard">
          <span>Bizning farqimiz sifatli xizmatdir.</span>
          <p>FEM ishlab chiqarishdan stantsiyaga texnik xizmat ko'rsatishgacha.</p>
          </div>
        </div>
        <div id='company' className="main_photo">
          <img src={CompanyMainPhoto} alt="RAYPOWER COMPANY'S MAIN PHOTO" loading='lazy'/>
        </div>
        <div id='company' className="desc">
          <p>Biz har doim mijozlarimiz bilan halolmiz va o'nlab <br /> yillar davomida muammosiz ishlaydigan ishonchli, <br /> optimal yechimlarni taqdim etamiz.</p>
          <a href="tel:998998887766" target='_blank' rel="noopener noreferrer"><button>Kompaniya haqida batafsil</button></a>
        </div>
      </div>
    </div>
  )
}

export default AboutUs