import React from 'react';
import PropTypes from 'prop-types';

import { icons } from '../../../assets';

import CheckBox from '../../../components/CheckBox';
import Button from '../../../components/Button';

export default function TodoItem(props) {
  const { item, onClick, onDeleteClick } = props;
  const { text, isCompleted } = item;

  const className = 'todo-list-item ' + (isCompleted ? 'completed' : 'pending');

  const handleItemPress = () => onClick(item);

  const handleTrashIcoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onDeleteClick) {
      onDeleteClick(item);
    }
  };

  return (
    <li className={className} onClick={handleItemPress}>
      <CheckBox checked={isCompleted} onChange={handleItemPress} />
      {text}
      <Button
        alt="delete item"
        containerClass="trash-icon"
        icon={icons.trash}
        onClick={handleTrashIcoClick}
      />
    </li>
  );
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
  }).isRequired,
  onClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};
