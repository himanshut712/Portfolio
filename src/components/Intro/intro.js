import React from 'react';
import './intro.css';
import bg from "../../assets/prfpic.png";
import gmail from "../../assets/icons8-email-48.png";
import linkedin from "../../assets/icons8-linkedin-48.png";
import github from "../../assets/icons8-github-48.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Himanshu Tilwani</span><br />Web Developer</span>
        <p className='introPara'>I'm a skilled Web Developer creating useful visually appealing and user-friendly websites.</p>
        <p className='Contacts'>Contact:- +91-7999679734</p>
        <span className="contact flex gap-5">
          <div className="intro-bg-card">
            <a href="https://www.linkedin.com/in/himanshu-tilwani">
              <img alt="linkedin-link" src={linkedin} className="social-img" />
            </a>
          </div>
          <div className="intro-bg-card">
            <a href="mailto:harshtlwn@gmail.com">
              <img alt="gmail" src={gmail} className="social-img" />
            </a>
          </div>
          <div className="intro-bg-card">
            <a href="https://github.com/Github">
              <img alt="github-link" src={github} className="social-img" />
            </a>
          </div>
        </span>
      </div>
      <div className="bg-container">
        <img src={bg} alt="profile" className='bg' />
      </div>
    </section>
  );
};

export default Intro;

