'use client'
import React, { useRef, useState } from "react";

const AboutPage = () => {
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const [isSkillActive, setIsSkillActive] = useState(true);

  const [isEducationActive, setIsEducationActive] = useState(false);

  return <div id="about">
    <div className="container">
      <div className="row">
        <div className="about-col-1">
          <img src="./SecondImage.jpg" />
        </div>
        <div className="about-col-2">
          <h1 className="sub-title">About Me</h1>
          <p>
            Hi! 👋 I'm Shubhi, a passionate Full Stack Developer with a strong background in building dynamic, scalable, and user-friendly web applications. I specialize in both frontend and backend development, ensuring seamless integration between user interfaces and server-side logic.

            With expertise in JavaScript, React, Node.js, and databases like MongoDB/MySQL, I thrive on solving complex problems and creating innovative digital solutions. I love working with modern frameworks and cloud technologies to develop high-performance applications that enhance user experience.
          </p>

          <div className="tab-titles">
            <p ref={skillsRef} className="tab-links active-link" onClick={() => {
              setIsSkillActive(true), setIsEducationActive(false)
              skillsRef.current.classList.add("active-link");
              educationRef.current.classList.remove('active-link')
            }}>Skills</p>
            <p ref={educationRef} className="tab-links" onClick={() => {
              setIsEducationActive(true),
                setIsSkillActive(false)
              educationRef.current.classList.add("active-link");
              skillsRef.current.classList.remove('active-link')
            }}>Education</p>
          </div>
          {isSkillActive && <div className="tab-contents active-tab">
            <ul>
              <li><span>Frontend<br /></span>HTML, CSS, JavaScript, React.js, Angular</li>
              <li><span>Backend<br /></span>Node.js, Express.js, C-Sharp, .NET</li>
              <li><span>Database<br /></span>MongoDB, MySQL, PostgreSQL</li>
              <li><span>DevOps<br /></span>Docker, AWS, Firebase, CI/CD Pipelines</li>
              <li><span>APIs<br /></span>RESTful APIs, GraphQL</li>
              <li><span>Tools<br /></span>Git, GitHub, VS Code, Visual Studio, DBeaver</li>
            </ul>
          </div>}
          {isEducationActive && <div className="tab-contents active-tab">
            <ul>
              <li><span>2011<br /></span>High School from St. Antony's Inter College, Lucknow, U.P.</li>
              <li><span>2013<br /></span>Intermediate from St. Antony's Inter College, Lucknow, U.P.</li>
              <li><span>2016<br /></span>BCA from University of Lucknow, U.P.</li>
              <li><span>2020<br /></span>MCA from Dr. APJ Abdul Kalam Technical University, U.P.</li>
            </ul>
          </div>}
        </div>
      </div>
    </div>
  </div>;
};
export default AboutPage;
