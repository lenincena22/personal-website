// About.js
import React from "react";
import aboutImage from "../../assets/about-me.jpg";
import cv from "../../assets/files/Lenin Speel Perk M.pdf";
import "./about.css";

const About = () => {
  return (
    <div className="about-content" id="about">
      <div className="about-content-top">
        <div className="about-content-img">
          <img src={aboutImage} alt="About Me" width="500" />
        </div>
        <div className="about-content-container">
          <p className="about-content-container-title">ABOUT ME</p>
          <p className="about-content-container-designation">
            I am a Program Analyst
          </p>
          <p className="about-content-container-p">
            I am passionate about leveraging my skills and expertise to
            contribute meaningfully to the success of programs and projects. If
            you are seeking a dedicated and analytical Program Analyst committed
            to driving positive outcomes, I would love to connect and discuss
            how I can support your organization's goals.
          </p>
          <a
            href={cv}
            download="Lenin Speel Perk M"
            target="_blank"
            rel="noreferrer"
          >
            <button className="about-content-container-btn-cv">
              DOWNLOAD CV
            </button>
          </a>
          <a href="#portfolio">
            <button className="about-content-container-btn-portfolio">
              VIEW PORTFOLIO
            </button>
          </a>
        </div>
      </div>
      <div className="about-content-bottom">
        <div className="about-content-bottom-left">
          <SkillBar title="HTML5 & CSS3" percentage={100} />
          <SkillBar title="Javascript" percentage={80} />
          <SkillBar title="React JS" percentage={70} />
        </div>
        <div className="about-content-bottom-right">
          <SkillBar title="Java" percentage={60} />
          <SkillBar title="Spring Boot" percentage={75} />
          <SkillBar title="Bootstrap" percentage={90} />
        </div>
      </div>
    </div>
  );
};

const SkillBar = ({ title, percentage }) => {
  return (
    <div className="about-content-bottom-course">
      <div className="about-content-bottom-course-title">
        <p>{title}</p>
        <p className="about-content-bottom-course-mark">{percentage}%</p>
      </div>
      <div className="progress">
        <div className="progress-value" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};

export default About;
