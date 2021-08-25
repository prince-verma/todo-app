import React from 'react';

import PropsTypes from 'prop-types';

export default function Button(props) {
  const { alt, containerClass, icon, iconClass, onClick } = props;
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClick(e);
  };

  return (
    <a href="/" className={containerClass} onClick={handleClick}>
      <img className={`icon ${iconClass}`} src={icon} alt={alt} />
    </a>
  );
}

Button.defaultProps = {
  alt: 'icon button',
};
Button.propsTypes = {
  alt: PropsTypes.string,
  containerClass: PropsTypes.string,
  icon: PropsTypes.number.isRequired,
  iconClass: PropsTypes.string,
  onClick: PropsTypes.func,
};
