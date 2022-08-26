import React from 'react';
import { Link } from 'react-router-dom';

import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Piergiuseppe Mallozzi's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          <p>A selection of projects that I have developed and that are available open-source.</p>
        </div>
        <div className="meta">
          <h4 data-testid="heading"> <FontAwesomeIcon icon={faWrench} /> What I Use </h4>
          <p>
            <a href="https://mypy.readthedocs.io/en/stable/">mypy </a>  &#8226;
            <a href="https://pre-commit.com"> pre-commit hooks </a>  &#8226;
            <a href="https://anaconda.org"> conda </a>  &#8226;
            <a href="https://python-poetry.org"> poetry </a>  &#8226;
            <a href="https://pdm.fming.dev/latest/"> pdm </a>  &#8226;
            <a href="https://www.docker.com"> docker </a>  &#8226;
            <a href="https://www.sphinx-doc.org/en/master/"> sphinx </a>  &#8226;
            <a href="https://nusmv.fbk.eu"> nusmv </a>  &#8226;
            <a href="https://strix.model.in.tum.de"> strix </a>  &#8226;
            <a href="https://reactjs.org"> react </a>  &#8226;
            <a href="https://flask.palletsprojects.com/en/2.2.x/"> flask </a>
          </p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
