import React from 'react';
import PropTypes from 'prop-types';

export default function CheckBox(props) {
  const { checked, onChange } = props;

  const handleChangeValue = (e) => {
    const { checked } = e.target;
    if (onChange) {
      onChange(checked);
    }
  };

  return (
    <input type="checkbox" checked={checked} onChange={handleChangeValue} />
  );
}

CheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
};
