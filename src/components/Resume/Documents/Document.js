import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import PropTypes from 'prop-types';

const Modal = ({ data }) => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>{data.message}</div>
  </Popup>
);

Modal.propTypes = {
  data: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
};

export default Modal;
