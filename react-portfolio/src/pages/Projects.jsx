import React from 'react';
import '../styles/projects.css';

const githubUrl = 'https://github.com/ShayaanAkram-1122?tab=repositories';

const projects = [
  {
    name: 'Instagram Backend Clone',
    tech: ['C++', 'Data Structures', 'Git'],
    description: 'A backend clone of Instagram built in C++ using advanced data structures. Features include user authentication, post management, following system, and feed generation. Git is used to maintain different versions of the codebase and for collaborative development.',
    url: githubUrl
  },
  {
    name: 'John Rambo Game',
    tech: ['C++', 'OOP', 'Git'],
    description: 'A C++ game project using Object-Oriented Programming principles. Includes player movement, enemy AI, scoring, and level progression. Git is used for codebase management and version control.',
    url: githubUrl
  },
  {
    name: 'Nvidia Clone Website',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description: 'A frontend clone of the Nvidia website, built with HTML, CSS, and JavaScript. Responsive design, interactive UI elements, and modern layout techniques are used to closely mimic the original site.',
    url: githubUrl
  },
  {
    name: 'Ping Pong Game in Assembly',
    tech: ['Assembly'],
    description: 'A Ping Pong game implemented in Assembly language, featuring all core game functionalities such as paddle movement, ball physics, scoring, and win/lose conditions.',
    url: githubUrl
  },
  {
    name: 'Google Drive System',
    tech: ['C++', 'Data Structures'],
    description: 'A Google Drive system clone in C++ using data structures. Implements file upload/download, folder management, sharing, and search functionalities.',
    url: githubUrl
  },
  {
    name: 'Movie Data Analyzer',
    tech: ['R'],
    description: "I've designed and implemented a Data Analyzer using the R programming language, focused on efficient data manipulation, statistical analysis, and insightful visualization. The project demonstrates data cleaning, transformation, and advanced plotting techniques.",
    url: githubUrl
  },
  {
    name: 'Amazon Clone Website',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    description: 'A full stack Amazon clone website. Backend: Node.js, Express, PostgreSQL. Frontend: HTML, CSS, JavaScript. Features include product listing, cart, checkout, authentication, and order management.',
    url: githubUrl
  },
  {
    name: 'Book Notes Website',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'EJS', 'CSS', 'JavaScript'],
    description: 'A full stack Book Notes website. Frontend: EJS, CSS, JavaScript. Backend: Node.js, Express, PostgreSQL. Allows users to add, edit, and organize book notes with user authentication.',
    url: githubUrl
  },
  {
    name: 'Weather Wise',
    tech: ['EJS', 'API'],
    description: 'A weather information website built with EJS, consuming weather APIs. Users can search for cities and view real-time weather data with a clean, user-friendly interface.',
    url: githubUrl
  }
];

export default function Projects() {
  return (
    <div className="projects-listing-content">
      <section className="projects-listing-section">
        <h1>Projects</h1>
        <div className="projects-listing">
          {projects.map((project, idx) => (
            <div className={`project-listing-card${idx % 2 === 1 ? ' right-align' : ''}`} key={idx}>
              <div className="project-listing-header">
                <span className="project-listing-title">{project.name}</span>
              </div>
              <div className="project-listing-tech">
                {project.tech.map((t, i) => (
                  <span className="project-tech-badge" key={i}>{t}</span>
                ))}
              </div>
              <div className="project-listing-desc">
              <span className="project-listing-desc">{project.description}</span>
              </div>
              <div className="project-listing-actions">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-check-btn">Check it</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 