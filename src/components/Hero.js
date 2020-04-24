import React from 'react';
import Typewriter from '../components/Typewriter';
import Scrollchor from 'react-scrollchor';

class Hero extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero-container">
        <Typewriter className="hero-title" text="Hi, I'm Aaron" />
        <div className="hero-description">
          I'm a second-year student studying Computer Science & Business
          Administration @ University of Southern California.
          <span class="br" />
          Passionate about product design, development, and mangagement, I love
          seeing a product to its fruition.
          <span class="br" />
          Learn more <Scrollchor to="#about">about me</Scrollchor>, check out my{' '}
          <a href="./Aaron_Wang_Resume.pdf" target="_blank">
            resume
          </a>
          {/* , my */}
          {/* <Scrollchor to="#projects"> experiences</Scrollchor> */} and/or my 
          <Scrollchor to="#projects"> side-projects</Scrollchor>, or{' '}
          <Scrollchor to="#contact">connect</Scrollchor> with me!
        </div>
      </div>
    );
  }
}

export default Hero;
