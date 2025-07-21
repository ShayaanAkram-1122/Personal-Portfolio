import React from 'react';
import '../styles/resume.css';

export default function Resume() {
  return (
    <main className="resume-main-content">
      <section className="resume-section">
        <h1>Resume</h1>
        <a href="/resume.pdf" download className="resume-download">Download PDF</a>
        <div className="resume-block">
          <h3>Experience</h3>
          <ul>
            <li><strong>Full Stack Intern</strong> at WebDeveloperHub.co (June 2025 – Present)</li>
            <li><strong>Web Development Intern</strong> at Coding Samurai (March 2025 – May 2025)</li>
            <li><strong>Web Development Intern</strong> at Siaket Systems (January 2025 – March 2025)</li>
          </ul>
        </div>
        <div className="resume-block">
          <h3>Education</h3>
          <ul>
            <li>
              <strong>National University of Computer and Emerging Sciences</strong><br />
              Bachelor of Science (BS), Computer Science<br />
              2023 – 2027
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
} 