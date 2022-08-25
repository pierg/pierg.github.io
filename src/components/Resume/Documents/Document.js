import React from 'react';
import { Modal, Effect } from 'react-dynamic-modal';
import PropTypes from 'prop-types';
import raw from 'raw.macro';
import ReactMarkdown from 'react-markdown';

const customstyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99999999,
    overflow: 'hidden',
    perspective: 1300,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },

  content: {
    position: 'relative',
    margin: '15% auto',
    width: '70%',
    border: '1px solid rgba(0, 0, 0, .2)',
    background: '#2C3333',
    overflow: 'auto',
    borderRadius: '4px',
    outline: 'none',
    boxShadow: '0 5px 10px rgba(0, 0, 0, .3)',
  },
};

// const markdown = raw('../data/about.md');

const MyModal = ({
  text,
  onRequestClose,
}) => (
  <Modal
    onRequestClose={onRequestClose}
    effect={Effect.ScaleUp}
    style={customstyle}
  >
    <ReactMarkdown source={raw(`./citations/${text}.txt`)} />
  </Modal>
);

MyModal.propTypes = {
  text: PropTypes.string.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default MyModal;
