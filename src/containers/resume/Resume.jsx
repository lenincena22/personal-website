import React from "react";
import "./resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-content">
        <h1 className="resume-title">MY RESUME</h1>
        <div className="roadmap">
          <div className="roadmap-section education">
            <h2 className="roadmap-heading">Education</h2>
            <div className="roadmap-items">
              <div className="roadmap-item">
                <p className="roadmap-course">B.E Mechatronics Engineering</p>
                <p className="roadmap-details">
                  SNS College of Technology (2018 - 2022)
                </p>
                <p className="roadmap-details">Mark: 8.5 CGPA</p>
              </div>
              <div className="roadmap-item">
                <p className="roadmap-course">HSC</p>
                <p className="roadmap-details">
                  Sri Ramakrishna Matric Hr. Sec. School (2017 - 2018)
                </p>
                <p className="roadmap-details">Mark: 78%</p>
              </div>
              <div className="roadmap-item">
                <p className="roadmap-course">SSLC</p>
                <p className="roadmap-details">
                  Annai Violet Matric Hr. Sec. School (2015 - 2016)
                </p>
                <p className="roadmap-details">Mark: 91%</p>
              </div>
            </div>
          </div>
          <div className="roadmap-section experience">
            <h2 className="roadmap-heading">Experience</h2>
            <div className="roadmap-items">
              <div className="roadmap-item">
                <p className="roadmap-course">Programmer Analyst</p>
                <p className="roadmap-details">Cognizant</p>
                <p className="roadmap-details">DEC 23 - Present</p>
              </div>
              <div className="roadmap-item">
                <p className="roadmap-course">Program Analyst Trainee</p>
                <p className="roadmap-details">Cognizant</p>
                <p className="roadmap-details">DEC 22 - DEC 23</p>
              </div>
              <div className="roadmap-item">
                <p className="roadmap-course">Internship</p>
                <p className="roadmap-details">Cognizant</p>
                <p className="roadmap-details">FEB 22 - NOV 22</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
