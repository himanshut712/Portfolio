import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className="about container mx-auto px-4 py-20" id="about">
      <button className="btn flex items-center gap-2 max-w-44 justify-center">About</button>
      <h1 className="text-3xl font-semibold about-title">
      Full-Stack Web <span className="primary"> Developer</span>
      </h1>
      <p className="secondary text-sm ternary about-description">
       Am enthusiastic computer application post gradute from the LNCT University obtained skills in multiple computer science fundamentals and various technologies front-end and back-end.
       With a blend of development prowess and design finesse, I'm here to craft digital wonders that captivate and inspire. Let's collaborate and turn your vision into reality!
      With a  passion for front-end development, I specialize in crafting visually appealing and user-friendly web experiences. Proficient in modern technologies like Tailwind CSS, I ensure my code is not only functional but also elegant.
      </p>
    </section>
  );
};

export default About;

