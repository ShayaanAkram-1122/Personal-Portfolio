import React from 'react';
import '../styles/about.css';

export default function About() {
  return (
    <main className="about-main-content">
      <section className="about-section">
        <h1>About Me</h1>
        <h3>Full Stack Web Developer</h3>
        <p>I am a passionate and results-driven full stack web developer with a strong foundation in both frontend and backend technologies. I specialize in building modern, scalable, and user-friendly web applications using the latest industry standards. My expertise includes JavaScript (ES6+), React.js, Node.js, Express.js, REST APIs, SQL/PostgreSQL, EJS, Bootstrap, CSS3, and Git. I am committed to continuous learning and thrive in collaborative, fast-paced environments.</p>
        <div className="about-skills">
          <h4>Technical Skills</h4>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST APIs</li>
            <li>SQL / PostgreSQL</li>
            <li>EJS</li>
            <li>Bootstrap</li>
            <li>CSS3</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </section>
    </main>
  );
} 