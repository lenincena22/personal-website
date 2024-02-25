import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import design1 from "../../assets/attachment.jpg";
import design2 from "../../assets/portfolio-design-2.jpg";
import design3 from "../../assets/original-665b62093f6c9f26ccda23e74dd97456.png";
import design4 from "../../assets/smart_farming_web_app-dribbble_4x.png";

import "./portfolio.css";

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="portfolio-content" id="portfolio">
      <p className="portfolio-content_title">MY WORKS</p>
      <p className="portfolio-content_heading">Latest Portfolio</p>
      <Slider {...settings}>
        <div className="portfolio-content_container-box">
          <div className="portfolio-content_container-box-up">
            <a href="https://github.com/LeninSpeelPerk/Real-Estate-Management-System">
              <img src={design1} alt="" />
            </a>
            <p className="portfolio-content_container-box-name">
              Real Estate Management System
            </p>
          </div>
        </div>
        <div className="portfolio-content_container-box">
          <div className="portfolio-content_container-box-up">
            <a href="https://github.com/LeninSpeelPerk/food-order">
              <img src={design2} alt="" />
            </a>
            <p className="portfolio-content_container-box-name">Food Order</p>
          </div>
        </div>
        <div className="portfolio-content_container-box">
          <div className="portfolio-content_container-box-up">
            <a href="https://balabk5.github.io/wedding_decors">
              <img src={design3} alt="" />
            </a>
            <p className="portfolio-content_container-box-name">
              Wedding Decors
            </p>
          </div>
        </div>
        <div className="portfolio-content_container-box">
          <div className="portfolio-content_container-box-up">
            <a href="https://github.com/LeninSpeelPerk/Real-Estate-Management-System">
              <img src={design4} alt="" />
            </a>
            <p className="portfolio-content_container-box-name">
              Farmer Supportive
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Portfolio;
