import React from "react";
import avathar1 from "../../assets/testimonal1.jpg";
import avathar2 from "../../assets/testimonal2.jpg";
import star_filled from "../../assets/icons/icons8-star-20.png";
import star_unfilled from "../../assets/icons/icons8-star(outlined)-20.png";

import "./testimonal.css";

const Testimonal = () => {
  return (
    <div className="testimonal-content">
      <p className="testimonal-content_title">TESTIMONAL</p>
      <p className="testimonal-content_heading">What Clients Say</p>
      <div className="testimonal-content_container">
        <div className="testimonal-content_container-left">
          <div className="testimonal-content_container-avathar">
            <img src={avathar1} alt="" />
          </div>
          <div className="testimonal-content_container-details">
            <div className="testimonal-content_container-details-left">
              <div className="testimonal-content_container-username">
                Alex Smith
              </div>
              <div className="testimonal-content_container-designation">
                UI Designer
              </div>
            </div>
            <div className="testimonal-content_container-details-right">
              <div className="testimonal-content_container-star">
                <img src={star_filled} alt="" />
                <img src={star_filled} alt="" />
                <img src={star_filled} alt="" />
                <img src={star_filled} alt="" />
                <img src={star_filled} alt="" />
              </div>
              <div className="testimonal-content_container-rating">5.0</div>
            </div>
          </div>
          <p className="testimonal-content_container-description">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </p>
        </div>
        <div className="testimonal-content_container-right">
          <div className="testimonal-content_container-avathar">
            <img src={avathar2} alt="" />
          </div>
          <div className="testimonal-content_container-details">
            <div className="testimonal-content_container-details-left">
              <div className="testimonal-content_container-username">
                Alex Smith
              </div>
              <div className="testimonal-content_container-designation">
                UI Designer
              </div>
            </div>
            <div className="testimonal-content_container-details-right">
              <div className="testimonal-content_container-star">
                <img src={star_filled} alt="" />
                <img src={star_filled} alt="" />
                <img src={star_filled} alt="" />
                <img src={star_filled} alt="" />
                <img src={star_unfilled} alt="" />
              </div>
              <div className="testimonal-content_container-rating">4.0</div>
            </div>
          </div>
          <p className="testimonal-content_container-description">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
