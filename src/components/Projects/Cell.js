import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h2>{data.title}</h2>
        <h4>{data.subtitle}</h4>
      </header>
      <div className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </div>
      <div className="description">
        <div className="descp">
          <p> {data.desc} </p>
          <div className="github-link">
            <a href={data.github} className="button medium float_right">view of GitHub <FontAwesomeIcon icon={faGithub} /></a>
            {data.link
              && <a href={data.link} className="button medium float_right">Launch it (BETA)</a>}
          </div>
        </div>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    github: PropTypes.string,
    link: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string,
    desc: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Cell;
