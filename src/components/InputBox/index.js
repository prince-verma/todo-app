import React from 'react';
import PropTypes from 'prop-types';

import { inputBox as constants } from '../../constants';

export default function InputBox(props) {
  const { className, value, handleChange, placeholder, onEnterPress } = props;

  const handleChangeText = (event) => {
    const text = event.target.value;
    handleChange(text);
  };

  const handleKeyPress = (event) => {
    if (event.key === constants.enter && onEnterPress) {
      onEnterPress();
    }
  };

  return (
    <input
      autoFocus
      type="text"
      className={`form-control ${className || ''}`}
      value={value}
      onChange={handleChangeText}
      onKeyPress={handleKeyPress}
      placeholder={placeholder}
    />
  );
}

InputBox.propTypes = {
  className: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  onEnterPress: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
