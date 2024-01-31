import React from "react";
import "./resume.css";

const Resume = () => {
  return (
    <div className="resume-content" id="services">
      <p className="resume-content_title">MY RESUME</p>
      <p className="resume-content_heading">Education and Experience</p>
      {/* <div class="vl"></div> */}
      <div className="resume-content_container">
        <div className="resume-content_container-education">
          <div className="resume-content_container-field">
            <p className="resume-content_container-field-course">
              B.E Mechatronics Engineering
            </p>
            <p className="resume-content_container-field-college">
              SNS College of Technology (2018 - 2022)
            </p>
            <p className="resume-content_container-field-mark">
              Mark: 8.5 CGPA
            </p>
          </div>
          <div className="resume-content_container-field">
            <p className="resume-content_container-field-course">HSC</p>
            <p className="resume-content_container-field-college">
              Sri Ramakrishna Matric Hr. Sec. School (2017 - 2018)
            </p>
            <p className="resume-content_container-field-mark">Mark: 78%</p>
          </div>
          <div className="resume-content_container-field">
            <p className="resume-content_container-field-course">SSLC</p>
            <p className="resume-content_container-field-college">
              Annai Violet Matric Hr. Sec. School (2015 - 2016)
            </p>
            <p className="resume-content_container-field-mark">Mark: 91%</p>
          </div>
        </div>
        <div className="resume-content_container-experience">
          <div className="resume-content_container-field">
            <p className="resume-content_container-field-course">
              Programmer Analyst
            </p>
            <p className="resume-content_container-field-college">Cognizant</p>
            <p className="resume-content_container-field-mark">
              DEC 23 - Present
            </p>
          </div>

          <div className="resume-content_container-field">
            <p className="resume-content_container-field-course">
              Program Analyst Trainee
            </p>
            <p className="resume-content_container-field-college">Cognizant</p>
            <p className="resume-content_container-field-mark">
              DEC 22 - DEC 23
            </p>
          </div>

          <div className="resume-content_container-field">
            <p className="resume-content_container-field-course">Internship</p>
            <p className="resume-content_container-field-college">Cognizant</p>
            <p className="resume-content_container-field-mark">
              FEB 22 - NOV 22
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
