import React from 'react'
import "../../assets/Features.css"
import { useTranslation } from 'react-i18next'
const Features = () => {
  const {t} = useTranslation();
  return (
    <div id='Features'>
      <div className="container">
        <div className="Features_info">
          <h3>{t(`featuresH3`)}</h3>
          <p>{t(`featuresP`)}</p>
        </div>
      </div>
    </div>
  )
}

export default Features