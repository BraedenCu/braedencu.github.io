import githubLogo from './assets/github.png';
import linkedinLogo from './assets/ln.png';
import instagramLogo from './assets/insta.png';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [heading, setHeading] = useState('Engineer');
  useEffect(() => {
    const headings = ['Creative', 'Engineer', 'Designer', 'Developer', 'Artist', 'Student', 'Learner', 'Problem Solver', 'Innovator', 'Collaborator', 'Leader', 'Mentor', 'Friend', 'Teammate', 'Volunteer', 'Advocate', 'Activist', 'Writer', 'Speaker', 'Musician', 'Dancer', 'Athlete', 'Explorer', 'Traveler', 'Photographer', 'Reader', 'Linguist', 'Polyglot', 'Human'];
    let i = 0;
    
    const changeHeading = () => {
      setHeading(headings[i]);
      i = i < headings.length - 1 ? i + 1 : 0;
    };

    const intervalId = setInterval(changeHeading, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="hero">
        <div className="intro">
          <h1>Braeden Cullen</h1>
          <div className="hero-circle">
            <img height="128" width="128" src="src/assets/headshot.png" alt="Braeden Cullen"></img>
          </div>
          <h4>{heading}</h4>
          <p>
            A software engineer dedicated to leveraging advanced technical expertise and analytical  skills to address global challenges, with a strong foundation in AI, big data, and entrepreneurship.
          </p>
        </div>
        <div className="menu">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </div>
        <div className="social">
          <a
            href="https://github.com/BraedenCu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="g" src={githubLogo} alt="github Link" />
          </a>
          <a
            href="https://www.linkedin.com/in/braedencullen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="l" src={linkedinLogo} alt="Linkedin Link" />
          </a>
          <a
            href="https://www.instagram.com/braedencullen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="i" src={instagramLogo} alt="Instagram Link" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
