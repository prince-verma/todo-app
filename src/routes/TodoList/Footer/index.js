import React from 'react';
import PropTypes from 'prop-types';

import { todoList as constants } from '../../../constants';

import { icons } from '../../../assets';
import Button from '../../../components/Button';

export default function Footer(props) {
  const { count, totalCount, isCreateMode, changeTodoListMode } = props;

  const onChangeModeCtaClick = (mode) => () => changeTodoListMode(mode);

  return (
    <footer className="clearfix">
      <div className="pull-left buttons">
        <Button
          alt="Add New"
          containerClass={`button ${isCreateMode ? 'selected' : ''}`}
          icon={icons.add}
          onClick={onChangeModeCtaClick(constants.MODE_CREATE)}
        />
        <Button
          alt="Search"
          containerClass={`button ${!isCreateMode ? 'selected' : ''}`}
          icon={icons.search}
          onClick={onChangeModeCtaClick(constants.MODE_SEARCH)}
        />
      </div>
      <div className="pull-left">{`${count}/${totalCount} items left`}</div>
      <div className="pull-right">
        {/* <Filter {...{ filter, changeFilter }} /> */}
      </div>
    </footer>
  );
}

Footer.propTypes = {
  isCreateMode: PropTypes.bool.isRequired,
  changeTodoListMode: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
};
