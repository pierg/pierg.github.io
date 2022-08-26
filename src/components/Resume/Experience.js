import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Experience = ({ type, id, data }) => (
  <div className="experience">
    <div className="link-to" id={id} />
    <div className="title">
      <h3>{type}</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={job.company + job.position}
      />
    ))}
  </div>
);

Experience.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Experience.defaultProps = {
  data: [],
  type: PropTypes.string,
  id: PropTypes.string,
};

export default Experience;
