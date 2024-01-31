import React from "react";
import design1 from "../../assets/attachment.jpg";
import design2 from "../../assets/portfolio-design-2.jpg";
import design3 from "../../assets/original-665b62093f6c9f26ccda23e74dd97456.png";
import design4 from "../../assets/smart_farming_web_app-dribbble_4x.png";

import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-content" id="portfolio">
      <p className="portfolio-content_title">MY WORKS</p>
      <p className="portfolio-content_heading">Latest Portfolio</p>
      <div className="portfolio-content_container">
        <div className="portfolio-content_container-box">
          <div className="portfolio-content_container-box-up">
            <a href="https://github.com/LeninSpeelPerk/Real-Estate-Management-System">
              <img src={design1} alt="" />
            </a>
          </div>
          <div>
            <p className="portfolio-content_container-box-name">
              Real Estate Management System
            </p>
            <p className="portfolio-content_container-box-design"></p>
          </div>
        </div>
        <div className="portfolio-content_container-box">
          <div className="portfolio-content_container-box-up">
            <a href="https://github.com/LeninSpeelPerk/food-order">
              <img src={design2} alt="" />
            </a>
          </div>
          <div>
            <p className="portfolio-content_container-box-name">Food Order</p>
            <p className="portfolio-content_container-box-design"></p>
          </div>
        </div>
        <div className="portfolio-content_container-box">
          <div className="portfolio-content_container-box-up">
            <a href="https://balabk5.github.io/wedding_decors">
              <img src={design3} alt="" />
            </a>
          </div>
          <div>
            <p className="portfolio-content_container-box-name">
              Wedding Decors
            </p>
            <p className="portfolio-content_container-box-design"></p>
          </div>
        </div>
        <div className="portfolio-content_container-box">
          <div className="portfolio-content_container-box-up">
            <a href="https://github.com/LeninSpeelPerk/Real-Estate-Management-System">
              <img src={design4} alt="" />
            </a>
          </div>
          <div>
            <p className="portfolio-content_container-box-name">
              Farmer Supportive
            </p>
            <p className="portfolio-content_container-box-design"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
