import React from 'react';
import PropTypes from 'prop-types';
import { ModalManager } from 'react-dynamic-modal';
import MyModal from '../Documents/Document';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SkillBar = ({ data }) => {
  const {
    authors,
    venue,
    year,
    title,
    // file,
  } = data;

  // TODO: Consider averaging colors
  // const titleStyle = {
  //   background: categories
  //     .filter((cat) => category.includes(cat.name))
  //     .map((cat) => cat.color)[0],
  // };

  // const barStyle = {
  //   ...titleStyle,
  //   width: `${String(Math.min(100, Math.max((competency / 5.0) * 100.0, 0)))}%`,
  // };

  // eslint-disable-next-line camelcase
  // const pdflink = `${PUBLIC_URL}/publications/${file}.pdf`;
  // const citelink = `${PUBLIC_URL}/citations/${file}.txt`;
  // const citelink = 'https://drive.google.com/file/d/1ZkTlZ2aTip4SHnEM4L_DMCdY742l2N0b/view?usp=sharing';
  // const pdflink = 'https://drive.google.com/file/d/1ZkTlZ2aTip4SHnEM4L_DMCdY742l2N0b/view?usp=sharing';
  const scholarlink = 'https://scholar.google.com/citations?user=lrDnPyoAAAAJ&hl=en&oi=ao';

  function openModal() {
    ModalManager.open(<MyModal text={data.file} onRequestClose={() => true} />);
  }

  return (
    <div className="skillbar clearfix">
      <div className="skillbar-title"><p className="papertitle">{title}</p></div>
      <div className="skillbar-subtitle"><p className="authors">{authors}</p></div>
      <div className="skillbar-subtitle"><p className="venue"> {venue}, {year} </p></div>
      <div className="skillbar-subtitle"> <a href={scholarlink} className="button small">PDF</a><button type="button" onClick={openModal.bind(this)} className="button small">CITE</button></div>
    </div>
  );
};

SkillBar.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.number.isRequired,
    venue: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
  }).isRequired,
};

export default SkillBar;
