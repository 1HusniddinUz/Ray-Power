import React from "react";
import "../../assets/ContactForm.css";
import "../../assets/responsive/FooterRes.css";
import { useTranslation } from "react-i18next";
const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <div id="ContactForm">
      <div className="container">
        <div className="form_left">
          <div className="form_left_top">
            <h2>{t(`contact`)}</h2>
            <span>
              {t(`generalManager`)} {t(`managerName`)}
            </span>
            <span>
              {t(`phone`)}{" "}
              <a
                href="tel:998950036001"
                target="_blank"
                rel="noopener noreferrer"
              >
                +998 95 003 60 01{" "}
              </a>
            </span>
            <span>
              {t(`email`)}
              <a
                href="https://moxitorayeva@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                moxitorayeva@gmail.com
              </a>
            </span>
          </div>
          <div className="form_left_bottom">
            <div className="form_left_bottom_social">
              <a
                href="https://t.me/ray_power_uz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a
                href="https://instagram.com/raypower_uz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/@RAY-POWER-UZ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="form_middle">
          <div className="form_middle_sBox"></div>
        </div>
        <div className="form_right">
          <div className="form_right_top">
            <h2>{t(`location`)}</h2>
          </div>
          <div className="form_right_bottom">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6130.114642563849!2d64.253006!3d39.805706!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ4JzIwLjUiTiA2NMKwMTUnMTAuOCJF!5e0!3m2!1sru!2s!4v1747136757081!5m2!1sru!2s"
              width="100%"
              height="450"
              style={{
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
