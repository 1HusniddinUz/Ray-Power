import React from "react";
import "../../assets/ContactForm.css"
const ContactForm = () => {
  return (
    <div id="ContactForm">
      <div className="container">
        <div className="form_left">
          <div className="form_left_top">
            <h2>Contact Us</h2>
          </div>
          <div className="form_left_bottom">
            <span>General Manager : Palonchayev Paloncha</span>
            <span>
              Phone : <a href="tel:+998998887766">+998(99)888-77-66 </a>
            </span>
            <span>
              Email :{" "}
              <a href="PalonchayevPaloncha@mail.ru">
                PalonchayevPaloncha@mail.ru
              </a>
            </span>
          </div>
        </div>
        <div className="form_middle">
          <div className="form_middle_sBox">

          </div>
        </div>
        <div className="form_right">
          <div className="form_right_top">
            <h2>Location</h2>
          </div>
          <div className="form_right_bottom">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=39.751372,64.453918&hl=es&z=16&output=embed"
              width="100%"
              height="450"
              style={{
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
              }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
