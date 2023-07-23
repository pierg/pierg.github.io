import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

const Cell = ({ data }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="cell-container">
      <article className={`mini-post ${imageLoaded ? 'image-loaded' : ''}`}>
        <header>
          <h2>{data.title}</h2>
          <h4>{data.subtitle}</h4>
        </header>
        <div className="image">
          {!imageLoaded && <div className="loading-placeholder">Loading...</div>}
          <img
            src={`${process.env.PUBLIC_URL}${data.image}`}
            alt={data.title}
            onLoad={handleImageLoad}
            style={{ display: imageLoaded ? 'block' : 'none' }}
          />
        </div>
        <div className="description">
          <div className="descp">
            <p> {data.desc} </p>
            <div className="github-link">
              <a href={data.github} className="button medium float_right">
                view on GitHub <FontAwesomeIcon icon={faGithub} />
              </a>
              {data.link && (
                <a href={data.link} className="button medium float_right">
                  Website
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

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
