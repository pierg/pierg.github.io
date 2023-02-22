import React from 'react';
import PropTypes from 'prop-types';
// import ReactMarkdown from 'react-markdown';

const Job = ({ data }) => {
  if (data.prof) {
    return (
      <article className="jobs-container">
        <header>
          <p className="daterange"> {data.daterange}</p><h4><a href={data.link}>{data.company}</a> - {data.position}</h4>
          {/* <p className="prof">Advised by: <a href={data.proflink}>{data.prof}</a></p> */}
        </header>
        <ul className="points">
          {/* eslint-disable-next-line max-len */}
          {/* <li key={point}><ReactMarkdown renderers={{ paragraph: 'span' }}> {point} </ReactMarkdown></li> */}
          {data.points.map((point) => (
            <li key={point}> { point } </li>
          ))}
        </ul>
      </article>
    );
  }
  return (
    <article className="jobs-container">
      <header>
        <p className="daterange"> {data.daterange}</p><h4><a href={data.link}>{data.company}</a> - {data.position}</h4>
      </header>
      <ul className="points">
        {data.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
};

Job.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    prof: PropTypes.string,
    proflink: PropTypes.string,
    position: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Job;
