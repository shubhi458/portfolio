import React from "react";

const ServicesPage = () =>{
    return <div id="services">
        <div className="container">
            <h1 className="sub-title">My Services</h1>
            
            <div className="services-list">
            <div className="services-tab-contents">
            <h2>Frontend Development (User Interface & Experience)</h2>
            <ul>
              <li><span>Responsive Web Design<br /></span>Stunning, mobile-friendly, and intuitive UI/UX.</li>
              <li><span>Modern Frontend Technologies<br /></span>Expertise in React.js, Vue.js, Angular, HTML, CSS, and JavaScript.</li>
              <li><span>Performance Optimization<br /></span>Fast-loading, SEO-friendly websites and apps.</li>
            </ul>
            </div>
            <div className="services-tab-contents">
            <h2>Backend Development (Server & Database Management)</h2>
            <ul>
              <li><span>Custom API Development<br /></span>Secure, scalable RESTful & GraphQL APIs.</li>
              <li><span>Database Management<br /></span>Expertise in MongoDB, MySQL, PostgreSQL, and Firebase.</li>
              <li><span>Authentication & Security<br /></span>Secure login, user roles, and data protection..</li>
            </ul>
            </div>
            
            <div className="services-tab-contents">
            <h2>Full-Stack Web & App Solutions</h2>
            <ul>
              <li><span>MERN / MEAN Stack Development<br /></span>MongoDB, Express.js, React/Angular, and Node.js.</li>
              <li><span>Mobile App Development<br /></span>React Native</li>
            </ul>
            </div>
            </div>
        </div>
    </div>
}

export default ServicesPage;