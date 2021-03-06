import React from 'react';
import { Helmet } from "react-helmet"

//Main Index file that compiles the website
//React index.js includes all componenets
import Hero from '../components/JS/Hero.js';
import About from '../components/JS/About.js';
import Projects from '../components/JS/Projects.js';
import ContactLinks from '../components/JS/ContactLinks.js';
import Footer from '../components/JS/Footer.js';
//Styling
import '../scss/index.scss';
//Import js projects and statements to be used in the respective componenets
import projects from '../content/projects.js';
import statements from '../content/about-me.js';

//This index will export default class Home using React components
export default class Home extends React.PureComponent {
  //Render the components to be sent to browser
  render() {
    return (
      //Upon rendering the HTML will be sent
      //Div home-container      
      <div id = "home" className="container-lg">
        <Helmet>
        <title>Aaron Wang</title>
        </Helmet>
        <Hero />
        <h2 id="about" className="section-title">
          About Me
        </h2>
        {/* For all of the statements in about-me.js, send to About */}
        <About statements={statements} />
        <h2 id="projects" className="section-title">
          Featured Projects
        </h2>
        <Projects projects={projects} />
        <div className="background" />
        <h2 id="contact" className="section-title">
          Let's get in touch!
        </h2>
        <ContactLinks />
        <hr></hr>
        <Footer />
      </div>
    );
  }
}
