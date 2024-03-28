import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage
const meserious = `${PUBLIC_URL}/images/meserious.jpg`;
const mesmile = `${PUBLIC_URL}/images/mesmile.jpeg`;

// eslint-disable-next-line react/prop-types
const MePic = () => {
  const imageRef = useRef(null);

  return (
    <img
      onMouseOver={() => {
        imageRef.current.src = meserious;
      }}
      onFocus={() => {
        imageRef.current.src = meserious;
      }}
      onMouseOut={() => {
        imageRef.current.src = mesmile;
      }}
      onBlur={() => {
        imageRef.current.src = mesmile;
      }}
      src={mesmile}
      alt=""
      ref={imageRef}
    />
  );
};

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <MePic alt="" />
      </Link>
      <header>
        <h2>Piergiuseppe Mallozzi</h2>
        <p>
          <a href="mailto:mallozzi@berkeley.edu">mallozzi@berkeley.edu</a>
        </p>
        <p>
          <a href="mailto:piergiuseppe.mallozzi@gmail.com">
            piergiuseppe.mallozzi@gmail.com
          </a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Pier. I am a postdoctoral researcher at{' '}
        <a href="https://www.icyphy.org/people">
          {' '}
          in the Industrial Cyber-Physical Systems group at UC Berkeley
        </a>
        . I received my PhD in{' '}
        <a href="https://www.chalmers.se/en/Pages/default.aspx">
          Computer Science from Chalmers University of Technology, Sweden
        </a>{' '}
        and have been a part of the{' '}
        <a href="https://wasp-sweden.org">
          Wallenberg AI, Autonomous Systems and Software Program
        </a>
        , the largest individual research program in Sweden, since 2016. My
        background includes a BSc and MSc in Computer Engineering from the{' '}
        <a href="https://www.unipi.it/index.php/english">
          {' '}
          University of Pisa, Italy{' '}
        </a>
        .
      </p>
      {/* <p>
        My research focuses on software engineering, formal methods, and machine learning,
        with a particular interest in design methodologies for autonomous systems.
      </p> */}
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            // <Link to="/resume" className="button">
            //   Learn More
            // </Link>
            <Link to="/projects" className="button">
              About My Projects
            </Link>
          ) : (
            <Link to="/projects" className="button">
              About My Projects
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Piergiuseppe Mallozzi <Link to="/">pierg.github.io</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
