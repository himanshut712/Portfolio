import React from 'react';
import './projects.css';
import wonderers from '../../assets/Wonderers.png';
import snapgram from '../../assets/SnapGram.png';
import spotifyclone from '../../assets/SpotifyClone.png';
import empMng from '../../assets/Emp_Mng.jpg';

export default function MyPortfolio() {
  return (
    <section className="portfolio--section container mx-auto px-4 py-20" id="MyPortfolio">
      <button className="btn flex items-center gap-2 max-w-44 justify-center">My Projects</button>
      <h1 className="text-3xl font-semibold projects-title">
        Turning Ideas into <span className="primary">Reality</span>
      </h1>
      <p className="secondary text-sm ternary projects-description">
        Witness the evolution of innovation as we transform ideas into tangible realities. Explore our project showcase, where creativity, determination, and expertise converge to shape the future. Experience the journey of turning vision into impactful outcomes.
      </p>
      <div className="portfolio--section--container">
        {/* Project 1 */}
        <div className="portfolio--section--card">
          <div className="portfolio--section--img">
            <img src={wonderers} alt="Project 1 Thumbnail" />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">Wonderers</h3>
              <p className="portfolio--section--desc text-md">A place rental website with filtered listings and reviews</p>
            </div>
            <a href="https://wonderers-nine.vercel.app/listings" className="text-sm portfolio--link" target="_blank" rel="noopener noreferrer">
              View Project
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 19" fill="none">
                <path d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="portfolio--section--card">
          <div className="portfolio--section--img">
            <img src={snapgram} alt="Project 2 Thumbnail" />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">SnapGram</h3>
              <p className="portfolio--section--desc text-md">Social Media Website where user have option of post and like and comment on other's post</p>
            </div>
            <a href="https://snapgram-three-eosin.vercel.app/" className="text-sm portfolio--link" target="_blank" rel="noopener noreferrer">
              View Project
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 19" fill="none">
                <path d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="portfolio--section--card">
          <div className="portfolio--section--img">
            <img src={spotifyclone} alt="Project 3 Thumbnail" />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">SpotifyClone</h3>
              <p className="portfolio--section--desc text-md">An in-browser music player landing page with various songs options and functionality</p>
            </div>
            <a href="https://www.linkedin.com/posts/himanshu-tilwani_webdevelopment-html-css-activity-7172177770964357120-Xfqf?utm_source=share&utm_medium=member_desktop" className="text-sm portfolio--link" target="_blank" rel="noopener noreferrer">
              LinkedIn Post
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 19" fill="none">
                <path d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Project 4 */}
        <div className="portfolio--section--card">
          <div className="portfolio--section--img">
            <img src={empMng} alt="Project 4 Thumbnail" />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">Employee Management</h3>
              <p className="portfolio--section--desc text-md">A Java Swing application to manage employee data and details easily.</p>
            </div>
            <a href="https://www.linkedin.com/posts/himanshu-tilwani_computervision-softwareengineering-softwareengineer-activity-7153719019634647040-uEAq?utm_source=share&utm_medium=member_desktop" className="text-sm portfolio--link" target="_blank" rel="noopener noreferrer">
              LinkedIn Post
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 19" fill="none">
                <path d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
