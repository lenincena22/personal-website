import React from "react";
import about_img from "../../assets/about-me.jpg";
import cv from "../../assets/files/Lenin Speel Perk M.pdf";

import "./about.css";

const About = () => {
  return (
    <div className="about-content" id="about">
      <div className="about-content_top">
        <div className="about-content_img">
          <img src={about_img} alt="" width="500" />
        </div>
        <div className="about-content_container">
          <p className="about-content_container-title">ABOUT ME</p>
          <p className="about-content_container-designation">
            {/* I am creative UI/UX designer */}I am a Program Analyst
          </p>
          {/* <p className="about-content_container-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod magna aliqua.
          </p> */}
          <p className="about-content_container-p">
            {/* Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute ir voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. */}
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
            <button className="about-content_container-btn-cv">
              DOWNLOAD CV
            </button>
          </a>
          <a href="#portfolio">
            <button className="about-content_container-btn-portfolio">
              VIEW PORTFOLIO
            </button>
          </a>
        </div>
      </div>
      <div className="about-content_bottom">
        <div className="about-content_bottom-left">
          <div className="about-content_bottom-course">
            <div className="about-content_bottom-course-title">
              <p>HTML5 & CSS3</p>
              <p className="about-content_bottom-course-mark_1">100%</p>
            </div>
            <div class="progress">
              <div class="progress-value_1"></div>
            </div>
          </div>
          <div className="about-content_bottom-course">
            <div className="about-content_bottom-course-title">
              <p>Javascript</p>
              <p className="about-content_bottom-course-mark_2">80%</p>
            </div>
            <div class="progress">
              <div class="progress-value_2"></div>
            </div>
          </div>
          <div className="about-content_bottom-course">
            <div className="about-content_bottom-course-title">
              <p>React JS</p>
              <p className="about-content_bottom-course-mark_3">70%</p>
            </div>
            <div class="progress">
              <div class="progress-value_3"></div>
            </div>
          </div>
        </div>
        <div className="about-content_bottom-right">
          <div className="about-content_bottom-course">
            <div className="about-content_bottom-course-title">
              <p>Java</p>
              <p className="about-content_bottom-course-mark_4">60%</p>
            </div>
            <div class="progress">
              <div class="progress-value_4"></div>
            </div>
          </div>
          <div className="about-content_bottom-course">
            <div className="about-content_bottom-course-title">
              <p>Spring Boot</p>
              <p className="about-content_bottom-course-mark_5">75%</p>
            </div>
            <div class="progress">
              <div class="progress-value_5"></div>
            </div>
          </div>
          <div className="about-content_bottom-course">
            <div className="about-content_bottom-course-title">
              <p>Bootstrap</p>
              <p className="about-content_bottom-course-mark_6">90%</p>
            </div>
            <div class="progress">
              <div class="progress-value_6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
