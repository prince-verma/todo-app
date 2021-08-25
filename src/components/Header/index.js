import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
  const { title } = props;

  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}