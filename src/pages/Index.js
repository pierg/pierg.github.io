import React from 'react';
import { Link } from 'react-router-dom';

import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/about.md');

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Index = () => (
  <Main
    description={
      "Piergiuseppe Mallozzi's personal website. Berkeley based PhD graduate in Computer Science"
    }
  >
    <article className="post" id="index">
      <p>
        {' '}
        Welcome to my website. Please feel free to check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        or <Link to="/personal">personal interests</Link>. If you have any
        questions or collaboration ideas, don&apos;t hesitate to{' '}
        <Link to="/contact">contact me</Link>.
      </p>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
      <ul className="actions">
        <li>
          <Link to="/resume" className="button">
            Learn More
          </Link>
        </li>
        <li>
          <Link to="/resume" className="button">
            Projects
          </Link>
        </li>
      </ul>
    </article>
  </Main>
);

export default Index;
