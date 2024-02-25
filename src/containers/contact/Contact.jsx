import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import phone from "../../assets/icons/icons8-call-25.png";
import mail from "../../assets/icons/icons8-mail-25.png";
import location from "../../assets/icons/icons8-location-25.png";
import "./contact.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contactRef.current) {
        const topPos = contactRef.current.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        setIsVisible(topPos < screenHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initial check
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jmym124",
        "template_7xz5lir",
        e.target,
        "j_4GVRlJPwEID7GWL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      className={`contact-content ${isVisible ? "visible" : ""}`}
      id="contact"
      ref={contactRef}
    >
      <p className="contact-content_title">CONTACT ME</p>
      <p className="contact-content_heading">Get In Touch</p>
      <div className="contact-content_container">
        <div
          className={`contact-content_container-left ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className="contact-content_container-left-number">
            <div className="contact-content_container-left-number-icon">
              <img src={phone} alt="" />
            </div>
            <div className="contact-content_container-left-number-details">
              <p>+91 8248039530</p>
              {/* <p>+91 8870754976</p> */}
            </div>
          </div>
          <div className="contact-content_container-left-mail">
            <div className="contact-content_container-left-mail-icon">
              <img src={mail} alt="" />
            </div>
            <div className="contact-content_container-left-mail-details">
              <p>leninspeelperk@gmail.com</p>
              <p>leninspeelperk2001@gmail.com</p>
            </div>
          </div>
          <div className="contact-content_container-left-location">
            <div className="contact-content_container-left-location-icon">
              <img src={location} alt="" />
            </div>
            <div className="contact-content_container-left-location-details">
              <p>
                No.07, Star Village, Athipalayam, Ranganathar Clg Opp,
                Coimbatore - 110.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`contact-content_container-right ${
            isVisible ? "visible" : ""
          }`}
        >
          <form action="" onSubmit={sendEmail}>
            <fieldset className="fieldset1">
              <legend className="name">Your Name*</legend>
              <input type="text" name="name" />
            </fieldset>
            <fieldset className="fieldset2">
              <legend className="mail">Your Mail*</legend>
              <input type="text" name="email" />
            </fieldset>
            <fieldset className="fieldset3">
              <legend className="subject">Your Subject*</legend>
              <input type="text" name="subject" />
            </fieldset>
            <fieldset className="fieldset4">
              <legend className="message">Your Message*</legend>
              <textarea name="message" id="" cols="30" rows="6"></textarea>
            </fieldset>
            <input type="submit" value="SUBMIT" className="submit-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
