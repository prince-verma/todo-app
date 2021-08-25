import React from 'react';
import PropTypes from 'prop-types';

export default function Info(props) {
  const { message } = props;

  return <p className="info">{message}</p>;
}

Info.propTypes = {
  message: PropTypes.string.isRequired,
};
