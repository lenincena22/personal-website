import React from "react";
import "./specilizing.css";
import ui_design from "../../assets/icons/icons8-ui-design-45.png";
import graphic_design from "../../assets/icons/icons8-graphic-45.png";
import web_design from "../../assets/icons/icons8-web-design-45.png";

const Specilizing = () => {
  return (
    <div className="specilizing-content" id="specilizing">
      <p className="specilizing-content_title">WHAT I DO</p>
      <p className="specilizing-content_heading">Specilizing In</p>
      <div className="specilizing-content_container">
        <div className="specilizing-content_container-item">
          <div>
            <img src={ui_design} alt="" />
            <p className="specilizing-content_container-item-name">
              UI/UX Design
            </p>
          </div>
          <p className="specilizing-content_container-item-description">
            <li>
              Translate design concepts into code using HTML, CSS, and
              JavaScript.
            </li>
            <br />
            <li>
              Ensure responsive and cross-browser compatibility of user
              interfaces.
            </li>
            <br />
            <li>
              Proficiency in HTML, CSS, JavaScript, and other relevant front-end
              technologies.
            </li>
            <br />
            <li>Experience with design tools such as Figma</li>
            <br />
            <li>Ability to create engaging and user-friendly interfaces.</li>
          </p>
        </div>
        <div className="specilizing-content_container-item">
          <div>
            <img src={graphic_design} alt="" />
            <p className="specilizing-content_container-item-name">
              Java Full Stack Development
            </p>
          </div>
          <p className="specilizing-content_container-item-description">
            <li>
              Completed Internship as a Full Stack Java developer at Cognizant.
              Worked on designing, developing and implementing object-oriented
              software applications, web application development.
            </li>
            <br />
            <li>
              Good experience in developing various applications using JAVA/J2EE
              technologies like Java, JDBC, Servlets, JSP, Spring MVC, Spring
              Boot(Rest API), React JS.
            </li>
            <br />
            <li>
              Good skills in developing code for the database applications to
              interact with the database using JDBC and ORM frameworks like
              Spring JPA
            </li>
          </p>
        </div>
        <div className="specilizing-content_container-item">
          <div>
            <img src={web_design} alt="" />
            <p className="specilizing-content_container-item-name">
              Web Development
            </p>
          </div>
          <p className="specilizing-content_container-item-description">
            <li>
              UI Development: Design and implemented responsive and visually
              appealing user interfaces using React.js. Component Development:
              Created reusable React components to enhance code maintainability
              and promote component-based development.
            </li>
            <br />
            <li>
              Proficient in React.js: Strong command of React.js and its core
              principles, such as virtual DOM, component lifecycle, and JSX.
            </li>
            <br />
            <li>
              JavaScript and ES6+: Solid understanding of JavaScript, including
              ES6+ features and syntax.
            </li>
            <br />
            <li>
              HTML/CSS: Thorough knowledge of HTML and CSS, including responsive
              design techniques.
            </li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Specilizing;
