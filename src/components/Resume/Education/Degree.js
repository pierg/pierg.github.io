import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => {
  if (data.subtitle) {
    return (
      <article className="degree-container">
        <header>
          <h4 className="degree">{data.degree}</h4>
          <p className="school">{data.school}, {data.year}</p>
          <p className="subtitle">{data.subtitle}</p>
          <p className="thesis">Thesis: <a href={data.link}>{data.title}</a></p>
        </header>
      </article>
    );
  }
  if (data.title) {
    return (
      <article className="degree-container">
        <header>
          <h4 className="degree">{data.degree}</h4>
          <p className="school">{data.school}, {data.year}</p>
          <p className="thesis">Thesis: <a href={data.link}>{data.title}</a></p>
        </header>
      </article>
    );
  }
  return (
    <article className="degree-container">
      <header>
        <h4 className="degree">{data.degree}</h4>
        <p className="school">{data.school}, {data.year}</p>
      </header>
    </article>
  );
};

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }).isRequired,
};

export default Degree;
