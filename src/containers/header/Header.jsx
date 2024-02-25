import React, { useState, useEffect } from "react";
import headerImg from "../../assets/header.png";
import linkedinIcon from "../../assets/icons/icons8-linkedin-24.png";
import instagramIcon from "../../assets/icons/icons8-instagram-24.png";
import twitterIcon from "../../assets/icons/icons8-twitter-24.png";
import youtubeIcon from "../../assets/icons/icons8-youtube-24.png";
import githubIcon from "../../assets/icons/icons8-github-24.png";

import "./header.css";

const Header = () => {
  const [loaded, setLoaded] = useState(false);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerImg = document.querySelector(".header-content_img img");
      const headerContent = document.querySelector(".header-content");
      const headerContentTop = headerContent.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const triggerHeight = windowHeight * 0.8; // Adjust trigger height

      if (headerContentTop < windowHeight - triggerHeight && !isSliding) {
        headerImg.classList.add("slide-in");
        setIsSliding(true);
      } else if (
        headerContentTop >= windowHeight - triggerHeight &&
        isSliding
      ) {
        headerImg.classList.remove("slide-in");
        setIsSliding(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSliding]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <header>
      <div
        className={`header-content ${loaded ? "loaded" : ""} ${
          isSliding ? "sliding" : ""
        }`}
        id="home"
      >
        <div className="header-content_container">
          <div className="header-content_container-flex">
            <p className="header-content_container-greet">Hello, I am</p>
            <h1 className="header-content_container-title">Lenin Speel Perk</h1>
            <p className="header-content_container-designation">
              Creative Web Designer & Full-Stack Developer
            </p>
            <a href="#contact">
              <button className="header-content_container-btn">HIRE ME</button>
            </a>
          </div>
          <div className="header-content_container-flex">
            <div className="header-content_container-follow">Follow On</div>
            <div className="header-content_container-icon">
              <SocialIcon
                link="https://www.linkedin.com/in/lenin-speel-perk-m-887803174"
                icon={linkedinIcon}
              />
              <SocialIcon
                link="https://github.com/LeninSpeelPerk"
                icon={githubIcon}
              />
              <SocialIcon
                link="https://www.instagram.com/lenin_masss/"
                icon={instagramIcon}
              />
              <SocialIcon
                link="https://twitter.com/PerkSpeel"
                icon={twitterIcon}
              />
              <SocialIcon
                link="https://www.youtube.com/channel/UChI9vij1d2ZRQHVa0RUePXw"
                icon={youtubeIcon}
              />
            </div>
          </div>
        </div>
        <div className="header-content_img">
          <img src={headerImg} alt="Header" width="550px" />
        </div>
      </div>
    </header>
  );
};

// Reusable component for social media icon
const SocialIcon = ({ link, icon }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <img src={icon} alt="" />
  </a>
);

export default Header;
