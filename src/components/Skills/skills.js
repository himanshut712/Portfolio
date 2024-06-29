import React from 'react';
import './skills.css';
import HTML from '../../assets/html.svg';
import CSS from '../../assets/css.svg';
import JavaScript from '../../assets/javascript.svg';
import Java from '../../assets/Java.png';
import Express from '../../assets/express.jpeg';
import Node from '../../assets/nodejs.svg';
import MySql from '../../assets/mysql.svg';
import Mongo from '../../assets/mongodb.svg';
import ReactJS from '../../assets/react.svg';
import TailWind from '../../assets/tailwindcss.svg';

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <div className="skills-section">
        <button className="skills-btn flex items-center gap-2 max-w-44 justify-center">Professional Skills</button>
        <h1 className="skills-title">
          Innovative Solution to <span className="primary">Enhance</span>
        </h1>
        <h2 className="secondary skills-description">Expertise in using the TechStack</h2>
        <p className="ternary skills-description">
          Innovative problem solver with proficiency in diverse technologies and industries. Adept at leading teams,
          fostering collaboration, and driving results. Expertise includes project management, strategic planning, and
          adaptability in dynamic environments.
        </p>
        <div className="skills-grid">
          {[HTML, CSS, JavaScript, Java, Express, Node, MySql, Mongo, ReactJS, TailWind].map((tech, index) => (
            <div key={index} className="bg-card skill-card rounded-md p-2 flex flex-col justify-between items-center md:flex">
              <img
                alt="tech-icon"
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                className="p-3 skill-icon"
                src={tech}
              />
              <p className="ternary text-sm text-center skill-title">{tech.split('/').pop().split('.')[0]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
