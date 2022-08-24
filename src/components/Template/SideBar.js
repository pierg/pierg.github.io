import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Piergiuseppe Mallozzi</h2>
        <p><a href="mailto:piergiuseppe.mallozzi@gmail.com">piergiuseppe.mallozzi@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Pier.
        I am a post doctoral researcher at <a href="https://www.icyphy.org/">UC Berkeley, Industrial Cyber-Physical Systems group</a>.
        I have a PhD in <a href="https://www.chalmers.se/en/Pages/default.aspx">Computer Science from Chalmers University of Technology, Sweden</a> .
        Since 2016 I have been part of <a href="https://wasp-sweden.org">Wallenberg AI, Autonomous Systems and Software Program</a>, the largest individual research program in Sweden.
        I have obtained my BSc and MSc in Computer Engineering from the <a href="https://www.unipi.it/index.php/english">University of Pisa, Italy.</a>
      </p>
      <p>
        My research interests are in the field of software engineering,
        formal methods and machine learning.
        Specifically, I&apos;m interested in design methodologies for autonomous systems.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/projects" className="button">About My Projects</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Piergiuseppe Mallozzi <Link to="/">pmallozzi.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
