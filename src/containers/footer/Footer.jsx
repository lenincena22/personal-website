import React from "react";
import linkedin from "../../assets/icons/icons8-linkedin-24.png";
import instagram from "../../assets/icons/icons8-instagram-24.png";
import twitter from "../../assets/icons/icons8-twitter-24.png";
import youtube from "../../assets/icons/icons8-youtube-24.png";
import github from "../../assets/icons/icons8-github-24.png";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-content">
      <div className="footer-content-left">
        <p className="footer-content-left-logo">Lenin Speel Perk</p>
        <p className="footer-content-left-copyright">
          © 2022 Lenin Speel Perk. All rights reserved. Designed by Lenin Speel
          Perk.
        </p>
      </div>
      <div className="footer-content-right">
        <div className="footer-content-right-icon">
          <div className="footer-content-right-icon-facebook">
            <a href="https://www.linkedin.com/in/lenin-speel-perk-m-887803174">
              <img src={linkedin} alt="" />
            </a>
          </div>
          <div className="footer-content-right-icon-github">
            <a href="https://github.com/LeninSpeelPerk">
              <img src={github} alt="" />
            </a>
          </div>
          <div className="footer-content-right-icon-twitter">
            <a href="https://twitter.com/PerkSpeel">
              <img src={twitter} alt="" />
            </a>
          </div>
          <div className="footer-content-right-icon-instagram">
            <a href="https://www.instagram.com/lenin_masss/">
              <img src={instagram} alt="" />
            </a>
          </div>
          <div className="footer-content-right-icon-youtube">
            <a href="https://www.youtube.com/channel/UChI9vij1d2ZRQHVa0RUePXw">
              <img src={youtube} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
