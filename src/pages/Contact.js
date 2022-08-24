import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Piergiuseppe Mallozzi via email @ piergiuseppe.mallozzi@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at:</p>
        <p><a href="mailto:piergiuseppe.mallozzi@gmail.com">piergiuseppe.mallozzi@gmail.com</a></p>
        <p><a href="mailto:mallozzi@berkeley.edu">mallozzi@berkeley.edu</a></p>
      </div>
      <ContactIcons />
      <p> The website source is available <a href="https://github.com/pierg/pierg.github.io">here</a>.</p>
    </article>
  </Main>
);

export default Contact;
