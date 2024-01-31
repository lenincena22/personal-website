import React from "react";
import article1 from "../../assets/article1.jpg";
import article2 from "../../assets/article2.jpg";
import article3 from "../../assets/article3.jpg";

import "./blog.css";

const Blog = () => {
  return (
    <div className="blog-content" id="blog">
      <p className="blog-content_title">BLOG POST</p>
      <p className="blog-content_heading">My Articles</p>
      <div className="blog-content_container">
        <div className="blog-content_container-card">
          <div className="blog-content_container-card-img">
            <img src={article1} alt="" />
          </div>
          <div className="blog-content_container-card-details">
            <p className="blog-content_container-card-details-title">
              Inspiration from differnet projects
            </p>
            <p className="blog-content_container-card-details-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Aliquet porttitor lacus luctus accumsan tortor posuere ac.
            </p>
            <p className="blog-content_container-card-details-tags">
              #Design #Trending #Protfolio
            </p>
          </div>
        </div>
        <div className="blog-content_container-card">
          <div className="blog-content_container-card-img">
            <img src={article2} alt="" />
          </div>
          <div className="blog-content_container-card-details">
            <p className="blog-content_container-card-details-title">
              Inspiration from differnet projects
            </p>
            <p className="blog-content_container-card-details-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Aliquet porttitor lacus luctus accumsan tortor posuere ac.
            </p>
            <p className="blog-content_container-card-details-tags">
              #Design #Trending #Protfolio
            </p>
          </div>
        </div>
        <div className="blog-content_container-card">
          <div className="blog-content_container-card-img">
            <img src={article3} alt="" />
          </div>
          <div className="blog-content_container-card-details">
            <p className="blog-content_container-card-details-title">
              Inspiration from differnet projects
            </p>
            <p className="blog-content_container-card-details-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Aliquet porttitor lacus luctus accumsan tortor posuere ac.
            </p>
            <p className="blog-content_container-card-details-tags">
              #Design #Trending #Protfolio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
