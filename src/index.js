import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card-container">
      <div className="animated-background"></div>
      <div className="card">
        <div className="header-section">
          <Avatar />
          <QuickInfo />
        </div>
        <div className="data">
          <Intro />
          <SkillList />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="imam.jpg" alt="avatar_img" />;
}

function QuickInfo() {
  return (
    <div className="quick-info">
      <h2>Quick Info</h2>
      <div className="info-items">
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>Tangerang Selatan, Indonesia</span>
        </div>
        <div className="info-item">
          <i className="fas fa-graduation-cap"></i>
          <span>System Information Graduate</span>
        </div>
        <div className="info-item">
          <i className="fas fa-briefcase"></i>
          <span>Open to Work</span>
        </div>
        <div className="info-item">
          <i className="fas fa-code-branch"></i>
          <span>15+ Web Projects</span>
        </div>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Intro</h1>
      <p>
        A passionate Junior Web Developer with hands-on experience in PHP
        frameworks like Laravel and CodeIgniter. Currently expanding my
        expertise into React JS, I combine strong problem-solving abilities with
        a quick learning mindset. I thrive both independently and in
        collaborative environments, consistently delivering projects on time.
        Eager to contribute and grow while bringing technical skills and
        enthusiasm for continuous learning to innovative projects.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <h2>Skills</h2>
      <div className="skills-container">
        <Skill name="HTML" level="Advanced" />
        <Skill name="CSS" level="Advanced" />
        <Skill name="PHP" level="Advanced" />
        <Skill name="Laravel" level="Intermediate" />
        <Skill name="JavaScript" level="Intermediate" />
        <Skill name="React JS" level="Basic" />
        <Skill name="Code Igniter" level="Intermediate" />
        <Skill name="Time Management" level="Advanced" />
        <Skill name="Problem Solving" level="Intermediate" />
      </div>
    </div>
  );
}

function Skill(skillData) {
  return (
    <div className="skill">
      <span className="skill-name">{skillData.name}</span>
      <div className="skill-level">
        <span className={`level ${skillData.level.toLowerCase()}`}>
          {skillData.level}
        </span>
      </div>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="contact-info">
      <h2>Contact & Social</h2>
      <div className="contact-container">
        <div className="social-links">
          <a href="https://github.com/ImamAdli/" className="social-link github">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/imam-adli/"
            className="social-link linkedin"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=imamimamimam717@gmail.com"
            className="social-link email"
          >
            <i className="fas fa-envelope"></i> Email
          </a>
        </div>
        <div className="cv-download">
          <a href="imamadli-resume.pdf" download className="download-button">
            <i className="fas fa-download"></i> Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
